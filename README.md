# TTWidgets

Small tabletop tools for D&D game nights, published as a static site with GitHub Pages.

## Build the site

Install the project dependencies and generate the site into `docs/`:

```powershell
uv sync
uv run python build.py
```

The generated `docs/index.html` is the home page. `docs/about.html` is the sample About page. The build copies the contents of `static/` into `docs/` and can be run again after editing templates or assets.

## Project layout

- `build.py` renders the Jinja templates and copies static assets.
- `templates/base.html` contains the shared page layout and navigation.
- `templates/main.html` and `templates/about.html` are the sample pages.
- `static/css/` and `static/js/` contain shared browser assets, copied to `docs/css/` and `docs/js/` when built.
- `docs/` is the generated GitHub Pages publish directory.

In the repository's GitHub Pages settings, choose the branch containing your published content and `/docs` as the publishing source.
