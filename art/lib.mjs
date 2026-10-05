/*
 * Saru art kit
 * ------------
 * Every illustration is drawn from these helpers so the whole set shares one
 * hand: a 4px ink outline, round joins, and "soft 3D" fills — a radial
 * gradient lit from the top-left plus a white shine — sitting on a soft
 * ground shadow. Change a colour here and the whole cast follows.
 */

export const C = {
  ink: "#1d1b2f",
  paper: "#fffaf0",
  shyam: "#2b4c9b",
  krishna: "#4f86d9", // Kanha's skin — a lighter shyam so the face reads
  peacock: "#0f7a6e",
  teal: "#1b9c93",
  marigold: "#ff9f1c",
  mango: "#ffd23f",
  lotus: "#ff6f91",
  parrot: "#3bb273",
  leaf: "#2e8b57",
  sky: "#5ec8f2",
  kumkum: "#e63946",
  gold: "#c08a2e",
  clay: "#c8693c",
  bark: "#8a5a3b",
  cream: "#fff4d6",
  skin1: "#e0a77a",
  skin2: "#c98b5e",
  skin3: "#8d5a3b",
  hair: "#2a2140",
  white: "#ffffff",
};

let uid = 0;

/** Lighten (amt > 0) or darken (amt < 0) a hex colour. */
export function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  const mix = (c) =>
    Math.round(amt > 0 ? c + (255 - c) * amt : c * (1 + amt));
  const r = mix(n >> 16), g = mix((n >> 8) & 255), b = mix(n & 255);
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

/** Wraps a drawing as a standalone SVG document. */
export function svg(w, h, title, body) {
  uid = 0;
  const defs = [];
  const content = body((d) => defs.push(d));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${title}">
<title>${title}</title>
<defs>${defs.join("")}</defs>
<g stroke="${C.ink}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
${content}
</g>
</svg>`;
}

/**
 * Soft-3D fill: a radial gradient lit from the top-left.
 * Returns a url() to use as a fill.
 */
export function soft(def, color) {
  const id = `g${++uid}`;
  def(
    `<radialGradient id="${id}" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="${shade(color, 0.35)}"/><stop offset="0.55" stop-color="${color}"/><stop offset="1" stop-color="${shade(color, -0.22)}"/></radialGradient>`
  );
  return `url(#${id})`;
}

/** A white highlight — the "clay" catchlight. */
export const shine = (cx, cy, rx, ry, rot = -25) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${rot} ${cx} ${cy})" fill="#fff" opacity="0.55" stroke="none"/>`;

/** Soft ground shadow. */
export const shadow = (cx, cy, rx, ry = rx * 0.18) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${C.ink}" opacity="0.12" stroke="none"/>`;

/** A limb: an ink stroke with a coloured stroke on top, so it reads as outlined. */
export const limb = (d, color, w = 14) =>
  `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${w + 8}"/><path d="${d}" fill="none" stroke="${color}" stroke-width="${w}"/>`;

/** Four-point sparkle. */
export const sparkle = (x, y, s = 10, color = C.mango) =>
  `<path d="M${x} ${y - s} Q${x + s * 0.18} ${y - s * 0.18} ${x + s} ${y} Q${x + s * 0.18} ${y + s * 0.18} ${x} ${y + s} Q${x - s * 0.18} ${y + s * 0.18} ${x - s} ${y} Q${x - s * 0.18} ${y - s * 0.18} ${x} ${y - s}Z" fill="${color}" stroke-width="2.5"/>`;

/** Heart centred on (x, y). */
export const heart = (x, y, s = 14, color = C.lotus) =>
  `<path d="M${x} ${y + s * 0.9} C${x - s * 1.6} ${y - s * 0.1} ${x - s * 0.9} ${y - s * 1.3} ${x} ${y - s * 0.45} C${x + s * 0.9} ${y - s * 1.3} ${x + s * 1.6} ${y - s * 0.1} ${x} ${y + s * 0.9}Z" fill="${color}" stroke-width="3"/>`;

/** Eighth note. */
export const note = (x, y, color = C.shyam) =>
  `<g fill="${color}" stroke-width="3"><ellipse cx="${x}" cy="${y}" rx="8" ry="6" transform="rotate(-20 ${x} ${y})"/><path d="M${x + 7} ${y - 2} V${y - 30} Q${x + 18} ${y - 24} ${x + 20} ${y - 14}" fill="none"/></g>`;

