/*
 * The illustration set. Each entry returns a standalone SVG string; the build
 * script exports it as .svg, .png and .webp into public/art/.
 */
import {
  C, svg, soft, shine, shadow, limb, sparkle, heart, note, dot, face,
  feather, child, kanha, matki, diya, marigold, leafShape, book, hand, shade,
} from "./lib.mjs";

const pieces = {};

/* ---------------------------------------------------------------- hero */
pieces["hero-sharing"] = () =>
  svg(640, 540, "Little Kanha shares a pot of butter with two children under a kadamba tree", (def) => {
    let blossoms = "";
    [[110, 150], [170, 110], [230, 150], [140, 210], [205, 200], [260, 215], [90, 230], [180, 160]].forEach(([x, y]) => {
      blossoms += `<circle cx="${x}" cy="${y}" r="9" fill="${C.marigold}" stroke-width="2.5"/>${dot(x - 2, y - 2, 2.5, C.mango)}`;
    });
    return `
<circle cx="520" cy="96" r="54" fill="${soft(def, C.mango)}"/>
${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => { const r = (a * Math.PI) / 180; return `<path d="M${520 + Math.cos(r) * 68} ${96 + Math.sin(r) * 68} L${520 + Math.cos(r) * 86} ${96 + Math.sin(r) * 86}" stroke="${C.marigold}" stroke-width="6"/>`; }).join("")}
<path d="M20 500 C20 450 160 436 330 444 C500 436 620 450 620 500 C620 528 20 528 20 500Z" fill="${soft(def, C.parrot)}"/>
<path d="M150 470 C152 400 140 320 168 250 L196 252 C184 330 196 400 200 470Z" fill="${soft(def, C.bark)}"/>
<path d="M172 300 C150 280 128 282 110 290" fill="none" stroke="${C.bark}" stroke-width="10"/>
<path d="M60 220 C30 170 70 110 120 110 C130 60 220 50 250 100 C310 100 320 170 290 210 C310 260 240 280 200 260 C160 290 90 280 80 250 C50 250 45 235 60 220Z" fill="${soft(def, C.leaf)}"/>
${shine(120, 140, 26, 12)}
${blossoms}
${shadow(330, 476, 70)}${shadow(470, 476, 55)}${shadow(560, 482, 45)}
${kanha(def, 330, 268, 44)}
${limb("M300 320 C292 345 300 360 318 366", C.krishna, 13)}
${limb("M360 320 C368 345 360 360 342 366", C.krishna, 13)}
${matki(def, 330, 382, 34)}
${child(def, 470, 300, { r: 36, skin: C.skin2, shirt: C.lotus, hair: "bob", legs: C.shyam })}
${limb("M444 350 C420 360 400 352 384 340", C.skin2, 12)}
<circle cx="380" cy="336" r="9" fill="${C.cream}"/>
${child(def, 565, 330, { r: 30, skin: C.skin3, shirt: C.sky, hair: "pony", legs: C.peacock })}
${limb("M540 372 C520 380 505 372 498 360", C.skin3, 11)}
${heart(420, 250, 13)}${heart(600, 250, 10, C.kumkum)}
${note(250, 330, C.shyam)}${note(395, 210, C.peacock)}
${sparkle(450, 170, 12)}${sparkle(610, 190, 9, C.lotus)}${sparkle(290, 160, 8, C.sky)}`;
  });

/* -------------------------------------------------------- what saru means */
pieces["saru-diya"] = () =>
  svg(360, 300, "A lit diya resting on a lotus", (def) => {
    let petals = "";
    [[-60, 0.9], [-30, 1], [0, 1.05], [30, 1], [60, 0.9]].forEach(([rot, k]) => {
      petals += `<path d="M180 250 C${150} ${250 - 70 * k} ${170} ${250 - 100 * k} 180 ${250 - 110 * k} C${190} ${250 - 100 * k} ${210} ${250 - 70 * k} 180 250Z" transform="rotate(${rot} 180 250)" fill="${soft(def, C.lotus)}"/>`;
    });
    return `
<circle cx="180" cy="160" r="122" fill="${C.mango}" opacity="0.22" stroke="none"/>
${shadow(180, 272, 110)}
<ellipse cx="180" cy="258" rx="120" ry="18" fill="${soft(def, C.parrot)}"/>
${petals}
${diya(def, 180, 196, 46)}
${sparkle(70, 70, 10)}${sparkle(300, 60, 12, C.lotus)}${sparkle(310, 170, 8, C.sky)}${heart(56, 170, 10)}`;
  });

