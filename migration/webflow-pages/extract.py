#!/usr/bin/env python3
"""Rebuild CONTENT-MAP.md + content-map.json from raw/. Re-run after any refetch."""
import re, html, json
from pathlib import Path

root = Path(__file__).parent / 'raw'
def text(s):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s))).strip()

out = {}
for p in sorted(root.rglob('*.html')):
    src = p.read_text(errors='replace')
    title = re.search(r'<title>(.*?)</title>', src, re.S)
    desc  = re.search(r'<meta\s+name="description"\s+content="(.*?)"', src, re.S)
    heads, ded = [], []
    for m in re.finditer(r'<(h[1-4])[^>]*>(.*?)</\1>', src, re.S | re.I):
        t = text(m.group(2))
        if t and len(t) < 200:
            heads.append((m.group(1).lower(), t))
    for h in heads:
        if not ded or ded[-1] != h:
            ded.append(h)
    out[str(p.relative_to(root))] = {
        'title': text(title.group(1)) if title else '',
        'desc':  text(desc.group(1)) if desc else '',
        'heads': ded, 'bytes': len(src),
    }

(Path(__file__).parent / 'content-map.json').write_text(json.dumps(out, indent=1))

lines = ["# Live Webflow site — content map", "",
         "> Captured from https://www.texashouse.org on 2026-08-19. Raw HTML in `raw/`.",
         "> Regenerate with `python3 extract.py`. Headings only — full copy is in the raw files.", ""]
groups = {}
for rel, d in out.items():
    groups.setdefault(rel.split('/')[0] if '/' in rel else '(top level)', []).append((rel, d))
for g in sorted(groups, key=lambda x: (x != '(top level)', x)):
    lines += [f"## {g}", ""]
    for rel, d in sorted(groups[g]):
        lines.append(f"### `{rel}` — {d['bytes']:,} bytes")
        if d['title']: lines.append(f"**Title:** {d['title']}")
        if d['desc']:  lines.append(f"**Meta:** {d['desc']}")
        if d['heads']:
            lines.append("")
            lines += [f"- `{t}` {v}" for t, v in d['heads'][:28]]
            if len(d['heads']) > 28:
                lines.append(f"- …{len(d['heads'])-28} more headings")
        lines.append("")
(Path(__file__).parent / 'CONTENT-MAP.md').write_text("\n".join(lines))
print(f"{len(out)} pages mapped")
