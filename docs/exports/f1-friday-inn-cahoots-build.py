import re, pathlib, subprocess
SP=pathlib.Path('/private/tmp/claude-501/-Users-cobramanmustang/26bac520-f933-483e-b434-5f5aaba52e3b/scratchpad')
T=pathlib.Path('/Users/cobramanmustang/.claude/skills/texas-house-brief/assets/template.html').read_text()

head=T[:T.index('<div class="wrap" id="top">')]
head=head.replace('<title>TITLE — replace me</title>','<title>F1 Friday at Inn Cahoots</title>',1)
assert 'F1 Friday at Inn Cahoots' in head
tail=T[T.index('<script data-txh>\n(function(){\n  function wire(el){'):]
logo=re.search(r'<img class="brandmark"[^>]*>', T).group(0)

# reviewer list for this document
old_btns=re.search(r'<button type="button" data-name="Will".*?<button type="button" data-name="Jesse"[^>]*>Jesse</button>', tail, re.S).group(0)
names=['Will','Jake','Jesse','Marisa','Alex','Jimmy']
new_btns='\n        '.join(f'<button type="button" data-name="{n}" aria-pressed="false">{n}</button>' for n in names)
tail=tail.replace(old_btns,new_btns,1)
tail=tail.replace("var PRESET=['Will','Marisa','Christin','Alex','Jesse']","var PRESET=["+",".join(f"'{n}'" for n in names)+"]",1)
assert "'Jake'" in tail and 'data-name="Jake"' in tail

css='''<style data-txh>
  /* ── F1 Friday: the brief's red/green system, mapped onto brand tokens ── */
  :root {
    --green-accent: var(--sage); --green-text: var(--sage);
    --green-surface: color-mix(in srgb, var(--sage) 13%, var(--raised));
    --green-bg: color-mix(in srgb, var(--sage) 9%, var(--gunmetal));
    --red-accent: var(--clay-text); --red-text: var(--clay-text);
    --red-surface: color-mix(in srgb, var(--clay-text) 13%, var(--raised));
    --red-bg: color-mix(in srgb, var(--clay-text) 9%, var(--gunmetal));
    --amber-accent: var(--dune);
  }
  .hero-line { font-family: var(--display); font-size: clamp(24px, 3.4vw, 40px); line-height: 1.08; color: var(--ivory); margin: 28px 0 0; max-width: 24ch; }
  .hero-line .amt { color: var(--green-text); font-size: 1em; font-weight: inherit; }
  .minibar { position: sticky; top: 0; z-index: 30; display: flex; gap: 6px; overflow-x: auto; background: var(--gunmetal); border-bottom: 1px solid var(--rule); padding: 10px 0; margin: 40px 0 0; scrollbar-width: none; }
  .minibar::-webkit-scrollbar { display: none; }
  .minibar a { flex: 0 0 auto; font-family: var(--mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--fg3); text-decoration: none; border: 1px solid var(--rule); padding: 6px 10px; }
  .minibar a:hover { color: var(--ivory); border-color: var(--edge); }
  .minibar a.is-current { color: var(--ivory); border-color: var(--clay); }
  section[id], .parthead[id] { scroll-margin-top: 64px; }
  .amt { font-weight: 800; font-size: 1.2em; color: var(--ivory); font-variant-numeric: tabular-nums; white-space: nowrap; }
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-top: 12px; }
  .stat { background: var(--raised); border: 1px solid var(--rule); border-top: 2px solid var(--edge); padding: 16px; }
  .stat__k { font-family: var(--mono); font-size: 10px; letter-spacing: .12em; text-transform: uppercase; color: var(--fg3); }
  .stat__v { font-family: var(--display); font-size: clamp(30px, 4vw, 44px); line-height: 1.02; color: var(--ivory); margin-top: 10px; }
  .stat__v .amt { font-size: 1em; font-weight: inherit; }
  .stat__s { font-size: 13px; color: var(--fg3); margin-top: 6px; }
  .stat--green { background: var(--green-surface); border-top-color: var(--green-accent); }
  .stat--green .stat__v, .stat--green .stat__v .amt, .stat--green .stat__k { color: var(--green-text); }
  .verdict { font-size: 19px; color: var(--ivory); }
  .verdict .amt { color: var(--ivory); }
  .verdict b .amt, .verdict b { color: var(--green-text); }
  .recs { padding-left: 22px; max-width: 74ch; }
  .recs li { margin-bottom: 12px; line-height: 1.55; }
  .paths { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; }
  .path { padding: 22px; border: 1px solid var(--rule); }
  .path--red { background: var(--red-surface); border-top: 3px solid var(--red-accent); }
  .path--green { background: var(--green-surface); border-top: 3px solid var(--green-accent); }
  .path__tag { font-family: var(--mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
  .path--red .path__tag { color: var(--red-text); }
  .path--green .path__tag { color: var(--green-text); }
  .path h3, .lever h3 { font-size: 19px; font-weight: 700; line-height: 1.3; color: var(--ivory); margin: 8px 0 10px; }
  .path p { max-width: none; }
  table.kv { min-width: 0; }
  table.kv td:first-child { color: var(--fg3); width: 42%; }
  table.kv tr.net td { border-top: 1px solid var(--edge); font-weight: 700; color: var(--ivory); }
  .path--red tr.net .amt { color: var(--red-text); }
  .path--green tr.net .amt { color: var(--green-text); }
  .why { list-style: none; padding: 0; margin: 8px 0 0; }
  .why li { margin: 0 0 10px; padding-left: 24px; position: relative; line-height: 1.5; }
  .why .mk { position: absolute; left: 0; top: 0; font-weight: 800; }
  .why--red .mk { color: var(--red-accent); }
  .why--green .mk { color: var(--green-accent); }
  td.c-red { background: var(--red-bg); }
  td.c-green { background: var(--green-bg); }
  td .mk { font-weight: 800; margin-right: 6px; }
  td.c-red .mk { color: var(--red-accent); }
  td.c-green .mk { color: var(--green-accent); }
  td.c-swing, td.c-swing .amt { color: var(--green-text); font-weight: 800; white-space: nowrap; }
  td.good, td.good .amt { color: var(--green-text); font-weight: 700; }
  td.bad, td.bad .amt { color: var(--red-text); font-weight: 700; }
  tr.tot td { font-weight: 700; border-top: 1px solid var(--edge); color: var(--ivory); }
  tr.hl td { color: var(--ivory); font-weight: 700; background: color-mix(in srgb, var(--dune) 8%, transparent); }
  .levers { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }
  .lever { background: var(--raised); border: 1px solid var(--rule); padding: 18px; }
  .lever__n { font-family: var(--display); font-size: 30px; color: var(--fg3); line-height: 1; }
  .lv { margin: 0 0 8px; padding: 10px 12px 10px 34px; position: relative; font-size: 14px; line-height: 1.5; max-width: none; }
  .lv .mk { position: absolute; left: 12px; top: 10px; font-weight: 800; }
  .lv--red { background: var(--red-bg); }
  .lv--red .mk { color: var(--red-accent); }
  .lv--green { background: var(--green-bg); }
  .lv--green .mk { color: var(--green-accent); }
  .appendix { font-size: 15px; }
  .appendix p, .appendix li { color: var(--ivory-dim); }
  .appendix h3.sub { font-size: 16px; font-weight: 700; color: var(--ivory); margin: 28px 0 8px; }
  table.check td:first-child { font-family: var(--mono); color: var(--green-text); width: 44px; }
  table.check td:last-child { white-space: nowrap; font-family: var(--mono); font-size: 12px; color: var(--fg3); }
  table.check tr td { border-left: 0; }
  table.check tr { box-shadow: inset 3px 0 0 var(--green-accent); }
  .closing { margin-top: 72px; padding: 32px; background: var(--green-surface); border-top: 3px solid var(--green-accent); }
  .closing__big { font-family: var(--display); font-size: clamp(26px, 4vw, 46px); line-height: 1.05; color: var(--ivory); margin: 0 0 16px; }
  .closing__big .amt { color: var(--green-text); font-size: 1em; font-weight: inherit; }
  .closing p { max-width: 64ch; }
  .closing__muted { color: var(--fg3); font-size: 14px; margin: 18px 0 0; }
  .sources li { margin-bottom: 6px; color: var(--ivory-dim); }
  @media (max-width: 620px) { .path, .closing { padding: 16px; } .lever { padding: 14px; } }
  @media print { .minibar { display: none; } }
</style>
'''

