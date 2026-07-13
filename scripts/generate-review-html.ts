// Generiert die HTML-Review-Seite (Body-Content für Artifact) aller CE-06-Wissens-Tabs.
// Lauf: npx tsx scripts/generate-review-html.ts > <scratchpad>/ce06-review.html
import { CE06_SITUATIONEN } from "../content/ce-06/situationen";

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Kerntext: \n\n -> Absätze, einzelne \n -> Leerzeichen.
const paras = (s: string) =>
  esc(s)
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, " ")}</p>`)
    .join("");

const slug = (s: string) => s.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

const situs = CE06_SITUATIONEN as Array<{
  situationId: string;
  titel: string;
  phasen: Array<{ phase?: string; kernSteps?: any[] }>;
}>;

type Tab = { step: any; iw: any; phase: string };
const bySitu: Array<{ id: string; titel: string; tabs: Tab[] }> = [];
let total = 0;
const kbCount: Record<string, number> = {};

for (const s of situs) {
  const tabs: Tab[] = [];
  for (const ph of s.phasen ?? []) {
    for (const step of ph.kernSteps ?? []) {
      if (step?.stepType === "inlineWissen" && step.inlineWissen) {
        tabs.push({ step, iw: step.inlineWissen, phase: String(ph.phase ?? "") });
        total++;
        const kb = String(step.kompetenzbereich ?? "");
        kbCount[kb] = (kbCount[kb] ?? 0) + 1;
      }
    }
  }
  if (tabs.length) bySitu.push({ id: s.situationId, titel: s.titel, tabs });
}

const kbLegend = Object.entries(kbCount)
  .sort()
  .map(([k, v]) => `<span class="kbchip">${esc(k)} · ${v}</span>`)
  .join("");

let cards = "";
for (const s of bySitu) {
  cards += `<section class="situ" id="s-${slug(s.id)}">\n`;
  cards += `<div class="situ-head"><h2>${esc(s.titel)}</h2><span class="situ-meta">${esc(s.id)} · ${s.tabs.length} Tab${s.tabs.length > 1 ? "s" : ""}</span></div>\n`;
  for (const { step, iw, phase } of s.tabs) {
    const id = esc(step.stepId);
    const kb = esc(step.kompetenzbereich);
    const kf = (step.kernfaktId ?? []).map(esc).join(", ");
    const quellen = (step.quellen ?? []).map(esc).join(" · ");
    cards += `<article class="tab" data-id="${id}">\n`;
    cards += `  <label class="chk"><input type="checkbox" class="done" /> <span>geprüft</span></label>\n`;
    cards += `  <h3>${esc(step.contentC1?.title) || id}</h3>\n`;
    cards += `  <div class="meta"><span class="kb">${kb}</span><span>Bloom ${esc(step.bloomLevel)}</span><span>${esc(kf)}</span><span class="phase">${esc(phase)}</span></div>\n`;
    if (quellen) cards += `  <p class="quellen">${quellen}</p>\n`;
    if (iw.storyAufhaenger) cards += `  <p class="aufhaenger">${esc(iw.storyAufhaenger)}</p>\n`;
    if (iw.kerntext) cards += `  <div class="kerntext">${paras(iw.kerntext)}</div>\n`;
    if (iw.faustregel) cards += `  <p class="faustregel"><span class="lbl">Faustregel</span> ${esc(iw.faustregel)}</p>\n`;
    if (Array.isArray(iw.spektrum) && iw.spektrum.length) {
      cards += `  <div class="spektrum"><span class="lbl">Spektrum</span><ul>`;
      for (const sp of iw.spektrum)
        cards += `<li><b>${esc(sp.patientName)}</b> <em>${esc(sp.hauptfaktor)}</em> — ${esc(sp.kurzbeschreibung)}</li>`;
      cards += `</ul></div>\n`;
    }
    if (iw.karteikarte) {
      cards += `  <div class="karte"><span class="lbl">Karteikarte</span><div class="karte-q">${esc(iw.karteikarte.vorderseite)}</div><div class="karte-a">${esc(iw.karteikarte.rueckseite)}</div></div>\n`;
    }
    cards += `  <textarea class="note" rows="1" placeholder="Anmerkung der Dozentin (nur du siehst das; unten „Anmerkungen kopieren“) …"></textarea>\n`;
    cards += `</article>\n`;
  }
  cards += `</section>\n`;
}

const nav = bySitu
  .map((s) => `<a href="#s-${slug(s.id)}">${esc(s.titel.split(" — ")[0].split(" (")[0])}</a>`)
  .join("");

const html = String.raw`
<style>
:root{
  --bg:#faf6f2; --surface:#ffffff; --surface-2:#f5ede7;
  --ink:#2b2422; --ink-soft:#6b5f58; --ink-faint:#9a8b82;
  --accent:#c4877f; --accent-deep:#a5645c; --sage:#5f8468; --sage-bg:#e7efe7;
  --line:#ebe0d8; --shadow:0 1px 2px rgba(59,42,36,.05),0 8px 24px -16px rgba(59,42,36,.18);
  --serif:Charter,"Iowan Old Style","Palatino Linotype",Georgia,"Times New Roman",serif;
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  --mono:"SF Mono","JetBrains Mono",ui-monospace,Menlo,Consolas,monospace;
}
@media (prefers-color-scheme:dark){
  :root{
    --bg:#1b1816; --surface:#252120; --surface-2:#2d2724;
    --ink:#ede6e0; --ink-soft:#b6a89f; --ink-faint:#867a72;
    --accent:#d99f97; --accent-deep:#e6b4ad; --sage:#8fb295; --sage-bg:#2b3a2e;
    --line:#39312d; --shadow:0 1px 2px rgba(0,0,0,.25),0 10px 28px -18px rgba(0,0,0,.7);
  }
}
:root[data-theme="light"]{
  --bg:#faf6f2; --surface:#ffffff; --surface-2:#f5ede7;
  --ink:#2b2422; --ink-soft:#6b5f58; --ink-faint:#9a8b82;
  --accent:#c4877f; --accent-deep:#a5645c; --sage:#5f8468; --sage-bg:#e7efe7;
  --line:#ebe0d8; --shadow:0 1px 2px rgba(59,42,36,.05),0 8px 24px -16px rgba(59,42,36,.18);
}
:root[data-theme="dark"]{
  --bg:#1b1816; --surface:#252120; --surface-2:#2d2724;
  --ink:#ede6e0; --ink-soft:#b6a89f; --ink-faint:#867a72;
  --accent:#d99f97; --accent-deep:#e6b4ad; --sage:#8fb295; --sage-bg:#2b3a2e;
  --line:#39312d; --shadow:0 1px 2px rgba(0,0,0,.25),0 10px 28px -18px rgba(0,0,0,.7);
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--sans);
  font-size:17px;line-height:1.65;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
