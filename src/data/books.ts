export type Book = {
  id: string;
  title: string;
  subject: Subject;
  cover: string;
  pdf?: string;
};

export const SUBJECTS = [
  "English",
  "Hindi",
  "Gujarati",
  "Mathematics",
  "GK",
  "PreVocational",
  "Art and Craft",
] as const;

export type Subject = (typeof SUBJECTS)[number];

export const books: Book[] = [
  // English
  { id: "english-1", title: "English – Level 1", subject: "English", cover: "/books/covers/english-1.png", pdf: "/books/pdfs/english-1.pdf" },
  { id: "english-2", title: "English – Level 2", subject: "English", cover: "/books/covers/english-2.png", pdf: "/books/pdfs/english-2.pdf" },
  { id: "english-3", title: "English – Level 3", subject: "English", cover: "/books/covers/english-3.png", pdf: "/books/pdfs/english-3.pdf" },
  { id: "english-4", title: "English – Level 4", subject: "English", cover: "/books/covers/english-4.png", pdf: "/books/pdfs/english-4.pdf" },
  { id: "english-5", title: "English – Level 5", subject: "English", cover: "/books/covers/english-5.png", pdf: "/books/pdfs/english-5.pdf" },
  // Hindi
  { id: "hindi-1", title: "Hindi – Level 1", subject: "Hindi", cover: "/books/covers/hindi-1.png", pdf: "/books/pdfs/hindi-1.pdf" },
  { id: "hindi-2", title: "Hindi – Level 2", subject: "Hindi", cover: "/books/covers/hindi-2.png", pdf: "/books/pdfs/hindi-2.pdf" },
  { id: "hindi-3", title: "Hindi – Level 3", subject: "Hindi", cover: "/books/covers/hindi-3.png", pdf: "/books/pdfs/hindi-3.pdf" },
  // Gujarati
  { id: "gujarati-1-p1", title: "Gujarati – Level 1 (Part 1)", subject: "Gujarati", cover: "/books/covers/gujarati-1-p1.png", pdf: "/books/pdfs/gujarati-1-p1.pdf" },
  { id: "gujarati-1-p2", title: "Gujarati – Level 1 (Part 2)", subject: "Gujarati", cover: "/books/covers/gujarati-1-p2.png", pdf: "/books/pdfs/gujarati-1-p2.pdf" },
  { id: "gujarati-2-p1", title: "Gujarati – Level 2 (Part 1)", subject: "Gujarati", cover: "/books/covers/gujarati-2-p1.png", pdf: "/books/pdfs/gujarati-2-p1.pdf" },
  { id: "gujarati-2-p2", title: "Gujarati – Level 2 (Part 2)", subject: "Gujarati", cover: "/books/covers/gujarati-2-p2.png", pdf: "/books/pdfs/gujarati-2-p2.pdf" },
  { id: "gujarati-3", title: "Gujarati – Level 3", subject: "Gujarati", cover: "/books/covers/gujarati-3.png", pdf: "/books/pdfs/gujarati-3.pdf" },
  { id: "gujarati-4", title: "Gujarati – Level 4", subject: "Gujarati", cover: "/books/covers/gujarati-4.png", pdf: "/books/pdfs/gujarati-4.pdf" },
  // Maths
  { id: "maths-1", title: "Mathematics – Level 1", subject: "Mathematics", cover: "/books/covers/maths-1.png", pdf: "/books/pdfs/maths-1.pdf" },
  { id: "maths-2", title: "Mathematics – Level 2", subject: "Mathematics", cover: "/books/covers/maths-2.png", pdf: "/books/pdfs/maths-2.pdf" },
  { id: "maths-3", title: "Mathematics – Level 3", subject: "Mathematics", cover: "/books/covers/maths-3.png", pdf: "/books/pdfs/maths-3.pdf" },
  { id: "maths-4", title: "Mathematics – Level 4", subject: "Mathematics", cover: "/books/covers/maths-4.png", pdf: "/books/pdfs/maths-4.pdf" },
  { id: "maths-5", title: "Mathematics – Level 5", subject: "Mathematics", cover: "/books/covers/maths-5.png" },
  // GK
  { id: "gk-1", title: "General Knowledge – Level 1", subject: "GK", cover: "/books/covers/gk-1.png", pdf: "/books/pdfs/gk-1.pdf" },
  { id: "gk-2", title: "General Knowledge – Level 2", subject: "GK", cover: "/books/covers/gk-2.png", pdf: "/books/pdfs/gk-2.pdf" },
  { id: "gk-3", title: "General Knowledge – Level 3", subject: "GK", cover: "/books/covers/gk-3.png", pdf: "/books/pdfs/gk-3.pdf" },
  // PreVoc
  { id: "prevoc-1", title: "Pre-Vocational – Level 1", subject: "PreVocational", cover: "/books/covers/prevoc-1.png", pdf: "/books/pdfs/prevoc-1.pdf" },
  // Art & Craft
  { id: "art-craft-1", title: "Art & Craft – Level 1", subject: "Art and Craft", cover: "/books/covers/art-craft/Art_and_Craft_level1.png", pdf: "/books/pdfs/art-craft-1.pdf" },
  { id: "art-craft-2", title: "Art & Craft – Level 2", subject: "Art and Craft", cover: "/books/covers/art-craft/Art_and_Craft_level2.png", pdf: "/books/pdfs/art-craft-2.pdf" },
  { id: "art-craft-3", title: "Art & Craft – Level 3", subject: "Art and Craft", cover: "/books/covers/art-craft/Art_and_Craft_level3.png", pdf: "/books/pdfs/art-craft-3.pdf" },
];

export const SOCIAL = {
  youtube: "https://youtube.com/@supermom8507?si=B25falsP30uokQbF",
  instagram: "https://www.instagram.com/mantrafoundationrajkot?igsh=MTV4azgzdmtoYmk0cQ==",
};

export const CONTACT = {
  address: "D 136, Raviratna Park Main Rd, Golden Park, Rajkot, Gujarat 360005, India",
  phones: ["+91 97123 99777", "+91 99259 49494"],
  email: "mantrafoundationrajkot@gmail.com",
  trustReg: "E / 10454 / Rajkot",
};