/* ----------------------------------------------------------- counter icons */
pieces["icon-smile"] = () =>
  svg(140, 140, "A smiling face", (def) => `
<circle cx="70" cy="70" r="52" fill="${soft(def, C.mango)}"/>${shine(50, 45, 10, 6)}
<circle cx="52" cy="62" r="5" fill="${C.ink}" stroke="none"/><circle cx="88" cy="62" r="5" fill="${C.ink}" stroke="none"/>
<path d="M44 82 Q70 108 96 82" fill="${C.white}"/>
<ellipse cx="38" cy="80" rx="7" ry="4" fill="${C.lotus}" opacity="0.7" stroke="none"/><ellipse cx="102" cy="80" rx="7" ry="4" fill="${C.lotus}" opacity="0.7" stroke="none"/>`);

pieces["icon-book"] = () =>
  svg(140, 140, "An open book", (def) => `${book(def, 70, 74, 100, C.parrot)}${sparkle(112, 28, 9)}`);

pieces["icon-plate"] = () =>
  svg(140, 140, "A thali with roti and dal", (def) => `
<ellipse cx="70" cy="78" rx="58" ry="40" fill="${soft(def, "#d9dde6")}"/>
<ellipse cx="70" cy="74" rx="46" ry="30" fill="${C.white}" stroke-width="3"/>
<circle cx="52" cy="70" r="18" fill="${soft(def, "#e9b872")}"/>${dot(48, 66, 2.5, C.bark, 0.6)}${dot(58, 74, 2.5, C.bark, 0.6)}
<ellipse cx="92" cy="66" rx="14" ry="10" fill="${soft(def, C.marigold)}"/>
<ellipse cx="88" cy="88" rx="12" ry="8" fill="${soft(def, C.parrot)}"/>`);

pieces["icon-heart"] = () =>
  svg(140, 140, "A heart held by a helping hand", (def) => `
${heart(70, 62, 36, soft(def, C.lotus))}${shine(52, 48, 8, 5)}
<path d="M24 104 C50 96 90 96 116 104" fill="none" stroke="${C.skin2}" stroke-width="16"/><path d="M24 104 C50 96 90 96 116 104" fill="none" stroke-width="3"/>`);

/* ----------------------------------------------------------------- programs */
pieces["program-khushi"] = () =>
  svg(360, 280, "A peacock dancing among balloons — Khushi, celebrations", (def) => {
    let fan = "";
    for (let i = -4; i <= 4; i++) fan += feather(def, 180, 190, 120, i * 18);
    return `
${fan}
${shadow(180, 258, 60)}
<path d="M160 250 L164 230 M200 250 L196 230" stroke-width="5"/>
<ellipse cx="180" cy="200" rx="28" ry="36" fill="${soft(def, C.shyam)}"/>
<path d="M172 175 C166 140 176 120 190 118 C200 122 198 140 188 176Z" fill="${soft(def, C.shyam)}"/>
<path d="M186 108 L184 96 M192 108 L194 95 M198 110 L204 99" stroke-width="3"/>
<circle cx="191" cy="128" r="3.5" fill="${C.ink}" stroke="none"/>
<path d="M198 132 L210 135 L198 138Z" fill="${C.mango}" stroke-width="2.5"/>
${[[46, 70, C.lotus], [312, 60, C.sky], [300, 140, C.mango], [60, 150, C.parrot]].map(([x, y, c]) => `<path d="M${x} ${y + 30} Q${x - 6} ${y + 60} ${x + 4} ${y + 90}" fill="none" stroke-width="2.5"/><ellipse cx="${x}" cy="${y}" rx="22" ry="27" fill="${soft(def, c)}"/>${shine(x - 8, y - 9, 5, 9)}<path d="M${x - 4} ${y + 27} L${x + 4} ${y + 27} L${x} ${y + 33}Z" fill="${c}" stroke-width="2.5"/>`).join("")}
${sparkle(120, 30, 9)}${sparkle(250, 26, 11, C.lotus)}`;
  });