/** Small dot, no outline. */
export const dot = (x, y, r, color, op = 1) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${op}" stroke="none"/>`;

/** Happy closed eyes, smile and rosy cheeks. */
export function face(cx, cy, r, { open = false } = {}) {
  const ex = r * 0.38, ey = cy - r * 0.05;
  const eyes = open
    ? `<circle cx="${cx - ex}" cy="${ey}" r="${r * 0.09}" fill="${C.ink}" stroke="none"/><circle cx="${cx + ex}" cy="${ey}" r="${r * 0.09}" fill="${C.ink}" stroke="none"/>`
    : `<path d="M${cx - ex - r * 0.14} ${ey} q${r * 0.14} ${-r * 0.14} ${r * 0.28} 0" fill="none" stroke-width="3.5"/><path d="M${cx + ex - r * 0.14} ${ey} q${r * 0.14} ${-r * 0.14} ${r * 0.28} 0" fill="none" stroke-width="3.5"/>`;
  return `${eyes}
<path d="M${cx - r * 0.22} ${cy + r * 0.3} q${r * 0.22} ${r * 0.24} ${r * 0.44} 0" fill="none" stroke-width="3.5"/>
<ellipse cx="${cx - r * 0.58}" cy="${cy + r * 0.22}" rx="${r * 0.14}" ry="${r * 0.09}" fill="${C.lotus}" opacity="0.6" stroke="none"/>
<ellipse cx="${cx + r * 0.58}" cy="${cy + r * 0.22}" rx="${r * 0.14}" ry="${r * 0.09}" fill="${C.lotus}" opacity="0.6" stroke="none"/>`;
}

/** Peacock feather — the trust's signature mark. Base at (x, y), pointing up, rotated by rot. */
export function feather(def, x, y, len = 90, rot = 0) {
  const w = len * 0.32;
  const top = y - len;
  return `<g transform="rotate(${rot} ${x} ${y})">
<path d="M${x} ${y} Q${x - 2} ${y - len * 0.5} ${x} ${top + 6}" fill="none" stroke-width="3"/>
<path d="M${x} ${top} C${x - w} ${top + len * 0.12} ${x - w * 0.9} ${top + len * 0.62} ${x} ${top + len * 0.82} C${x + w * 0.9} ${top + len * 0.62} ${x + w} ${top + len * 0.12} ${x} ${top}Z" fill="${soft(def, C.parrot)}" stroke-width="3"/>
<ellipse cx="${x}" cy="${top + len * 0.32}" rx="${w * 0.58}" ry="${len * 0.2}" fill="${C.mango}" stroke="none"/>
<ellipse cx="${x}" cy="${top + len * 0.32}" rx="${w * 0.42}" ry="${len * 0.15}" fill="${C.teal}" stroke="none"/>
<ellipse cx="${x}" cy="${top + len * 0.33}" rx="${w * 0.24}" ry="${len * 0.09}" fill="${C.shyam}" stroke="none"/>
</g>`;
}

