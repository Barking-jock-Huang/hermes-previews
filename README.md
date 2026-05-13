# Hermes Previews

Static preview gallery for Hermes-generated HTML, SVG, PNG, PDF, and related assets.

This repository is designed for GitHub Pages. Hermes only needs permission to push static files; no application server is required.

## GitHub Pages

Configure GitHub Pages with:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/docs`

Public gallery URL:

```text
https://<owner>.github.io/hermes-previews/
```

Preview URL format:

```text
https://<owner>.github.io/hermes-previews/<preview-id>/
```

## Preview Structure

Each preview belongs in its own folder under `docs/`:

```text
docs/<preview-id>/
├── index.html
├── assets/
└── metadata.json
```

Recommended preview ID format:

```text
YYYY-MM-DD-short-title
```

Example:

```text
2026-05-13-expo-omo-system
```

## Metadata

Use this shape for `metadata.json`:

```json
{
  "id": "2026-05-13-expo-omo-system",
  "title": "展會 OMO 智慧平台系統圖",
  "created_at": "2026-05-13T04:30:00+08:00",
  "created_by": "Hermes",
  "type": "html-infographic",
  "status": "published",
  "entry": "index.html"
}
```

## Publishing a New Preview

1. Create `docs/<preview-id>/`.
2. Add the preview entry file at `docs/<preview-id>/index.html`.
3. Put page-specific files in `docs/<preview-id>/assets/`.
4. Add `docs/<preview-id>/metadata.json`.
5. Update `docs/index.html` so the gallery links to the preview.
6. Commit and push to `main`.

GitHub Pages will publish the new preview automatically.

## First-Time GitHub Setup

After creating a fine-grained PAT with repository creation, contents write, administration write, and Pages write permissions, set it in the current shell:

```powershell
$env:GITHUB_TOKEN = "<your-token>"
```

Then publish this repository and enable GitHub Pages:

```powershell
.\scripts\publish-github-pages.ps1
```

The script creates or reuses `hermes-previews` under the token owner account, pushes `main`, and configures Pages to publish from `/docs`.