pieces["program-vidya"] = () =>
  svg(360, 280, "Mitthu the parrot reading on a stack of books — Vidya, learning", (def) => `
${shadow(180, 258, 110)}
<rect x="90" y="214" width="180" height="34" rx="8" fill="${soft(def, C.shyam)}"/><path d="M110 230 L250 230" stroke="${C.mango}" stroke-width="4"/>
<rect x="104" y="182" width="156" height="32" rx="8" fill="${soft(def, C.lotus)}"/>
<rect x="96" y="152" width="166" height="30" rx="8" fill="${soft(def, C.mango)}"/><path d="M116 167 L240 167" stroke="${C.marigold}" stroke-width="4"/>
${book(def, 248, 118, 90, C.peacock)}
<path d="M120 150 C108 120 112 92 134 76 C160 60 186 80 184 108 C182 130 170 146 150 152Z" fill="${soft(def, C.parrot)}"/>
<path d="M126 148 C112 160 96 172 86 192 C104 182 120 170 136 152Z" fill="${C.leaf}"/>
<path d="M152 100 C170 110 174 130 160 142 C150 128 146 114 152 100Z" fill="${C.leaf}"/>
<path d="M176 84 C192 84 198 96 190 108 C184 102 178 98 172 98Z" fill="${C.kumkum}"/>
<circle cx="160" cy="88" r="7" fill="${C.white}" stroke-width="3"/><circle cx="162" cy="88" r="3" fill="${C.ink}" stroke="none"/>
${shine(138, 96, 8, 14)}
${sparkle(300, 46, 11)}${sparkle(60, 70, 9, C.sky)}
<text x="216" y="60" font-family="Baloo 2, sans-serif" font-size="30" font-weight="800" fill="${C.marigold}" stroke-width="2">अ</text>
<text x="280" y="88" font-family="Baloo 2, sans-serif" font-size="26" font-weight="800" fill="${C.lotus}" stroke-width="2">A</text>
<text x="60" y="124" font-family="Baloo 2, sans-serif" font-size="26" font-weight="800" fill="${C.sky}" stroke-width="2">૧</text>`);

pieces["program-saath"] = () =>
  svg(360, 280, "Three children holding hands — Saath, belonging", (def) => `
${shadow(180, 262, 150)}
${limb("M110 176 C130 190 150 190 166 178", C.skin2, 11)}
${limb("M196 178 C212 190 232 190 250 176", C.skin1, 11)}
${child(def, 90, 108, { r: 32, skin: C.skin2, shirt: C.parrot, hair: "short", legs: C.shyam })}
${child(def, 180, 98, { r: 34, skin: C.skin3, shirt: C.lotus, hair: "pony", legs: C.peacock })}
${child(def, 270, 108, { r: 32, skin: C.skin1, shirt: C.sky, hair: "bob", legs: C.marigold })}
${heart(135, 40, 10)}${heart(225, 36, 12, C.kumkum)}${sparkle(320, 40, 9)}${sparkle(40, 50, 9, C.sky)}`);

