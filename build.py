from pathlib import Path
import shutil

from jinja2 import Environment, FileSystemLoader, select_autoescape

ROOT = Path(__file__).parent
TEMPLATE_DIR = ROOT / "templates"
ASSET_DIR = ROOT / "static"
OUTPUT_DIR = ROOT / "docs"

PAGES = [
    {
        "template": "main.html",
        "output": "index.html",
        "title": "Tabletop Widgets",
        "active": "home",
    },
    {
        "template": "about.html",
        "output": "about.html",
        "title": "About",
        "active": "about",
    },
]


def build_site() -> None:
    environment = Environment(
        loader=FileSystemLoader(TEMPLATE_DIR),
        autoescape=select_autoescape(["html", "xml"]),
    )
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    for page in PAGES:
        template = environment.get_template(page["template"])
        output_path = OUTPUT_DIR / page["output"]
        output_path.write_text(template.render(page=page), encoding="utf-8")

    shutil.copytree(ASSET_DIR, OUTPUT_DIR, dirs_exist_ok=True)
    print(f"Built {len(PAGES)} pages in {OUTPUT_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    build_site()