.wrap{max-width:820px;margin:0 auto;padding:0 20px 120px}

/* Sticky header */
.top{position:sticky;top:0;z-index:20;background:color-mix(in srgb,var(--bg) 88%,transparent);
  backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.top-in{max-width:820px;margin:0 auto;padding:12px 20px}
.top h1{font-family:var(--serif);font-weight:600;font-size:1.15rem;margin:0;letter-spacing:-.01em}
.bar{height:6px;border-radius:99px;background:var(--surface-2);overflow:hidden;margin-top:9px}
.bar>i{display:block;height:100%;width:0;background:var(--accent);border-radius:99px;transition:width .3s ease}
.prog{font-family:var(--mono);font-size:.72rem;color:var(--ink-soft);margin-top:6px;display:flex;justify-content:space-between}

/* Intro */
.intro{padding:30px 0 8px}
.eyebrow{font-family:var(--mono);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent-deep)}
.intro h2{font-family:var(--serif);font-weight:600;font-size:1.9rem;line-height:1.15;margin:.35em 0 .3em;text-wrap:balance;letter-spacing:-.02em}
.intro p{color:var(--ink-soft);max-width:60ch;margin:.2em 0 1em}
.kbrow{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}
.kbchip{font-family:var(--mono);font-size:.72rem;color:var(--ink-soft);background:var(--surface-2);
  border:1px solid var(--line);border-radius:99px;padding:3px 9px}

/* Situation nav */
.nav{display:flex;flex-wrap:wrap;gap:6px;margin:18px 0 6px;padding-top:16px;border-top:1px solid var(--line)}
.nav a{font-size:.8rem;color:var(--ink-soft);text-decoration:none;background:var(--surface);
  border:1px solid var(--line);border-radius:99px;padding:5px 11px;transition:.15s}
.nav a:hover{color:var(--accent-deep);border-color:var(--accent)}