pieces["program-anna"] = () =>
  svg(360, 280, "A shared thali with roti, dal, rice and sweets — Anna, meals", (def) => `
${shadow(180, 250, 140)}
<ellipse cx="180" cy="180" rx="140" ry="72" fill="${soft(def, "#d9dde6")}"/>
<ellipse cx="180" cy="174" rx="118" ry="58" fill="${C.white}" stroke-width="3"/>
<ellipse cx="128" cy="170" rx="34" ry="22" fill="${soft(def, C.cream)}"/>${dot(118, 165, 3, C.white)}${dot(134, 172, 3, C.white)}
<circle cx="190" cy="160" r="20" fill="${soft(def, C.marigold)}"/>
<circle cx="236" cy="176" r="18" fill="${soft(def, C.parrot)}"/>
<circle cx="186" cy="202" r="15" fill="${soft(def, C.mango)}"/>
<ellipse cx="200" cy="96" rx="58" ry="22" fill="${soft(def, "#e9b872")}"/>${dot(184, 92, 3, C.bark, 0.6)}${dot(210, 100, 3, C.bark, 0.6)}${dot(226, 90, 3, C.bark, 0.6)}
<path d="M110 70 C104 54 116 46 112 30 M130 70 C124 54 136 46 132 30" fill="none" stroke-width="3" opacity="0.5"/>
${sparkle(300, 60, 10)}${heart(60, 80, 10)}`);

/* -------------------------------------------------------------- lessons */
const lesson = (name, title, bg, draw) => {
  pieces[`lesson-${name}`] = () =>
    svg(240, 200, title, (def) => `<circle cx="120" cy="100" r="86" fill="${bg}" opacity="0.25" stroke="none"/>${draw(def)}`);
};

lesson("thank-you", "A speech bubble saying thank you in Hindi, with a heart — say thank you", C.lotus, (def) => `
${shadow(120, 180, 50)}
<path d="M40 50 Q40 30 60 30 L180 30 Q200 30 200 50 L200 120 Q200 140 180 140 L100 140 L70 170 L76 140 L60 140 Q40 140 40 120Z" fill="${soft(def, C.white)}"/>
<text x="120" y="84" text-anchor="middle" font-family="Baloo 2, sans-serif" font-size="34" font-weight="800" fill="${C.shyam}" stroke="none">धन्यवाद</text>
<text x="120" y="116" text-anchor="middle" font-family="Baloo 2, sans-serif" font-size="20" font-weight="700" fill="${C.ink}" stroke="none">thank you!</text>
${heart(196, 36, 14)}${sparkle(30, 160, 9)}`);

lesson("share-roti", "A roti broken in two halves — share your roti", C.marigold, (def) => `
${shadow(120, 172, 70)}
<path d="M112 50 A56 56 0 0 0 112 162 L104 140 L116 120 L102 100 L114 80Z" fill="${soft(def, "#e9b872")}"/>
<path d="M128 50 A56 56 0 0 1 128 162 L120 140 L132 120 L118 100 L130 80Z" fill="${soft(def, "#e9b872")}"/>
${dot(84, 90, 4, C.bark, 0.5)}${dot(96, 128, 4, C.bark, 0.5)}${dot(156, 86, 4, C.bark, 0.5)}${dot(150, 130, 4, C.bark, 0.5)}
${heart(120, 30, 10)}`);

lesson("plant-tree", "A sapling in a pot with a watering can — plant a tree", C.parrot, (def) => `
${shadow(110, 180, 60)}
<path d="M80 130 L140 130 L132 176 L88 176Z" fill="${soft(def, C.clay)}"/>
<path d="M110 130 L110 82" stroke-width="5"/>
${leafShape(110, 96, 40, -40)}${leafShape(110, 110, 38, -150)}${leafShape(110, 84, 30, -90, C.leaf)}
<path d="M150 90 L180 74 L196 96 L168 112Z" fill="${soft(def, C.sky)}"/><path d="M152 92 L124 70" stroke-width="6"/>
${dot(126, 82, 3, C.sky)}${dot(118, 92, 3, C.sky)}${sparkle(60, 60, 9)}`);

lesson("help-friend", "Two children sharing one umbrella in the rain — help a friend", C.sky, (def) => `
${shadow(120, 186, 70)}
${[[40, 40], [70, 20], [190, 30], [210, 70], [30, 100]].map(([x, y]) => `<path d="M${x} ${y} q-6 12 0 16 q6 -4 0 -16Z" fill="${C.sky}" stroke-width="2.5"/>`).join("")}
<path d="M120 52 L120 126" stroke-width="5"/>
<path d="M44 92 Q50 38 120 34 Q190 38 196 92 Q178 80 160 92 Q140 80 120 92 Q100 80 80 92 Q62 80 44 92Z" fill="${soft(def, C.marigold)}"/>
${child(def, 92, 128, { r: 20, skin: C.skin3, shirt: C.parrot, hair: "short", legs: C.shyam })}
${child(def, 148, 128, { r: 20, skin: C.skin1, shirt: C.lotus, hair: "pony", legs: C.peacock })}`);