/** A child: head, hair, body and legs. Arms are drawn by the caller. */
export function child(def, cx, cy, { r = 34, skin = C.skin2, shirt = C.lotus, hair = "bob", legs = C.shyam } = {}) {
  const headY = cy, bodyTop = cy + r * 0.85, bodyH = r * 2.2, bodyW = r * 1.7;
  const hairPath = {
    bob: `<path d="M${cx - r * 1.05} ${headY + r * 0.35} C${cx - r * 1.25} ${headY - r * 1.2} ${cx + r * 1.25} ${headY - r * 1.2} ${cx + r * 1.05} ${headY + r * 0.35} C${cx + r * 0.7} ${headY - r * 0.35} ${cx - r * 0.7} ${headY - r * 0.35} ${cx - r * 1.05} ${headY + r * 0.35}Z" fill="${C.hair}"/>`,
    short: `<path d="M${cx - r * 0.98} ${headY - r * 0.05} C${cx - r * 1.05} ${headY - r * 1.15} ${cx + r * 1.05} ${headY - r * 1.15} ${cx + r * 0.98} ${headY - r * 0.05} C${cx + r * 0.5} ${headY - r * 0.6} ${cx - r * 0.3} ${headY - r * 0.45} ${cx - r * 0.98} ${headY - r * 0.05}Z" fill="${C.hair}"/>`,
    pony: `<circle cx="${cx - r * 1.05}" cy="${headY - r * 0.35}" r="${r * 0.32}" fill="${C.hair}"/><circle cx="${cx + r * 1.05}" cy="${headY - r * 0.35}" r="${r * 0.32}" fill="${C.hair}"/><path d="M${cx - r * 0.98} ${headY} C${cx - r * 1.05} ${headY - r * 1.15} ${cx + r * 1.05} ${headY - r * 1.15} ${cx + r * 0.98} ${headY} C${cx + r * 0.4} ${headY - r * 0.55} ${cx - r * 0.4} ${headY - r * 0.55} ${cx - r * 0.98} ${headY}Z" fill="${C.hair}"/>`,
  }[hair];
  return `
${limb(`M${cx - r * 0.35} ${bodyTop + bodyH - 6} L${cx - r * 0.38} ${bodyTop + bodyH + r * 0.7}`, legs, r * 0.32)}
${limb(`M${cx + r * 0.35} ${bodyTop + bodyH - 6} L${cx + r * 0.38} ${bodyTop + bodyH + r * 0.7}`, legs, r * 0.32)}
<path d="M${cx - bodyW / 2} ${bodyTop + bodyH} C${cx - bodyW / 2} ${bodyTop + r * 0.2} ${cx - bodyW * 0.3} ${bodyTop} ${cx} ${bodyTop} C${cx + bodyW * 0.3} ${bodyTop} ${cx + bodyW / 2} ${bodyTop + r * 0.2} ${cx + bodyW / 2} ${bodyTop + bodyH}Z" fill="${soft(def, shirt)}"/>
${shine(cx - bodyW * 0.22, bodyTop + bodyH * 0.35, r * 0.14, r * 0.35, 10)}
<circle cx="${cx}" cy="${headY}" r="${r}" fill="${soft(def, skin)}"/>
${hairPath}
${face(cx, headY + r * 0.1, r * 0.95)}`;
}

/** Little Kanha: blue skin, feather in a top knot, yellow pitambar. */
export function kanha(def, cx, cy, r = 42) {
  const bodyTop = cy + r * 0.85, bodyH = r * 2.1, bodyW = r * 1.75;
  return `
${limb(`M${cx - r * 0.35} ${bodyTop + bodyH - 6} L${cx - r * 0.4} ${bodyTop + bodyH + r * 0.75}`, C.krishna, r * 0.32)}
${limb(`M${cx + r * 0.35} ${bodyTop + bodyH - 6} L${cx + r * 0.4} ${bodyTop + bodyH + r * 0.75}`, C.krishna, r * 0.32)}
<path d="M${cx - bodyW / 2} ${bodyTop + bodyH} C${cx - bodyW / 2} ${bodyTop + r * 0.2} ${cx - bodyW * 0.3} ${bodyTop} ${cx} ${bodyTop} C${cx + bodyW * 0.3} ${bodyTop} ${cx + bodyW / 2} ${bodyTop + r * 0.2} ${cx + bodyW / 2} ${bodyTop + bodyH}Z" fill="${soft(def, C.mango)}"/>
<path d="M${cx - bodyW / 2 + 4} ${bodyTop + r * 0.9} Q${cx} ${bodyTop + r * 1.25} ${cx + bodyW / 2 - 4} ${bodyTop + r * 0.9}" fill="none" stroke="${C.marigold}" stroke-width="9"/>
${shine(cx - bodyW * 0.22, bodyTop + bodyH * 0.45, r * 0.13, r * 0.3, 10)}
${feather(def, cx + r * 0.25, cy - r * 0.95, r * 1.5, 18)}
<circle cx="${cx}" cy="${cy}" r="${r}" fill="${soft(def, C.krishna)}"/>
<path d="M${cx - r * 0.98} ${cy - r * 0.05} C${cx - r * 1.05} ${cy - r * 1.2} ${cx + r * 1.05} ${cy - r * 1.2} ${cx + r * 0.98} ${cy - r * 0.05} C${cx + r * 0.55} ${cy - r * 0.55} ${cx - r * 0.55} ${cy - r * 0.55} ${cx - r * 0.98} ${cy - r * 0.05}Z" fill="${C.hair}"/>
<circle cx="${cx}" cy="${cy - r * 0.98}" r="${r * 0.28}" fill="${C.hair}"/>
<path d="M${cx - r * 0.1} ${cy - r * 0.42} L${cx} ${cy - r * 0.2} L${cx + r * 0.1} ${cy - r * 0.42}" fill="none" stroke="${C.mango}" stroke-width="4"/>
${face(cx, cy + r * 0.12, r * 0.95)}`;
}