/* Situation */
.situ{margin-top:44px;scroll-margin-top:74px}
.situ-head{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding-bottom:6px;border-bottom:2px solid var(--accent)}
.situ-head h2{font-family:var(--serif);font-weight:600;font-size:1.35rem;margin:0;letter-spacing:-.01em;text-wrap:balance}
.situ-meta{font-family:var(--mono);font-size:.72rem;color:var(--ink-faint)}

/* Tab card */
.tab{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:14px;
  padding:22px 24px;margin-top:18px;box-shadow:var(--shadow)}
.tab.is-done{border-color:var(--sage);background:color-mix(in srgb,var(--sage-bg) 30%,var(--surface))}
.tab h3{font-family:var(--serif);font-weight:600;font-size:1.24rem;line-height:1.25;margin:.1em 64px .5em 0;
  letter-spacing:-.01em;text-wrap:balance}
.meta{display:flex;flex-wrap:wrap;gap:6px 8px;font-family:var(--mono);font-size:.72rem;color:var(--ink-soft);align-items:center}
.meta .kb{background:var(--sage-bg);color:var(--sage);border-radius:6px;padding:2px 8px;font-weight:600}
.meta .phase{margin-left:auto;color:var(--ink-faint)}
.quellen{font-size:.78rem;color:var(--ink-faint);font-style:italic;margin:.5em 0 0;border-left:2px solid var(--line);padding-left:10px}
.aufhaenger{color:var(--ink-soft);font-size:1.02rem;margin:1.1em 0 .2em}
.kerntext p{margin:.85em 0;max-width:66ch}
.faustregel{background:var(--surface-2);border-radius:10px;padding:12px 15px;margin:1.1em 0 0;font-size:.97rem}
.lbl{display:inline-block;font-family:var(--mono);font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;
  color:var(--accent-deep);margin-bottom:2px}
.faustregel .lbl{margin-right:6px}
.spektrum{margin-top:1.1em}
.spektrum ul{list-style:none;margin:.3em 0 0;padding:0;display:grid;gap:7px}
.spektrum li{font-size:.92rem;color:var(--ink-soft);padding-left:14px;position:relative}
.spektrum li::before{content:"";position:absolute;left:0;top:.62em;width:5px;height:5px;border-radius:99px;background:var(--accent)}
.spektrum b{color:var(--ink)}
.spektrum em{color:var(--accent-deep);font-style:normal;font-family:var(--mono);font-size:.78rem}
.karte{margin-top:1.2em;border:1px dashed var(--line);border-radius:10px;padding:13px 15px;background:var(--surface-2)}
.karte-q{font-weight:600;margin:.2em 0 .4em}
.karte-a{font-size:.92rem;color:var(--ink-soft)}

/* Review controls */
.chk{position:absolute;top:20px;right:22px;display:inline-flex;align-items:center;gap:6px;
  font-family:var(--mono);font-size:.72rem;color:var(--ink-soft);cursor:pointer;user-select:none}
.chk input{width:17px;height:17px;accent-color:var(--sage);cursor:pointer}
.note{width:100%;margin-top:14px;background:var(--bg);color:var(--ink);border:1px solid var(--line);
  border-radius:9px;padding:9px 12px;font-family:var(--sans);font-size:.9rem;line-height:1.5;resize:vertical;
  min-height:40px;transition:border-color .15s}
.note:focus{outline:none;border-color:var(--accent)}
.note.has{border-color:var(--accent);background:color-mix(in srgb,var(--accent) 6%,var(--bg))}

/* Floating copy */
.fab{position:fixed;right:20px;bottom:20px;z-index:30;font-family:var(--sans);font-size:.9rem;font-weight:600;
  color:#fff;background:var(--accent-deep);border:none;border-radius:99px;padding:12px 18px;cursor:pointer;
  box-shadow:0 6px 20px -6px rgba(0,0,0,.4);display:inline-flex;gap:8px;align-items:center;transition:.15s}
.fab:hover{background:var(--accent)}
.fab:disabled{opacity:.45;cursor:default}
.fab:focus-visible,.nav a:focus-visible,.note:focus-visible,.chk input:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.toast{position:fixed;left:50%;bottom:74px;transform:translateX(-50%) translateY(8px);z-index:40;
  background:var(--ink);color:var(--bg);font-size:.85rem;padding:9px 16px;border-radius:99px;opacity:0;
  pointer-events:none;transition:.25s}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
