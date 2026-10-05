/*
 * Home page content.
 * Anything marked `placeholder: true` is sample content: replace it with real
 * figures and stories before launch. The page shows a small "sample" tag on
 * those items so placeholders can never be mistaken for real claims.
 */

import { programs, lessons } from "./site.js";
import { drives as allDrives } from "./site.js";

export { programs, lessons };

// The home page shows only the next three drives.
const today = new Date().toISOString().slice(0, 10);
export const drives = {
  placeholder: allDrives.placeholder,
  items: allDrives.items.filter((d) => d.date >= today).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3),
};

export const impact = {
  placeholder: true,
  items: [
    { value: 1200, suffix: "+", label: "Smiles shared at celebrations", art: "icon-smile" },
    { value: 85, suffix: "", label: "Children learning with us every week", art: "icon-book" },
    { value: 3400, suffix: "", label: "Warm meals served together", art: "icon-plate" },
    { value: 60, suffix: "+", label: "Volunteers who gave their Sundays", art: "icon-heart" },
  ],
};




export const moments = [
  { art: "hero-sharing", caption: "Makhan for everyone" },
  { art: "program-khushi", caption: "Balloons at a birthday" },
  { art: "lesson-plant-tree", caption: "Our first saplings" },
  { art: "program-anna", caption: "Sunday thali" },
  { art: "drive-van", caption: "The van, ready to roll" },
  { art: "lesson-keep-learning", caption: "Story hour" },
];
