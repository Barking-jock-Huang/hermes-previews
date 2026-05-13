param(
  [string]$RepoName = "hermes-previews",
  [switch]$Private
)

$ErrorActionPreference = "Stop"

$Token = $env:GITHUB_TOKEN
if (-not $Token) {
  $Token = $env:GH_TOKEN
}

if (-not $Token) {
  throw "Set GITHUB_TOKEN or GH_TOKEN before running this script."
}

$Headers = @{
  Accept = "application/vnd.github+json"
  Authorization = "Bearer $Token"
  "X-GitHub-Api-Version" = "2022-11-28"
  "User-Agent" = "hermes-previews-bootstrap"
}

function Invoke-GitHubJson {
  param(
    [Parameter(Mandatory = $true)][string]$Method,
    [Parameter(Mandatory = $true)][string]$Uri,
    [object]$Body = $null
  )

  $Params = @{
    Method = $Method
    Uri = $Uri
    Headers = $Headers
  }

  if ($null -ne $Body) {
    $Params.ContentType = "application/json"
    $Params.Body = ($Body | ConvertTo-Json -Depth 10)
  }

  Invoke-RestMethod @Params
}

function Get-StatusCode {
  param([object]$ErrorRecord)

  $Response = $ErrorRecord.Exception.Response
  if ($null -eq $Response) {
    return $null
  }

  return [int]$Response.StatusCode
}

$User = Invoke-GitHubJson -Method Get -Uri "https://api.github.com/user"
$Owner = $User.login
$RepoFullName = "$Owner/$RepoName"
$RepoApi = "https://api.github.com/repos/$RepoFullName"

Write-Host "Using GitHub owner: $Owner"

$Repo = $null
try {
  $Repo = Invoke-GitHubJson -Method Get -Uri $RepoApi
  Write-Host "Repository already exists: $RepoFullName"
}
catch {
  if ((Get-StatusCode $_) -ne 404) {
    throw
  }

  $Repo = Invoke-GitHubJson -Method Post -Uri "https://api.github.com/user/repos" -Body @{
    name = $RepoName
    description = "Static preview gallery for Hermes-generated assets."
    private = [bool]$Private
    has_issues = $false
    has_projects = $false
    has_wiki = $false
    auto_init = $false
  }
  Write-Host "Created repository: $RepoFullName"
}

git config user.name "Hermes"
git config user.email "$($User.id)+$Owner@users.noreply.github.com"

$Origin = $null
try {
  $Origin = git remote get-url origin 2>$null
}
catch {
  $Origin = $null
}

$ExpectedOrigin = "https://github.com/$RepoFullName.git"
if ($Origin) {
  if ($Origin -ne $ExpectedOrigin) {
    throw "Existing origin points to '$Origin', expected '$ExpectedOrigin'. Update it manually or remove origin before rerunning."
  }
}
else {
  git remote add origin $ExpectedOrigin
}

git branch -M main

$AuthBytes = [System.Text.Encoding]::ASCII.GetBytes("x-access-token:$Token")
$BasicAuth = [Convert]::ToBase64String($AuthBytes)
git -c "http.https://github.com/.extraheader=AUTHORIZATION: basic $BasicAuth" push -u origin main

$PagesBody = @{
  source = @{
    branch = "main"
    path = "/docs"
  }
}

try {
  Invoke-GitHubJson -Method Post -Uri "$RepoApi/pages" -Body $PagesBody | Out-Null
  Write-Host "Enabled GitHub Pages from main:/docs"
}
catch {
  $StatusCode = Get-StatusCode $_
  if ($StatusCode -eq 409 -or $StatusCode -eq 422) {
    Invoke-GitHubJson -Method Put -Uri "$RepoApi/pages" -Body $PagesBody | Out-Null
    Write-Host "Updated GitHub Pages source to main:/docs"
  }
  else {
    throw
  }
}

$Pages = Invoke-GitHubJson -Method Get -Uri "$RepoApi/pages"
$GalleryUrl = "https://$Owner.github.io/$RepoName/"
$PreviewUrl = "${GalleryUrl}2026-05-13-expo-omo-system/"

Write-Host "Repository: https://github.com/$RepoFullName"
Write-Host "Pages API URL: $($Pages.url)"
Write-Host "Gallery URL: $GalleryUrl"
Write-Host "Example preview URL: $PreviewUrl"