def T_(head, rows, cls='', label='table'):
    out=f'<div class="scroll" tabindex="0" role="region" aria-label="{label}"><table'+(f' class="{cls}"' if cls else '')+'>'
    if head: out+='<tr>'+''.join(f'<th>{h}</th>' for h in head)+'</tr>'
    for r in rows:
        rcls, cells = (r[0], r[1]) if isinstance(r, tuple) else ('', r)
        out+='<tr'+(f' class="{rcls}"' if rcls else '')+'>'
        for c in cells:
            if isinstance(c, tuple): out+=f'<td class="{c[0]}">{c[1]}</td>'
            else: out+=f'<td>{c}</td>'
        out+='</tr>'
    return out+'</table></div>'

def sec(id_, num, title):
    return f'<section id="{id_}">\n  <div class="sechead"><span class="num">{num}</span><h2>{title}</h2><a class="note" href="#feedback" data-fb-open>add feedback</a></div>\n'
X='<span class="mk" aria-hidden="true">✕</span>'
V='<span class="mk" aria-hidden="true">✓</span>'
R=lambda s:('c-red', X+s)
G=lambda s:('c-green', V+s)

body=f'''
<div class="wrap" id="top">

<header class="masthead">
  {logo}
  <div class="eyebrow">Texas House · F1 week · pricing and go-to-market · September 2026 · <span style="color:var(--warn)">confidential</span></div>
  <h1>F1 Friday at<br>Inn Cahoots</h1>
  <p class="dates txh-mono">Friday, October 23, 2026 · Elderbrook · Disko Cowboy · Inn Cahoots, East 6th · <span id="countdown">35 days out</span></p>
  <p class="hero-line">Two pathways. One nets $122K. One loses money.</p>
</header>

<nav class="minibar" aria-label="Sections">
  <a href="#summary">Summary</a><a href="#pathways">Pathways</a><a href="#decisions">Decisions</a><a href="#levers">Levers</a><a href="#data">Data</a><a href="#actions">Actions</a><a href="#sources">Sources</a>
</nav>

{sec('summary','§01','Executive summary')}
  <div class="label" style="margin-bottom:8px">What this is</div>
  <p>A pricing and go-to-market plan for our Friday night F1-week party, built from live market data rather than estimates. It covers what comparable Austin F1 parties have actually charged, what Elderbrook sells for in his own rooms right now, a full budget, a Meta ads plan, and a press and outreach strategy.</p>
  <p>The purpose is to settle ticket pricing with evidence and give the team one shared set of numbers before we announce.</p>

  <div class="label" style="margin-top:32px">Headline numbers</div>
  <div class="stats">
    <div class="stat"><div class="stat__k">Total budget</div><div class="stat__v">$133K</div></div>
    <div class="stat"><div class="stat__k">Sponsorship</div><div class="stat__v">$65K</div><div class="stat__s">committed · $130K at target</div></div>
    <div class="stat"><div class="stat__k">Ticket revenue, base case</div><div class="stat__v">$80K</div></div>
    <div class="stat"><div class="stat__k">Ticket revenue, strong case</div><div class="stat__v">$106K</div></div>
    <div class="stat stat--green"><div class="stat__k">✓ Best case net</div><div class="stat__v">+$122K</div></div>
    <div class="stat stat--green"><div class="stat__k">✓ Target net</div><div class="stat__v">$75K to $100K</div></div>
  </div>

  <div class="label" style="margin-top:36px;margin-bottom:8px">Best case</div>
  <p>Elderbrook closes at $50K, Disko Cowboy at $3K, the driver appearance costs nothing, sponsorship reaches $130K, GA sells 1,000 and VIP sells out at 50.</p>
  <p class="verdict">Revenue $255K against $133K cost. <b>Net +$122K.</b></p>
  <p>That is the ceiling, not the plan. Hold to <b>$75K to $100K net</b>, which assumes sponsorship near $115K, GA clearing 800 to 900, and VIP selling out. On a first-year event anything above $75K is a strong result and earns the right to run it again next year at a higher price.</p>

  <div class="label" style="margin-top:36px;margin-bottom:8px">Seven recommendations</div>
  <ol class="recs">
    <li><b>Tier GA: $65 early bird, $89 advance, $109 final release, $125 door.</b> Elderbrook's own headline rooms start between $44 and $93. The Austin F1 ceiling is $145, set by a bigger act on Saturday with official COTA backing. Tiering fills the garden while keeping $125 as the press number.</li>
    <li><b>VIP at $600, capped at 50 seats.</b> This is where the premium belongs. Buyers are not price-sensitive, the room is genuinely scarce, and $600 signals the event's tier better than a high GA price would.</li>
    <li><b>Take the driver only at zero cost.</b> At 50 VIP seats a $40K fee cannot return its money at any defensible price. Three good paths: Haas free, a sponsor buying it as a named activation, or Red Bull as a trade.</li>
    <li><b>Announce within seven days of Elderbrook signing.</b> Five weeks is short. His name is what sells tickets, so the announce should not wait on the driver. Hold the driver as a second press beat.</li>
    <li><b>$7,500 on Meta over 30 days plus $1,500 creative.</b> Warm audiences first, then lookalikes, then travel-intent for arriving F1 visitors.</li>
    <li><b>Work the zero-cost channels.</b> Hotel concierge desks, sponsor block sales, two social posts written into Elderbrook's contract, a co-post from Disko Cowboy's 159K followers.</li>
    <li><b>Hold the delegation at 100.</b> Every comp above that is a $600 seat that cannot be sold.</li>
  </ol>

  <div class="callout" style="margin-top:32px">
    <div class="eyebrow">The two decisions that set everything else</div>
    <p style="max-width:none;margin:12px 0 0">Closing Elderbrook at $50K, and the sponsorship total. The rest is execution.</p>
  </div>
</section>

{sec('pathways','§02','The two pathways')}
  <div class="paths">
    <div class="path path--red">
      <div class="path__tag">✕ Red pathway · the instinct</div>
      <h3>Premium pricing, pay for everything</h3>
      <p>The instinct is that an F1 crowd is affluent, so charge accordingly and buy the strongest bill available. Here is what that produces.</p>
      {T_(None,[['GA price','$175 flat'],['VIP price','$600'],['Driver','Paid, $40K'],['Total cost','<b>$173K</b>'],['GA sold','~300'],['Ticket revenue','<b>$48K</b>'],['Sponsorship','$95K'],('net',['− Net','−$30K']),['Garden','One third full']],'kv','Red pathway')}
      <div class="label" style="margin:20px 0 8px">Why it fails</div>
      <ul class="why why--red">
        <li>{X}No Austin F1 party has sold a $175 GA ticket. The ceiling is $145, on Saturday, with a bigger act and official COTA backing.</li>
        <li>{X}Elderbrook's own 6,000-cap LA headline starts at $44. His Vegas nightclub room starts at $93. $175 is roughly four times his face value.</li>
        <li>{X}We compete against free events with real names. AT&amp;T Garage had Cheat Codes for free last year.</li>
        <li>{X}$40K for a driver against 50 VIP seats cannot return its money at any price.</li>
        <li>{X}A half-empty garden is the reputational risk. A low ticket price is not.</li>
      </ul>
    </div>
    <div class="path path--green">
      <div class="path__tag">✓ Green pathway · tiered pricing, zero-cost driver</div>
      <h3>Price GA to fill the room</h3>
      <p>Put the premium in VIP where buyers are not price-sensitive. Take the driver only if it costs nothing.</p>
      {T_(None,[['GA price','$65 → $89 → $109 → $125'],['VIP price','$600, capped at 50'],['Driver','Free or sponsor-funded, $0'],['Total cost','<b>$133K</b>'],['GA sold','900 to 1,000'],['Ticket revenue','<b>$106K to $125K</b>'],['Sponsorship','$130K'],('net',['+ Net','+$122K']),['Garden','Full']],'kv','Green pathway')}
      <div class="label" style="margin:20px 0 8px">Why it works</div>
      <ul class="why why--green">
        <li>{V}$89 sits above the comparable Austin comp ($35, Vintage Culture) and below the ceiling ($145, Sofi Tukker). Defensible in both directions.</li>
        <li>{V}$125 door is the number that shows up in press. That is the price people repeat.</li>
        <li>{V}Elderbrook sells out small destination rooms right now: Aspen 96% sold, Club Space Miami 98% sold, Marquee Dayclub sold out.</li>
        <li>{V}VIP at $600 signals the event's tier far better than an unsellable GA price.</li>
        <li>{V}Early bird at $65 sells out fast and gives us a "selling fast" proof point in week one.</li>
      </ul>
    </div>
  </div>
</section>

{sec('decisions','§03','Decision table')}
  <p class="muted">Every row is the same decision made two ways. The swing is what the green choice is worth against the red one.</p>
  {T_(['Decision','✕ Red choice','✓ Green choice','+ Swing'],[
    ['<b>GA pricing</b>',R('$175 flat'),G('$65 / $89 / $109 / $125'),('c-swing','+$58K')],
    ['<b>Driver</b>',R('Pay $40K'),G('Free, sponsored, or cut'),('c-swing','+$40K')],
    ['<b>Headliner</b>',R('$100K act we cannot name'),G('Elderbrook at $50K, named'),('c-swing','+$50K')],
    ['<b>VIP</b>',R('Underprice near GA'),G('$600, 50 seats'),('c-swing','+$21K')],
    ['<b>Delegation</b>',R('Uncapped, drifts to 150'),G('Hard cap at 100'),('c-swing','+$12K')],
    ['<b>Announce timing</b>',R('Wait for driver confirmation'),G('Announce on Elderbrook signature'),('c-swing','+ ~200 tickets')],
  ],'','Decision table')}
</section>

{sec('levers','§04','The five levers')}
  <p class="muted">Each lever is one decision, shown both ways.</p>
  <div class="levers">
    <div class="lever"><div class="lever__n">1</div><h3>Ticket price</h3>
      <p class="lv lv--red">{X}$175 flat → ~300 sold, $48K, empty garden</p>
      <p class="lv lv--green">{V}Tiered $65 to $125 → 900+ sold, $106K, full garden</p></div>
    <div class="lever"><div class="lever__n">2</div><h3>The driver</h3>
      <p class="lv lv--red">{X}Pay $40K → returns $10K to $17K on 50 VIP seats. Loses $23K to $30K.</p>
      <p class="lv lv--green">{V}Haas free, sponsor-funded activation, or Red Bull trade → same guest experience, $0 cost.</p></div>
    <div class="lever"><div class="lever__n">3</div><h3>The headliner</h3>
      <p class="lv lv--red">{X}A $100K act with a competing contract, billable only as "special guest" → nothing to announce, no draw.</p>
      <p class="lv lv--green">{V}Elderbrook at $50K with his name on the poster → Grammy nominated, 1.5B streams, Red Rocks, Coachella.</p></div>
    <div class="lever"><div class="lever__n">4</div><h3>VIP</h3>
      <p class="lv lv--red">{X}Price it near GA → leaves money on the table with the exact buyers who will not notice.</p>
      <p class="lv lv--green">{V}$600, capped at 50, delegation held at 100 → $30K from a room already full of the right people.</p></div>
    <div class="lever"><div class="lever__n">5</div><h3>Timing</h3>
      <p class="lv lv--red">{X}Wait until everything is confirmed → lose a week of a five-week runway.</p>
      <p class="lv lv--green">{V}Announce on Elderbrook's signature, hold the driver as a second beat → two press cycles instead of one.</p></div>
  </div>
</section>

<hr class="rule-dashed" style="margin-top:96px"><div class="parthead" id="data" style="margin-top:24px">
  <h2 class="parthead__h">Supporting data</h2>
  <p class="standfirst" style="margin-top:16px">Everything below is the evidence for the numbers above.</p>
</div>

<div class="appendix">

{sec('sec-a','A','What Elderbrook actually sells for')}
  <p>Five recent and upcoming headline dates, from live listings:</p>
  {T_(['Date','Venue','City','Capacity','Price','Status'],[
    ['Aug 15, 2026','Marquee Nightclub, The Cosmopolitan','Las Vegas','5,000','From $93','On sale'],
    ['Aug 8, 2026','Marquee Dayclub, The Cosmopolitan','Las Vegas','5,000','Club pricing','<b>Sold out</b>'],
    ['Aug 7, 2026','Belly Up Aspen','Aspen','~450','~$110 all-in','<b>4% of tickets left</b>'],
    ['Aug 21, 2026','Club Space Miami','Miami','~1,500','Club pricing','<b>2% of tickets left</b>'],
    ['Oct 13, 2026','Shrine Expo Hall','Los Angeles','6,000','From $44 to $49','On sale'],
  ],'','Elderbrook headline dates')}
  <p style="margin-top:16px">Aggregate: SeatPick lists from $48 with an average near $117. Eventworld from $18 depending on market. Live history of 103 concerts in 63 cities across 18 countries.</p>
  <h3 class="sub">What this tells us</h3>
  <p>Two facts pull in opposite directions.</p>
  <ol>
    <li><b>His floor is low.</b> A 6,000-cap LA headline starts at $44. He is not a $165 act in a big room.</li>
    <li><b>His small-room demand is real.</b> Aspen 96% sold, Club Space 98% sold, Marquee Dayclub sold out. In an intimate, high-income, destination market he sells out.</li>
  </ol>
  <p>Inn Cahoots on F1 Friday is closer to Aspen and Miami than to Shrine Expo Hall. Destination crowd, affluent, limited capacity, one night. That supports <b>$85 to $125</b>, not $44 and not $165.</p>
  <h3 class="sub">Credentials for the poster</h3>
  <p>Grammy and Ivor Novello nominated. Over 1.5 billion global streams. "Cola" with CamelPhat. Headlined Red Rocks. Played Coachella, EDC, Bonnaroo, Ultra. Toured with Jungle, Rufus Du Sol and Odesza. Collaborations with Diplo, Bob Moses, Black Coffee and Rudimental.</p>
</section>

{sec('sec-b','B','What Austin F1 parties have charged')}
  <p>Every downtown F1-week party with a public price, 2024 and 2025:</p>
  {T_(['Year','Event','Talent','Night','Price'],[
    ['2025','SI Circuit Series (official COTA afterparty)','Sofi Tukker, DJ UnKommon','Saturday','From $145'],
    ['2025','F1 Kickoff Party, Powder Room','Sinclair','Thursday','$100'],
    ['2025','Hotel Van Zandt rooftop pool party','DJ','Friday','$40'],
    ['2025','Gunther Steiner Live, Paramount','Red Flags Podcast','Sunday','$35 to $45'],
    ['2024','SI Circuit Series','Loud Luxury, DJ Vice','Saturday','From $35'],
    ['2024','Vintage Culture, Concourse Project','Vintage Culture, Doozie','Sunday','$35 GA / $75 VIP'],
  ],'','Austin F1 party prices')}
  <p style="margin-top:16px">Free competition the same week: AT&amp;T Garage with Cheat Codes, Aston Martin x Glenfiddich (invite only), Kalimotxo afterparty (free RSVP), Red Bull at Distribution Hall, Williams pop-up driver meet and greets at a Home Depot.</p>
  <p><b>Read.</b> The paid ceiling is $145, on Saturday, for the official COTA party with a bigger act and four liquor sponsors. Nobody has cleared $175 GA. Free events with real names are the main competitor, which is why the ticket has to feel like a decision rather than a gamble.</p>
</section>

{sec('sec-c','C','The price matrix')}
  <p>Where Elderbrook sits against the Austin comps:</p>
  {T_(['Act','Draw tier','Austin F1 price','Night'],[
    ['Sofi Tukker','Above Elderbrook','$145','Saturday'],
    ('hl',['Elderbrook','Our headliner','$89 recommended','Friday']),
    ['Sinclair','Below','$100','Thursday'],
    ['Vintage Culture','Comparable','$35 GA / $75 VIP','Sunday'],
    ['DJ only','Well below','$40','Friday'],
  ],'','Price matrix')}
  <h3 class="sub">Adjustments applied to the base</h3>
  {T_(['Factor','Effect'],[
    ['Friday, softest of the three nights',('bad','− $10')],
    ['No drinks included in GA, cash bar',('bad','− $10')],
    ['Downtown, walkable, 12,000 sq ft garden',('good','+ $10')],
    ['Disko Cowboy, local credibility',('good','+ $5')],
    ['First-year event, no buyer list',('bad','− $10')],
    ['Driver meet and greet if confirmed',('good','+ $5')],
  ],'kv','Price adjustments')}
  <h3 class="sub">Recommended structure</h3>
  {T_(['Tier','Price','Cap','Purpose'],[
    ['Early bird GA','$65','200','Momentum. Sells out fast, creates the first press line.'],
    ['Advance GA','$89','600','The core number.'],
    ['Final release GA','$109','200','Scarcity pricing in the last two weeks.'],
    ['Door GA','$125','Remainder','Week-of buyers.'],
    ['VIP','$600','50 paid','IYKYK room, bottomless drinks, drivers, private entrance.'],
    ['Delegation','Comp','100 hard cap','Family offices, investors, athletes, sponsors, press.'],
  ],'','Ticket structure')}
  <p style="margin-top:16px">Blended GA lands around <b>$88</b>.</p>
  <p><b>Capacity, decided.</b> VIP is IYKYK only, because that is where the bar and the bottomless drinks are. IYKYK holds roughly 150. Delegation capped at <b>100</b>, <b>50 VIP tickets on sale</b>. That is the whole room. The 100 is a hard cap, not a target: every comp above it is a $600 ticket that cannot be sold. Confirm IYKYK fire capacity with the venue.</p>
  <h3 class="sub">Revenue model</h3>
  {T_(['Scenario','GA sold','GA revenue','VIP sold','VIP revenue','Total'],[
    ['Downside','350','$30K','20','$12K','<b>$42K</b>'],
    ['Low-mid','500','$44K','30','$18K','<b>$62K</b>'],
    ('hl',['Base','650','$57K','38','$23K','<b>$80K</b>']),
    ['Good','900','$79K','45','$27K','<b>$106K</b>'],
    ['Home run','1,200','$106K','50','$30K','<b>$136K</b>'],
  ],'','Revenue model')}
  <p style="margin-top:16px">Plan on the base. Treat anything above as upside.</p>
  <h3 class="sub">Why $89 and not $175</h3>
  <p>Elderbrook's own 6,000-cap LA headline starts at $44. Asking $175 in Austin means asking the market to pay roughly four times his face value, on the softest night of the weekend, against free events with known names. The $145 ceiling was set by a bigger act on a better night with official COTA backing.</p>
  <p>$89 is defensible. $125 is the door price that shows up in press. $600 VIP is the number that signals a premium event. The premium lives in VIP where buyers are not price-sensitive, not in GA where the room has to fill.</p>
</section>

{sec('sec-d','D','Budget')}
  {T_(['Line','Cost'],[
    ['Elderbrook','$50K'],['Disko Cowboy (support)','$3K'],['Production, venue, staff, drinks','$58K'],['Photo, video, food','$10K'],
    ['Marketing (Meta ads, creative, tools)','$9K'],['Hotel concierge program','$1.2K'],['Ticketing fees and contingency','$1.8K'],
    ('tot',['Total, no driver','$133K']),['Driver (optional)','+$40K'],('tot',['Total with paid driver','$173K']),
  ],'kv','Budget')}
  <h3 class="sub">Where we stand</h3>
  <p>Sponsorship committed: $65K, with a path to $100K on Jake's side and up to $30K on ours. Planning range $65K to $130K.</p>
  {T_(['Setup','Sponsorship','Tickets (base $80K)','Result'],[
    ['No driver','$65K','$80K',('good','+$12K')],
    ['No driver','$95K','$80K',('good','+$42K')],
    ['No driver','$130K','$80K',('good','+$77K')],
    ['Paid driver','$65K','$80K',('bad','−$28K')],
    ['Paid driver','$95K','$80K',('good','+$2K')],
    ['Paid driver','$130K','$80K',('good','+$37K')],
  ],'','Where we stand')}
  <h3 class="sub">Best case, line by line</h3>
  {T_(['Line','Best case'],[
    ['Elderbrook','$50K'],['Disko Cowboy','$3K'],['Driver (free or sponsor-funded)','$0'],['Production, venue, staff, drinks','$58K'],
    ['Photo, video, food','$10K'],['Marketing and concierge','$10.2K'],['Ticketing fees and contingency','$1.8K'],
    ('tot',['Total cost','$133K']),
    ['Sponsorship (combined, at target)','$130K'],['GA tickets (1,000 at $95 blended)','$95K'],['VIP (50 at $600)','$30K'],
    ('tot',['Total revenue','$255K']),('tot',['Net',('good','+$122K')]),
  ],'kv','Best case')}
</section>

{sec('sec-e','E','The driver decision')}
  <p>The driver is a VIP product, not a GA product. He does not sell $89 garden tickets. He sells the room. So the fee has to be judged against incremental VIP revenue.</p>
  {T_(['','No driver','With driver'],[
    ['VIP product','Elderbrook, bottomless drinks, private entrance','Same plus driver meet and greet'],
    ['Defensible price','$400','$600 to $750'],['Seats available','50','50'],['VIP revenue','$20K','$30K to $37K'],
    ('tot',['Incremental value','none','$10K to $17K']),
  ],'','Driver value')}
  <p style="margin-top:16px">$40K of cost against $10K to $17K of incremental revenue. Gap of $23K to $30K.</p>
  <p><b>The constraint is seats, and it is fixed.</b> VIP is IYKYK only because that is where the bar is. Delegation at 100, 50 seats on sale. Even at $1,000 a seat, above what a secondary driver supports, 50 seats is $50K gross and the driver returns almost nothing. No price fixes a 50-seat room.</p>
  {T_(['Scenario','Seats','Price','VIP revenue','Driver cost','Net effect'],[
    ['No driver','50','$400','$20K','$0','baseline'],
    ['Free driver','50','$600','$30K','$0',('good','+$10K')],
    ['Sponsor-funded','50','$600','$30K','$0 to us',('good','+$10K')],
    ['Paid driver','50','$600','$30K','−$40K',('bad','−$30K')],
    ['Paid driver at $750','50','$750','$37K','−$40K',('bad','−$23K')],
  ],'','Driver scenarios')}
  <p style="margin-top:16px"><b>Conclusion: worth having only at $0.</b> Three paths, in order:</p>
  <ol>
    <li><b>Haas free.</b> Pending with our contact. Best outcome, real race drivers.</li>
    <li><b>Sponsor-funded activation.</b> "Driver Lounge presented by X" turns a cost line into a sponsorship line. A brand wanting the F1 association plus access to a room of family offices is the natural buyer. Pitch this week.</li>
    <li><b>Red Bull as a trade.</b> Branding, VIP access, use of our video content.</li>
  </ol>
  <p><b>Decision date: October 6.</b> If none lands, drop the driver and put announce weight on Elderbrook. VIP then prices at $400 to $450.</p>
  <p class="muted">Context: Williams gave driver meet and greets away free at a Home Depot in Austin last year.</p>
</section>

{sec('sec-f','F','Meta ads plan')}
  <p><b>$7,500 paid media over 30 days, plus $1,500 creative production.</b></p>
  {T_(['Phase','Dates','Spend','Objective'],[
    ['1: Announce','Days 1 to 7','$1,500','Reach and video views. Build the retargeting pool.'],
    ['2: Early bird','Days 8 to 16','$2,000','Conversions. Sell out the $65 tier.'],
    ['3: Core push','Days 17 to 28','$2,500','Conversions at $89. Heaviest lookalike spend.'],
    ['4: Urgency','Days 29 to 37','$1,500','Final release and door. Retargeting, high frequency.'],
  ],'','Meta phases')}
  <p style="margin-top:16px">At $12 to $22 cost per ticket for a first-year event, $7,500 should produce <b>350 to 600 paid tickets</b>. The rest comes from lists, press and organic.</p>
  <h3 class="sub">Audiences</h3>
  <p><b>Tier 1, warm.</b> Texas House list of 10,000. Jake's investor list of 6,500 if he opts in. Website visitors and video viewers from Phase 1. Instagram and Facebook engagers, 365 days.</p>
  <p><b>Tier 2, lookalikes.</b> 1% of the Texas House list, geo-fenced to Texas. 1% of the investor list if permitted. 1% of ticket purchasers once 50+ have sold, which becomes the best audience by week three.</p>
  <p><b>Tier 3, cold.</b> Austin metro 25 to 54, interests in Formula 1, Elderbrook, ODESZA, Rufus Du Sol, CamelPhat, Lane 8, house music, Austin nightlife. Travel-intent targeting for people arriving in Austin, the highest-value segment. Geo-fence COTA and the downtown hotel corridor for the final push.</p>
  <h3 class="sub">On the investor list</h3>
  <p>Using Jake's 6,500-contact list is optional and entirely his call. Two ways it can work:</p>
  <p><b>Option A.</b> The list is shared and uploaded to our ad account as a Custom Audience, then deleted after the campaign.</p>
  <p><b>Option B, recommended.</b> He uploads it to his own Business Manager as a Custom Audience and shares that audience to our ad account through Meta's audience-sharing feature. We can target it but never see the contacts, and he can revoke access at any time. His data never leaves his account. Takes about ten minutes.</p>
  <h3 class="sub">Creative</h3>
  <p><b>12 to 15 assets.</b></p>
  {T_(['Type','Count','Notes'],[
    ['Announce video, 15 sec vertical','2','Elderbrook footage, venue, F1 framing. Highest priority.'],
    ['Lineup static, 4:5 and 9:16','3','The poster.'],
    ['Venue atmosphere, 9:16','2','Austin Garden at night. Sells the room.'],
    ['Social proof / press pull','2','Use once local press picks it up.'],
    ['VIP-specific','2','Drivers, bottomless, private entrance.'],
    ['Urgency / final release','2','Last two weeks only.'],
    ['Driver announcement','2','Hold until confirmed. Second press beat.'],
  ],'','Creative assets')}
  <p style="margin-top:16px">Test 3 to 4 at a time, kill anything under 1% CTR after $200 spend, scale the winner. Vertical video will outperform static on cold audiences.</p>
  <p><b>Tracking.</b> Meta pixel on the ticket page, Purchase event with value, live before Phase 1. Without it the algorithm cannot optimize and half the budget is wasted.</p>
</section>

{sec('sec-g','G','Communications and outreach')}
  <h3 class="sub" style="margin-top:0">The announce</h3>
  <p>One push, one day, every channel at once. No soft launch. Gated on Elderbrook's signature, not the driver.</p>
  <p>Package: lineup image, 15-second video, 200-word release, venue and date, ticket link live at the moment of announce.</p>
  <h3 class="sub">Press targets</h3>
  <p>Pitch all in the same 48 hours.</p>
  {T_(['Outlet','Why','Angle'],[
    ['CultureMap Austin','Runs the definitive annual F1 parties roundup','"First-year F1 party lands Grammy-nominated Elderbrook"'],
    ['Do512','Highest-traffic Austin event listing','Listing plus featured placement'],
    ['Austin Monthly','Runs "Insider’s Guide to the Best Parties" during F1','Insider angle, VIP and drivers'],
    ['Tribeza','Runs "Top Events to Catch During F1 Weekend"','Design and venue angle, Inn Cahoots'],
    ['Austin Chronicle','Music credibility','Elderbrook and Disko Cowboy as a bill'],
    ['ATX Gossip','Social and nightlife reach','Who is coming, the VIP room'],
    ['Austin Business Journal','Business angle','F1 week economics, sponsorship'],
    ['EDM.com, Dancing Astronaut, Your EDM','National dance press','Elderbrook plays F1 weekend'],
  ],'','Press targets')}
  <p style="margin-top:16px">Second press beat when the driver confirms. Two announcements beat one.</p>
  <h3 class="sub">Partner channels</h3>
  <ol>
    <li><b>Hotel concierge desks.</b> See Section H. Owned by our team member with existing hotel relationships.</li>
    <li><b>Brand block sales.</b> Two or three sponsors buying 50 to 100 tickets each as client hospitality removes 150 to 300 tickets from the risk pile in three calls. Start this week.</li>
    <li><b>F1 fan communities.</b> r/formula1, r/Austin, F1 Discord servers, Austin F1 Facebook groups. Organic, not ads.</li>
    <li><b>Delegation amplification.</b> Every comped guest gets the link and is asked to share.</li>
    <li><b>Disko Cowboy's audience.</b> 159K Instagram followers with real Austin credibility. Co-post built into his deal.</li>
    <li><b>Elderbrook's channels.</b> Two social posts negotiated into the contract. Costs nothing, worth thousands in reach. Ask before signing.</li>
  </ol>
  <h3 class="sub">Email cadence</h3>
  {T_(['Send','Timing','To'],[
    ['Announce','Day 1','Full Texas House list, 10K'],['Early bird warning','Day 8','Non-openers plus full list'],
    ['Early bird closing','Day 15','Full list'],['VIP-specific','Day 12','Investor and family office segment'],
    ['Two weeks out','Day 23','Full list'],['Final week','Day 31','Full list'],['48 hours','Day 35','Non-purchasers'],
  ],'','Email cadence')}
  <p style="margin-top:16px">The investor list should get a separate, more personal VIP-focused send from Jake rather than from the main list. Different audience, different product.</p>
</section>

{sec('sec-h','H','Hotel concierge program')}
  <p><b>Why it matters.</b> Out-of-town guests arrive Thursday and Friday and ask the desk where to go that night. That question is worth more than any ad impression. High-intent buyers at near-zero acquisition cost.</p>
  <p><b>Budget: $1,200.</b> Printed cards, delivery, small comp allocation.</p>
  <p><b>The offer,</b> per property: 4 to 6 VIP comp passes (easiest yes), or $15 per ticket commission on their code, or both for high-volume properties. Lead with comps.</p>
  <p><b>Tracking.</b> One unique promo code per hotel, $10 off so the guest has a reason to use it. Codes, not links, because concierges tell guests things verbally. The ticketing platform reports sales by code automatically. That is the whole attribution system.</p>
  <p><b>Targets.</b> Hotel Van Zandt, The LINE Austin, Austin Proper, Fairmont Austin, W Austin, JW Marriott, Hotel ZaZa, Kimpton Hotel Ella, Thompson Austin, Hotel Magdalena, Hotel Saint Cecilia, Four Seasons. Boutique properties convert best. Larger flags sometimes have exclusive F1 programming and will decline.</p>
  <p><b>Sequence.</b> Identify the concierge by name. One short email with flyer, code and offer. Hand-deliver 50 printed cards per property the week before, which is the step that actually works. Text check-in during race week.</p>
  <p><b>Expected yield.</b> 12 approached, 6 to 8 participating, <b>60 to 150 tickets</b> for roughly $1,200 and two days of one person's time.</p>
</section>

</div>

{sec('actions','§05','Action checklist')}
  {T_(['✓','Action','By'],[
    ['1','Elderbrook signs at $50K, two social posts included','This week'],
    ['2','Disko Cowboy confirmed at $3K, co-post included','This week'],
    ['3','Ticket platform live, Meta pixel firing Purchase events','Before announce'],
    ['4','Announce: Elderbrook, Disko Cowboy, venue, date, link live','Within 7 days of signing'],
    ['5','Press pitched across all outlets in Section G','Announce week'],
    ['6','Early bird sells out, 200 at $65','First 10 days'],
    ['7','Block sales opened with sponsors and hotels','Week one'],
    ['8','Driver resolved: Haas, sponsor-funded, or cut','Oct 6'],
    ['9','Sponsorship reaches $100K','Oct 6'],
    ['10','Concierge cards hand-delivered to 12 properties','Oct 9'],
    ['11','Delegation held at 100, one owner on the list','Before invites'],
  ],'check','Action checklist')}
  <div class="label" style="margin-top:36px;margin-bottom:8px">Decisions needed from the group</div>
  <ol class="recs">
    <li>Approve GA at $65 / $89 / $109 / $125, VIP at $600, delegation at 100, 50 VIP on sale.</li>
    <li>Close Elderbrook at $50K with two social posts included.</li>
    <li>Close Disko Cowboy at $3K with a co-post.</li>
    <li>Hold the driver decision to October 6. Haas first, then sponsor-funded, then Red Bull trade.</li>
    <li>Walk through Option B on the investor list.</li>
    <li>Approve the $9K marketing budget and $1.2K concierge line.</li>
    <li>Confirm ticket platform and get the pixel live.</li>
    <li>Set the announce date, gated on Elderbrook's signature.</li>
  </ol>

  <div class="closing">
    <p class="closing__big">✓ Target: $75K to $100K net.</p>
    <p>The $122K is the ceiling. $75K on a first-year event is a strong result and earns the right to run it again next year at a higher price.</p>
    <p class="closing__muted">The two decisions that set everything else: closing Elderbrook at $50K, and the sponsorship total.</p>
  </div>
</section>

{sec('sources','§06','Sources')}
  <ul class="sources">
    <li>SeatGeek, SeatPick, Eventworld, StubHub, Songkick, Concerts50, Bandsintown listings for Elderbrook, September 2026</li>
    <li>Belly Up Aspen and Tao Group ticketing pages</li>
    <li>CultureMap Austin F1 roundups, 2024 and 2025</li>
    <li>Tribeza, "Top Events to Catch During Austin's Formula 1 U.S. Grand Prix Weekend," October 2025</li>
    <li>Austin Monthly, "An Insider's Guide to the Best Parties, Concerts, and Shows During F1"</li>
    <li>Ticketmaster artist pages for Elderbrook</li>
    <li>Inn Cahoots venue specifications</li>
  </ul>

  <div class="guide" id="how-to-review" style="margin-top:48px">
    <div class="label" style="margin-bottom:8px">How to review this</div>
    <p style="max-width:none;margin:0 0 8px">This plan is shared with the partner group. Notes are welcome on any section.</p>
    <p style="max-width:none;margin:0 0 8px"><b>If you were added by email,</b> select any text and choose Comment. The comment stays pinned to that passage and everyone can see it and reply.</p>
    <p style="max-width:none;margin:0 0 8px"><b>If you opened the public link,</b> use the <span class="chip">add feedback</span> link at the top of any section, or the Feedback button at the bottom right. Write your notes, then press <b>Copy batch</b> and paste it into an email to will@texashouse.org. Your notes wait in this browser between visits.</p>
  </div>
</section>

</div>

<script data-txh>
(function(){{
  var el=document.getElementById('countdown');
  if(el){{var d=Math.ceil((Date.UTC(2026,9,23,5,0,0)-Date.now())/864e5);
    el.textContent=d>1?d+' days out':d===1?'Tomorrow':d===0?'Tonight':'Held October 23, 2026';}}
  var links=[].slice.call(document.querySelectorAll('.minibar a'));
  var ids=links.map(function(a){{return a.getAttribute('href').slice(1)}});
  function on(){{var cur=ids[0];ids.forEach(function(id){{var t=document.getElementById(id);if(t&&t.getBoundingClientRect().top<90)cur=id}});
    links.forEach(function(a){{a.classList.toggle('is-current',a.getAttribute('href')==='#'+cur)}})}}
  addEventListener('scroll',on,{{passive:true}});on();
}})();
</script>
'''