lesson("keep-learning", "An open book with stars rising — keep learning", C.mango, (def) => `
${shadow(120, 176, 70)}${book(def, 120, 128, 130, C.shyam)}
${sparkle(90, 52, 10)}${sparkle(126, 34, 13, C.marigold)}${sparkle(160, 56, 9, C.lotus)}`);

lesson("respect-elders", "A grandmother's glasses and walking stick with a heart — respect elders", C.peacock, (def) => `
${shadow(120, 180, 60)}
<path d="M150 176 L150 70 Q150 48 128 48" fill="none" stroke="${C.bark}" stroke-width="12"/><path d="M150 176 L150 70 Q150 48 128 48" fill="none" stroke-width="3"/>
<circle cx="78" cy="110" r="22" fill="${C.white}" opacity="0.8"/><circle cx="124" cy="110" r="22" fill="${C.white}" opacity="0.8"/>
<path d="M100 108 Q101 100 102 108" fill="none"/>
${heart(100, 158, 14)}`);

lesson("be-honest", "A shining star with a calm smile — be honest", C.shyam, (def) => `
${shadow(120, 182, 50)}
<path d="M120 26 L141 74 L193 78 L153 112 L166 162 L120 134 L74 162 L87 112 L47 78 L99 74Z" fill="${soft(def, C.mango)}"/>
${face(120, 98, 30, { open: true })}${shine(98, 72, 8, 5)}`);

lesson("smile-first", "A smiling sun — smile first", C.marigold, (def) => `
${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => { const r = (a * Math.PI) / 180; return `<path d="M${120 + Math.cos(r) * 62} ${100 + Math.sin(r) * 62} L${120 + Math.cos(r) * 82} ${100 + Math.sin(r) * 82}" stroke="${C.marigold}" stroke-width="7"/>`; }).join("")}
<circle cx="120" cy="100" r="50" fill="${soft(def, C.mango)}"/>${face(120, 100, 46, { open: true })}`);

/* ------------------------------------------------------------- misc scenes */
pieces["flute"] = () =>
  svg(420, 160, "A bansuri flute with a peacock feather and music notes", (def) => `
<rect x="40" y="88" width="320" height="22" rx="11" fill="${soft(def, C.gold)}"/>
${[120, 160, 200, 240, 280].map((x) => `<ellipse cx="${x}" cy="99" rx="5" ry="4" fill="${C.ink}" stroke="none"/>`).join("")}
<path d="M70 88 L70 110 M330 88 L330 110" stroke="${C.kumkum}" stroke-width="6"/>
${feather(def, 352, 100, 90, 40)}
${note(110, 50, C.shyam)}${note(170, 36, C.lotus)}${note(236, 54, C.peacock)}
${sparkle(300, 30, 9)}`);

pieces["drive-van"] = () =>
  svg(380, 240, "A volunteer van decorated with a marigold toran", (def) => {
    let toran = "";
    for (let x = 70; x <= 290; x += 30) toran += marigold(def, x, 70, 9);
    return `
${shadow(190, 212, 150)}
<path d="M40 190 L40 90 Q40 70 60 70 L250 70 Q270 70 284 90 L330 140 L340 190Z" fill="${soft(def, C.sky)}"/>
<path d="M260 88 L300 136 L250 136 L250 88Z" fill="${C.white}" opacity="0.85"/>
<rect x="64" y="94" width="70" height="40" rx="8" fill="${C.white}" opacity="0.85"/><rect x="150" y="94" width="80" height="40" rx="8" fill="${C.white}" opacity="0.85"/>
<path d="M40 160 L340 160" stroke="${C.marigold}" stroke-width="10"/>
${heart(190, 160, 10, C.lotus)}
<path d="M60 70 Q180 92 290 70" fill="none" stroke-width="3"/>${toran}
<circle cx="100" cy="194" r="22" fill="${soft(def, C.ink)}"/><circle cx="100" cy="194" r="9" fill="#ccc"/>
<circle cx="280" cy="194" r="22" fill="${soft(def, C.ink)}"/><circle cx="280" cy="194" r="9" fill="#ccc"/>
${sparkle(350, 60, 10)}${note(30, 50, C.peacock)}`;
  });

