/*
 * Site-wide content: one source for every page.
 * `placeholder: true` marks sample content to replace before launch; pages
 * show a small "sample" tag on it so it can never pass as a real claim.
 */

export const contact = {
  email: "fluteofthesoul@gmail.com",
  phone: "+91 00000 00000", // PLACEHOLDER
  whatsapp: "910000000000", // PLACEHOLDER — digits only, used in wa.me links
  city: "Ahmedabad, Gujarat",
  address: "Address to be added", // PLACEHOLDER
  registration: {
    placeholder: true,
    trust: "Reg. No. to be added",
    pan: "PAN to be added",
    a12: "12A — number to be added",
    csr: "CSR-1 — number to be added",
  },
};

export const programs = [
  {
    slug: "khushi",
    name: "Khushi",
    meaning: "Smiles",
    color: "var(--lotus)",
    wash: "var(--wash-lotus)",
    art: "program-khushi",
    alt: "A peacock dancing among balloons",
    text: "Birthdays, festivals and plain silly afternoons. Every child deserves a day that is only about them.",
    what: [
      "A birthday party every month for every child born that month: cake, candles, their name on the banner.",
      "Festivals together: Janmashtami, Navratri garba, Diwali diyas, Uttarayan kites, Holi colours.",
      "Picnics, games days and outings to the zoo, the lake and the science city.",
    ],
    often: "Twice a month, plus every festival",
    needs: ["Cake and sweets sponsors", "Party volunteers", "Games and craft supplies", "Photographers"],
    story: "When Riya (name changed) blew out her candles, she asked if she could keep the banner. It still hangs above her bed.",
  },
  {
    slug: "vidya",
    name: "Vidya",
    meaning: "Learning",
    color: "var(--parrot)",
    wash: "var(--wash-parrot)",
    art: "program-vidya",
    alt: "Mitthu the parrot reading on a stack of books",
    text: "Weekly tutoring, story hours, books and first steps on a computer, in Gujarati, Hindi and English.",
    what: [
      "Small-group tutoring in maths, languages and science, matched to each child's class.",
      "A lending library and a Sunday story hour where children read aloud to each other.",
      "Computer basics and spoken English, so school never feels out of reach.",
    ],
    often: "Every week",
    needs: ["Tutors (2 hours a week)", "Books in Gujarati, Hindi and English", "Used laptops", "Stationery kits"],
    story: "Aarav (name changed) could not read a full sentence in June. By Diwali he was reading the story-hour book to the little ones.",
  },
  {
    slug: "saath",
    name: "Saath",
    meaning: "Belonging",
    color: "var(--sky)",
    wash: "var(--wash-sky)",
    art: "program-saath",
    alt: "Three children holding hands",
    text: "Mentors who keep showing up. Life skills, a listening ear, and someone who remembers your name.",
    what: [
      "One mentor for a small group of children, for at least a year, so trust can grow.",
      "Life-skills circles: money, cooking, first aid, saying no, asking for help.",
      "Career mornings for older children with people from many kinds of work.",
    ],
    often: "Every two weeks",
    needs: ["Long-term mentors", "Guest speakers", "Counsellors (pro bono)"],
    story: "Our oldest mentee called his mentor first when he got his college admission. Before his friends. Before anyone.",
  },
  {
    slug: "anna",
    name: "Anna",
    meaning: "Meals",
    color: "var(--marigold)",
    wash: "var(--wash-mango)",
    art: "program-anna",
    alt: "A shared thali with roti, dal, rice and sweets",
    text: "We sit on the same mat and eat from the same pot. A meal shared is a family, for an hour.",
    what: [
      "A hot, home-style meal at every drive, cooked with the children when they want to help.",
      "Festival feasts with the sweets each festival is known for.",
      "Nutrition kits for growing children: fruit, milk, dry fruits.",
    ],
    often: "At every drive",
    needs: ["Meal sponsors", "Cooks and helpers", "Groceries"],
    story: "The children named the Sunday dal after the volunteer who cooks it. It is now officially Meena-ben's dal.",
  },
];

export const lessons = [
  { slug: "thank-you", title: "Say thank you", line: "Gratitude makes small things big.", color: "var(--lotus)", story: "We end every drive in a circle where each child thanks one person, by name, for one small thing.", activity: "Write a thank-you card to someone who never gets one: the bus driver, the guard, the cook." },
  { slug: "share-roti", title: "Share your roti", line: "Half a roti, twice the joy.", color: "var(--marigold)", story: "Sudama had only a handful of poha. Krishna treasured it more than a palace. Sharing is about the heart, not the size.", activity: "At lunch, offer one bite of your favourite thing to the person next to you." },
  { slug: "plant-tree", title: "Plant a tree", line: "Give shade you may never sit in.", color: "var(--parrot)", story: "Each child plants a sapling and names it. The trees are taller than some of the children now.", activity: "Plant a seed in a cup. Water it every day for two weeks and draw how it grows." },
  { slug: "help-friend", title: "Help a friend", line: "One umbrella fits two.", color: "var(--sky)", story: "When the monsoon came early, the children walked each other home under the few umbrellas they had.", activity: "Find one person today who is carrying too much, and carry half." },
  { slug: "keep-learning", title: "Keep learning", line: "Every page is a new sky.", color: "var(--mango)", story: "Our library started with twelve books. The children decided every book must be read by three people before it goes back on the shelf.", activity: "Learn one new word today and use it three times before bed." },
  { slug: "respect-elders", title: "Respect elders", line: "Their stories are our roots.", color: "var(--peacock)", story: "Once a month, grandparents from a nearby home visit and tell the stories they grew up with.", activity: "Ask an elder about the best day of their childhood. Listen to the whole story." },
  { slug: "be-honest", title: "Be honest", line: "Truth shines on its own.", color: "var(--shyam)", story: "We keep an 'honesty box' of found things. Nothing in it has ever gone missing.", activity: "If you make a mistake today, say it out loud before anyone finds it." },
  { slug: "smile-first", title: "Smile first", line: "Someone is waiting for it.", color: "var(--marigold)", story: "The children's rule for new volunteers: you have to smile first. They always do.", activity: "Smile at five people today before they smile at you. Count how many smile back." },
];