/** Clay pot (matki), optionally brimming with makhan. */
export function matki(def, cx, cy, r = 30, { butter = true } = {}) {
  return `
<path d="M${cx - r * 0.45} ${cy - r * 0.85} L${cx - r * 0.55} ${cy - r * 1.1} L${cx + r * 0.55} ${cy - r * 1.1} L${cx + r * 0.45} ${cy - r * 0.85}Z" fill="${shade(C.clay, -0.1)}"/>
<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r * 0.9}" fill="${soft(def, C.clay)}"/>
<path d="M${cx - r * 0.85} ${cy - r * 0.15} Q${cx} ${cy + r * 0.15} ${cx + r * 0.85} ${cy - r * 0.15}" fill="none" stroke="${C.mango}" stroke-width="4"/>
${dot(cx - r * 0.4, cy + r * 0.25, 3, C.cream)}${dot(cx, cy + r * 0.33, 3, C.cream)}${dot(cx + r * 0.4, cy + r * 0.25, 3, C.cream)}
${shine(cx - r * 0.4, cy - r * 0.35, r * 0.15, r * 0.3)}
${butter ? `<path d="M${cx - r * 0.62} ${cy - r * 1.05} C${cx - r * 0.75} ${cy - r * 1.55} ${cx - r * 0.2} ${cy - r * 1.75} ${cx} ${cy - r * 1.5} C${cx + r * 0.25} ${cy - r * 1.85} ${cx + r * 0.85} ${cy - r * 1.5} ${cx + r * 0.62} ${cy - r * 1.05}Z" fill="${C.cream}"/>${shine(cx - r * 0.2, cy - r * 1.42, r * 0.12, r * 0.08, 0)}` : ""}`;
}

/** Diya with a living flame. */
export function diya(def, cx, cy, r = 40) {
  return `
<path d="M${cx} ${cy - r * 1.55} C${cx - r * 0.38} ${cy - r * 1.05} ${cx - r * 0.25} ${cy - r * 0.55} ${cx} ${cy - r * 0.5} C${cx + r * 0.25} ${cy - r * 0.55} ${cx + r * 0.38} ${cy - r * 1.05} ${cx} ${cy - r * 1.55}Z" fill="${soft(def, C.marigold)}" stroke-width="3"><animateTransform attributeName="transform" type="scale" values="1 1;1.05 0.94;0.97 1.04;1 1" dur="1.6s" repeatCount="indefinite" additive="sum"/></path>
<path d="M${cx} ${cy - r * 1.18} C${cx - r * 0.15} ${cy - r * 0.95} ${cx - r * 0.1} ${cy - r * 0.68} ${cx} ${cy - r * 0.66} C${cx + r * 0.1} ${cy - r * 0.68} ${cx + r * 0.15} ${cy - r * 0.95} ${cx} ${cy - r * 1.18}Z" fill="${C.mango}" stroke="none"/>
<path d="M${cx - r} ${cy - r * 0.45} Q${cx} ${cy + r * 0.75} ${cx + r * 1.15} ${cy - r * 0.55} Q${cx + r * 0.4} ${cy - r * 0.25} ${cx - r} ${cy - r * 0.45}Z" fill="${soft(def, C.clay)}"/>
<path d="M${cx - r * 0.55} ${cy - r * 0.05} Q${cx} ${cy + r * 0.2} ${cx + r * 0.6} ${cy - r * 0.08}" fill="none" stroke="${C.mango}" stroke-width="3.5"/>
${shine(cx - r * 0.45, cy - r * 0.2, r * 0.12, r * 0.06, 0)}`;
}