pieces["kindness-hero"] = () =>
  svg(320, 320, "A child with arms raised and a heart on their shirt — kindness is a superpower", (def) => `
<circle cx="160" cy="150" r="130" fill="${C.mango}" opacity="0.3" stroke="none"/>
${shadow(160, 302, 60)}
${limb("M128 160 C110 130 100 100 92 70", C.skin3, 13)}
${limb("M192 160 C210 130 220 100 228 70", C.skin3, 13)}
${child(def, 160, 120, { r: 40, skin: C.skin3, shirt: C.kumkum, hair: "short", legs: C.shyam })}
${heart(160, 204, 15, C.mango)}
${sparkle(80, 50, 12)}${sparkle(240, 50, 12, C.sky)}${sparkle(270, 200, 9, C.lotus)}${sparkle(48, 190, 9, C.parrot)}`);

pieces["sudama-bundle"] = () =>
  svg(320, 300, "Sudama's small cloth bundle of poha, with stars rising out of it", (def) => `
${shadow(160, 270, 90)}
<path d="M80 250 C60 200 80 150 130 140 L190 140 C240 150 260 200 240 250 Q160 278 80 250Z" fill="${soft(def, C.cream)}"/>
<path d="M130 140 C120 120 126 104 142 108 L160 124 L178 108 C194 104 200 120 190 140Z" fill="${soft(def, C.cream)}"/>
<path d="M126 142 Q160 152 194 142" fill="none" stroke="${C.kumkum}" stroke-width="7"/>
${dot(118, 210, 5, "#e9c99a")}${dot(150, 228, 5, "#e9c99a")}${dot(196, 214, 5, "#e9c99a")}${dot(176, 238, 5, "#e9c99a")}
${shine(110, 190, 10, 20)}
${sparkle(160, 70, 14)}${sparkle(110, 40, 10, C.marigold)}${sparkle(214, 50, 11, C.lotus)}${sparkle(250, 100, 8, C.sky)}${sparkle(70, 90, 8, C.parrot)}
${heart(160, 22, 9)}`);

pieces["feather-mark"] = () =>
  svg(120, 120, "Saru feather mark", (def) => `${feather(def, 60, 112, 104, 20)}`);

pieces["gauri-nandu"] = () =>
  svg(320, 220, "Gauri the cow and Nandu the calf, resting", (def) => `
${shadow(160, 200, 130)}
<ellipse cx="120" cy="150" rx="80" ry="44" fill="${soft(def, C.white)}"/>
<circle cx="96" cy="140" r="14" fill="${C.bark}" stroke="none" opacity="0.7"/><circle cx="150" cy="160" r="10" fill="${C.bark}" stroke="none" opacity="0.7"/>
<ellipse cx="200" cy="112" rx="34" ry="30" fill="${soft(def, C.white)}"/>
<path d="M184 86 C178 70 186 64 192 72 M214 84 C218 68 228 66 226 78" fill="none" stroke="${C.gold}" stroke-width="6"/>
<ellipse cx="214" cy="126" rx="18" ry="12" fill="${C.lotus}" opacity="0.8"/>
<path d="M186 108 q5 -5 10 0" fill="none" stroke-width="3"/>
<path d="M200 140 L196 156" stroke="${C.gold}" stroke-width="3"/><circle cx="196" cy="160" r="6" fill="${C.mango}"/>
<ellipse cx="262" cy="174" rx="40" ry="24" fill="${soft(def, "#f3d9b5")}"/>
<circle cx="280" cy="150" r="20" fill="${soft(def, "#f3d9b5")}"/>
<path d="M272 146 q4 -4 8 0" fill="none" stroke-width="3"/>
${heart(240, 100, 10)}${sparkle(60, 80, 9)}`);