export const roles = [
  { slug: "teach", title: "Teach", text: "Tutor a small group or run a story hour.", time: "2 hrs / week" },
  { slug: "celebrate", title: "Celebrate", text: "Run games, birthdays and festival days.", time: "Per drive" },
  { slug: "click", title: "Click", text: "Take consent-safe photos and short videos.", time: "Per drive" },
  { slug: "cook", title: "Cook", text: "Help cook and serve the drive meal.", time: "Per drive" },
  { slug: "drive", title: "Drive", text: "Drive the van or bring supplies.", time: "Per drive" },
  { slug: "design", title: "Design", text: "Make posters, cards and social posts.", time: "Remote" },
];

export const drives = {
  placeholder: true,
  items: [
    { slug: "navratri-garba-2026", date: "2026-10-18", time: "4:00 – 7:30 pm", title: "Navratri garba with the children", place: "Maninagar, Ahmedabad", program: "khushi", roles: ["Celebrate", "Click"], spots: 12, color: "var(--lotus)" },
    { slug: "story-hour-oct", date: "2026-10-25", time: "10:00 am – 12:30 pm", title: "Sunday story hour and library", place: "Vastrapur, Ahmedabad", program: "vidya", roles: ["Teach"], spots: 8, color: "var(--parrot)" },
    { slug: "diwali-diyas-2026", date: "2026-11-08", time: "3:00 – 8:00 pm", title: "Diwali diya painting and dinner", place: "Naranpura, Ahmedabad", program: "khushi", roles: ["Cook", "Design", "Celebrate"], spots: 20, color: "var(--marigold)" },
    { slug: "career-morning-nov", date: "2026-11-22", time: "10:00 am – 1:00 pm", title: "Career morning for older children", place: "Navrangpura, Ahmedabad", program: "saath", roles: ["Teach"], spots: 6, color: "var(--sky)" },
    { slug: "winter-feast-dec", date: "2026-12-13", time: "12:00 – 3:00 pm", title: "Winter feast and blanket drive", place: "Maninagar, Ahmedabad", program: "anna", roles: ["Cook", "Drive"], spots: 15, color: "var(--marigold)" },
    { slug: "janmashtami-2026", date: "2026-09-04", time: "6:00 – 10:00 pm", title: "Janmashtami: makhan, matki and midnight", place: "Maninagar, Ahmedabad", program: "khushi", roles: ["Celebrate", "Cook"], spots: 0, color: "var(--shyam)" },
    { slug: "plantation-aug", date: "2026-08-15", time: "8:00 – 11:00 am", title: "Independence Day tree plantation", place: "Gota, Ahmedabad", program: "saath", roles: ["Drive"], spots: 0, color: "var(--parrot)" },
  ],
};


export const team = {
  placeholder: true,
  items: [
    { slug: "saru-team", name: "Saru team", role: "Trustees and volunteers", bio: "The people who show up every Sunday.", color: "var(--marigold)" },
    { slug: "founder", name: "Founder", role: "Founder & Managing Trustee", bio: "Started Saru with a single Sunday and a box of sweets.", color: "var(--shyam)" },
    { slug: "trustee-2", name: "Trustee", role: "Trustee · Programs", bio: "Runs Vidya and the library.", color: "var(--parrot)" },
    { slug: "trustee-3", name: "Trustee", role: "Trustee · Finance", bio: "Keeps every rupee accounted for.", color: "var(--sky)" },
  ],
};

export const timeline = {
  placeholder: true,
  items: [
    { year: "2023", title: "The first Sunday", text: "A handful of friends, a box of sweets, and one children's home in Ahmedabad.", art: "sudama-bundle" },
    { year: "2024", title: "Vidya begins", text: "Weekly tutoring starts with twelve children and a library of twelve books.", art: "icon-book" },
    { year: "2025", title: "Saru is registered", text: "The trust is formally registered so every gift can be accounted for.", art: "saru-diya" },
    { year: "2026", title: "Four programs", text: "Khushi, Vidya, Saath and Anna, with sixty volunteers.", art: "program-saath" },
  ],
};

export const reports = {
  placeholder: true,
  spend: [
    { label: "Vidya · learning", pct: 38, color: "var(--parrot)" },
    { label: "Anna · meals", pct: 27, color: "var(--marigold)" },
    { label: "Khushi · celebrations", pct: 20, color: "var(--lotus)" },
    { label: "Saath · mentoring", pct: 9, color: "var(--sky)" },
    { label: "Admin and compliance", pct: 6, color: "var(--shyam)" },
  ],
  files: [
    { year: "2025–26", title: "Annual report", href: "#" },
    { year: "2025–26", title: "Audited accounts", href: "#" },
    { year: "2024–25", title: "Annual report", href: "#" },
  ],
};


export const fmtDate = (iso, opts = { day: "numeric", month: "long", year: "numeric" }) =>
  new Date(iso + (iso.length === 10 ? "T00:00:00" : "")).toLocaleDateString("en-IN", opts);