# Large type for every dollar figure of $10K and up, in text only
AMT=re.compile(r'(?<![\w$])([+−-]?\$(?:\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)(?:K|M)?)')
def val(tok):
    t=tok.lstrip('+−-').lstrip('$'); mult=1
    if t.endswith('K'): mult=1e3; t=t[:-1]
    elif t.endswith('M'): mult=1e6; t=t[:-1]
    return float(t.replace(',',''))*mult
def wrap_text(html):
    parts=re.split(r'(<script.*?</script>|<[^>]+>)', html, flags=re.S)
    n=0
    for i,p in enumerate(parts):
        if not p or p.startswith('<'): continue
        def f(m):
            nonlocal n
            if val(m.group(1))>=10000: n+=1; return f'<span class="amt">{m.group(1)}</span>'
            return m.group(1)
        parts[i]=AMT.sub(f,p)
    return ''.join(parts), n
body, wrapped = wrap_text(body)

frag=head+css+body+tail
assert '—' not in body.replace('&mdash;',''), 'em dash in body'
(SP/'f1-friday.html').write_text(frag)
out='<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>\n'+frag+'\n</body></html>\n'
(SP/'F1-Friday-at-Inn-Cahoots.html').write_text(out)
print('amounts wrapped:', wrapped, '| fragment KB:', len(frag)//1024)
print('divs', len(re.findall(r'<div\b',frag)), frag.count('</div>'), '| sections', frag.count('<section id='), frag.count('</section>'), '| tables', frag.count('<table'), frag.count('</table>'))
for i,js in enumerate(re.findall(r'<script data-txh>(.*?)</script>',frag,re.S)):
    pathlib.Path(SP/f'_f{i}.js').write_text(js); r=subprocess.run(['node','--check',str(SP/f'_f{i}.js')],capture_output=True,text=True)
    if r.returncode: print('JS ERROR',i,r.stderr[:300])
print('ok')