/* ----------------------------------------------------------- volunteer roles */
const role = (name, title, bg, draw) => {
  pieces[`role-${name}`] = () =>
    svg(200, 180, title, (def) => `<circle cx="100" cy="92" r="76" fill="${bg}" opacity="0.25" stroke="none"/>${draw(def)}`);
};

role("teach", "A small blackboard with letters — teach", C.parrot, (def) => `
${shadow(100, 166, 60)}
<path d="M70 140 L60 166 M130 140 L140 166" stroke="${C.bark}" stroke-width="6"/>
<rect x="40" y="44" width="120" height="96" rx="10" fill="${C.bark}"/>
<rect x="50" y="54" width="100" height="76" rx="6" fill="${soft(def, C.peacock)}"/>
<text x="100" y="104" text-anchor="middle" font-family="Baloo 2, sans-serif" font-size="30" font-weight="800" fill="#fff" stroke="none">क ख A</text>
${sparkle(166, 36, 9)}`);

role("celebrate", "A party popper with confetti — celebrate", C.lotus, (def) => `
${shadow(100, 166, 50)}
<path d="M60 150 L110 70 L140 110Z" fill="${soft(def, C.marigold)}"/>
<path d="M78 122 L124 90 M70 136 L132 104" stroke="${C.lotus}" stroke-width="5"/>
${[[130, 40, C.sky], [156, 64, C.lotus], [150, 30, C.mango], [118, 30, C.parrot], [168, 96, C.kumkum]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="10" height="16" rx="3" fill="${c}" stroke-width="2.5" transform="rotate(${x % 40} ${x} ${y})"/>`).join("")}
${sparkle(60, 50, 10)}`);

role("click", "A camera — click photos", C.sky, (def) => `
${shadow(100, 160, 64)}
<rect x="40" y="62" width="120" height="84" rx="14" fill="${soft(def, C.shyam)}"/>
<path d="M76 62 L84 46 L116 46 L124 62" fill="${C.shyam}"/>
<circle cx="100" cy="104" r="28" fill="${C.white}"/>
<circle cx="100" cy="104" r="18" fill="${soft(def, C.sky)}"/>${shine(94, 97, 5, 3)}
<rect x="134" y="72" width="14" height="9" rx="3" fill="${C.mango}" stroke-width="2.5"/>
${heart(160, 40, 10)}`);

role("cook", "A cooking pot with steam and a ladle — cook", C.marigold, (def) => `
${shadow(100, 164, 66)}
<path d="M44 92 L156 92 L148 150 Q100 162 52 150Z" fill="${soft(def, C.kumkum)}"/>
<rect x="36" y="82" width="128" height="16" rx="8" fill="${soft(def, shade(C.kumkum, -0.15))}"/>
<path d="M120 84 L150 30" stroke="${C.bark}" stroke-width="7"/>
<path d="M76 70 C70 56 82 48 76 34 M100 70 C94 56 106 48 100 34" fill="none" stroke-width="3" opacity="0.5"/>
${sparkle(40, 50, 9)}`);

role("drive", "A steering wheel — drive the van", C.shyam, (def) => `
${shadow(100, 166, 56)}
<circle cx="100" cy="94" r="56" fill="none" stroke="${C.ink}" stroke-width="20"/>
<circle cx="100" cy="94" r="56" fill="none" stroke="${C.mango}" stroke-width="12"/>
<circle cx="100" cy="94" r="16" fill="${soft(def, C.shyam)}"/>
<path d="M50 94 L84 94 M116 94 L150 94 M100 110 L100 148" stroke="${C.shyam}" stroke-width="10"/>
${heart(100, 94, 7, C.lotus)}`);

role("design", "A paintbrush and a colour palette — design", C.mango, (def) => `
${shadow(100, 166, 64)}
<path d="M40 110 C30 60 90 40 130 54 C170 68 170 120 140 128 C120 134 128 112 110 112 C90 112 96 150 70 146 C54 144 44 130 40 110Z" fill="${soft(def, C.cream)}"/>
${dot(70, 80, 10, C.lotus)}${dot(100, 66, 10, C.sky)}${dot(132, 82, 10, C.parrot)}${dot(70, 114, 10, C.marigold)}
<path d="M120 150 L168 40" stroke="${C.bark}" stroke-width="8"/>
<path d="M164 32 L176 38 L170 50 L160 46Z" fill="${C.shyam}"/>`);

/* -------------------------------------------------------------- states */
pieces["kanha-lost"] = () =>
  svg(420, 340, "Little Kanha peeking out from behind bushes in a forest", (def) => `