/** Marigold bloom. */
export function marigold(def, cx, cy, r = 12) {
  let petals = "";
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    petals += `<circle cx="${cx + Math.cos(a) * r * 0.62}" cy="${cy + Math.sin(a) * r * 0.62}" r="${r * 0.48}" fill="${C.marigold}" stroke="none"/>`;
  }
  return `<circle cx="${cx}" cy="${cy}" r="${r * 1.05}" fill="${C.marigold}"/>${petals}<circle cx="${cx}" cy="${cy}" r="${r * 0.42}" fill="${soft(def, C.mango)}" stroke-width="2.5"/>`;
}

/** Leaf shape, base at (x, y). */
export const leafShape = (x, y, len, rot, color = C.parrot) =>
  `<path d="M${x} ${y} Q${x + len * 0.45} ${y - len * 0.45} ${x + len} ${y} Q${x + len * 0.45} ${y + len * 0.45} ${x} ${y}Z" transform="rotate(${rot} ${x} ${y})" fill="${color}" stroke-width="3"/>`;

/** An open book. */
export function book(def, cx, cy, w = 120, cover = C.shyam) {
  const h = w * 0.55;
  return `
<path d="M${cx - w / 2 - 6} ${cy + h / 2 + 8} L${cx - w / 2 - 6} ${cy - h / 2 + 4} L${cx} ${cy - h / 2 + 14} L${cx + w / 2 + 6} ${cy - h / 2 + 4} L${cx + w / 2 + 6} ${cy + h / 2 + 8} L${cx} ${cy + h / 2 + 18}Z" fill="${soft(def, cover)}"/>
<path d="M${cx} ${cy - h / 2 + 10} C${cx - w * 0.2} ${cy - h / 2 - 6} ${cx - w * 0.38} ${cy - h / 2 - 4} ${cx - w / 2} ${cy - h / 2} L${cx - w / 2} ${cy + h / 2} C${cx - w * 0.38} ${cy + h / 2 - 4} ${cx - w * 0.2} ${cy + h / 2 - 2} ${cx} ${cy + h / 2 + 10}Z" fill="${C.white}"/>
<path d="M${cx} ${cy - h / 2 + 10} C${cx + w * 0.2} ${cy - h / 2 - 6} ${cx + w * 0.38} ${cy - h / 2 - 4} ${cx + w / 2} ${cy - h / 2} L${cx + w / 2} ${cy + h / 2} C${cx + w * 0.38} ${cy + h / 2 - 4} ${cx + w * 0.2} ${cy + h / 2 - 2} ${cx} ${cy + h / 2 + 10}Z" fill="${C.cream}"/>
<g stroke-width="2.5" opacity="0.45">
<path d="M${cx - w * 0.4} ${cy - h * 0.18} L${cx - w * 0.1} ${cy - h * 0.12}"/><path d="M${cx - w * 0.4} ${cy + h * 0.02} L${cx - w * 0.1} ${cy + h * 0.08}"/><path d="M${cx - w * 0.4} ${cy + h * 0.22} L${cx - w * 0.16} ${cy + h * 0.27}"/>
<path d="M${cx + w * 0.1} ${cy - h * 0.12} L${cx + w * 0.4} ${cy - h * 0.18}"/><path d="M${cx + w * 0.1} ${cy + h * 0.08} L${cx + w * 0.4} ${cy + h * 0.02}"/>
</g>`;
}

/** Cupped hand seen from the side, palm up, fingers toward +x. Mirror with flip. */
export function hand(def, x, y, s = 1, skin = C.skin2, flip = false) {
  const t = `translate(${x} ${y}) scale(${flip ? -s : s} ${s})`;
  return `<g transform="${t}">
<path d="M-70 -6 C-40 -14 -10 -10 10 -4 C30 0 52 -2 64 -10 C74 -16 82 -6 74 4 C60 22 30 34 0 34 C-30 34 -55 26 -70 18Z" fill="${soft(def, skin)}"/>
<path d="M18 2 C34 4 52 0 62 -6" fill="none" stroke-width="3" opacity="0.5"/>
<path d="M-70 -6 L-110 -10 L-110 22 L-70 18" fill="${C.marigold}"/>
</g>`;
}