@media (prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
@media (max-width:560px){body{font-size:16px}.tab{padding:18px 17px}.wrap{padding:0 14px 120px}
  .tab h3{margin-right:0}.chk{position:static;margin-bottom:8px}}
</style>

<header class="top">
  <div class="top-in">
    <h1>CE-06 · Wissens-Tabs — fachliche Durchsicht</h1>
    <div class="bar"><i id="fill"></i></div>
    <div class="prog"><span id="pcount">0 / ${total} geprüft</span><span id="ncount">0 Anmerkungen</span></div>
  </div>
</header>

<div class="wrap">
  <div class="intro">
    <div class="eyebrow">Review-Dokument für die Dozentin</div>
    <h2>Alle ${total} Wissens-Tabs aus CE-06 auf einen Blick</h2>
    <p>Pro Tab der komplette Lehrtext. Setz den Haken „geprüft“, wenn er passt — oder schreib deine Korrektur ins Notizfeld. Unten sammelst du mit „Anmerkungen kopieren“ alles ein und schickst es mir zurück. Haken &amp; Notizen bleiben nur auf deinem Gerät gespeichert.</p>
    <div class="kbrow"><span class="eyebrow" style="align-self:center">Kompetenzbereiche</span>${kbLegend}</div>
    <nav class="nav">${nav}</nav>
  </div>
  ${cards}
</div>

<button class="fab" id="copybtn" disabled>Anmerkungen kopieren</button>
<div class="toast" id="toast"></div>

<script>
(function(){
  var KEY="ce06rev:v1:";
  var tabs=[].slice.call(document.querySelectorAll(".tab"));
  var fill=document.getElementById("fill"),pc=document.getElementById("pcount"),
      nc=document.getElementById("ncount"),btn=document.getElementById("copybtn"),toast=document.getElementById("toast");
  function ls(k,v){try{if(v===undefined)return localStorage.getItem(KEY+k);if(v===null)localStorage.removeItem(KEY+k);else localStorage.setItem(KEY+k,v);}catch(e){return null;}}
  function update(){
    var done=0,notes=0;
    tabs.forEach(function(t){
      if(t.querySelector(".done").checked)done++;
      if(t.querySelector(".note").value.trim())notes++;
    });
    fill.style.width=(tabs.length?done/tabs.length*100:0)+"%";
    pc.textContent=done+" / "+tabs.length+" geprüft";
    nc.textContent=notes+(notes===1?" Anmerkung":" Anmerkungen");
    btn.disabled=notes===0;
    btn.textContent=notes?("Anmerkungen kopieren ("+notes+")"):"Anmerkungen kopieren";
  }
  tabs.forEach(function(t){
    var id=t.getAttribute("data-id"),cb=t.querySelector(".done"),na=t.querySelector(".note");
    if(ls(id+":done")==="1"){cb.checked=true;t.classList.add("is-done");}
    var sv=ls(id+":note");if(sv){na.value=sv;na.classList.add("has");}
    // autosize
    function size(){na.style.height="auto";na.style.height=Math.max(40,na.scrollHeight)+"px";}
    if(na.value)size();
    cb.addEventListener("change",function(){t.classList.toggle("is-done",cb.checked);ls(id+":done",cb.checked?"1":null);update();});
    na.addEventListener("input",function(){na.classList.toggle("has",!!na.value.trim());ls(id+":note",na.value.trim()?na.value:null);size();update();});
  });
  btn.addEventListener("click",function(){
    var lines=["CE-06 Wissens-Tabs — Anmerkungen der Dozentin",""];
    tabs.forEach(function(t){
      var n=t.querySelector(".note").value.trim();if(!n)return;
      var title=(t.querySelector("h3").textContent||"").trim();
      lines.push("• ["+t.getAttribute("data-id")+"] "+title);
      lines.push("  "+n.replace(/\n/g,"\n  "));lines.push("");
    });
    var text=lines.join("\n");
    function ok(){toast.textContent="Anmerkungen kopiert — jetzt mir in den Chat einfügen";toast.classList.add("show");setTimeout(function(){toast.classList.remove("show");},2600);}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(ok,function(){window.prompt("Kopieren mit Strg/Cmd+C:",text);});}
    else{window.prompt("Kopieren mit Strg/Cmd+C:",text);}
  });
  update();
})();
</script>
`;

process.stdout.write(html);