${shadow(210, 318, 170)}
<path d="M40 120 C40 60 120 40 140 90 C160 40 230 60 220 120Z" fill="${soft(def, C.leaf)}"/>
<path d="M100 300 L104 140 L128 140 L132 300Z" fill="${soft(def, C.bark)}"/>
<path d="M260 110 C250 50 340 40 360 90 C390 60 420 120 380 150 C390 180 300 180 290 150 C250 160 240 130 260 110Z" fill="${soft(def, C.parrot)}"/>
<path d="M318 300 L320 160 L340 160 L344 300Z" fill="${soft(def, C.bark)}"/>
${kanha(def, 222, 196, 40)}
<path d="M96 340 C80 250 160 214 196 244 C220 210 290 220 292 252 C336 232 370 290 344 340Z" fill="${soft(def, C.leaf)}"/>${shine(170, 262, 14, 7)}
<text x="160" y="140" font-family="Baloo 2, sans-serif" font-size="64" font-weight="800" fill="${C.marigold}" stroke-width="2.5">?</text>
${note(60, 200, C.shyam)}${sparkle(380, 230, 9)}${sparkle(170, 60, 8, C.lotus)}`);

pieces["letter-pen"] = () =>
  svg(320, 240, "An envelope with a heart and a pen — write to us", (def) => `
${shadow(160, 218, 120)}
<rect x="50" y="70" width="200" height="130" rx="12" fill="${soft(def, C.white)}"/>
<path d="M50 80 L150 150 L250 80" fill="none"/>
${heart(150, 120, 16)}
<path d="M220 200 L290 60" stroke="${C.marigold}" stroke-width="12"/><path d="M220 200 L290 60" stroke-width="3" fill="none"/>
<path d="M216 210 L222 194 L232 199Z" fill="${C.ink}"/>
${sparkle(80, 40, 10)}${sparkle(270, 30, 8, C.sky)}`);

pieces["thank-mor"] = () =>
  svg(300, 260, "A happy peacock dancing with confetti — thank you", (def) => {
    let fan = "";
    for (let i = -3; i <= 3; i++) fan += feather(def, 150, 190, 100, i * 22);
    return `${fan}
${shadow(150, 244, 50)}
<path d="M136 236 L140 216 M164 236 L160 216" stroke-width="5"/>
<ellipse cx="150" cy="196" rx="24" ry="30" fill="${soft(def, C.shyam)}"/>
<path d="M144 174 C138 146 146 128 158 126 C168 130 166 146 158 176Z" fill="${soft(def, C.shyam)}"/>
<circle cx="159" cy="136" r="3" fill="${C.ink}" stroke="none"/>
<path d="M166 139 L176 142 L166 145Z" fill="${C.mango}" stroke-width="2.5"/>
${[[40, 40, C.lotus], [260, 50, C.sky], [30, 160, C.mango], [270, 170, C.parrot], [80, 90, C.kumkum], [230, 110, C.marigold]].map(([x, y, c]) => `<rect x="${x}" y="${y}" width="10" height="16" rx="3" fill="${c}" stroke-width="2.5" transform="rotate(${x % 50} ${x} ${y})"/>`).join("")}`;
  });

export default pieces;
