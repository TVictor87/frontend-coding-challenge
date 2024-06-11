import type { BookStoreResponse, Book, Country, Author } from "../api/types";

export const fakeBookStores: BookStoreResponse[] = [
  {
    storeImage: "logo.svg",
    name: "Book store name",
    bookIds: [1, 2],
    establishmentDate: new Date("2018-11-22T00:00:00Z"),
    website: "http://www.bookstore.com",
    rating: 4,
    countryId: 1,
    id: 0,
  },
  {
    storeImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
    name: "Book store name 2",
    bookIds: [3, 4],
    establishmentDate: new Date("2018-11-22T00:00:00Z"),
    website: "http://www.bookstore2.com",
    rating: 5,
    countryId: 2,
    id: 1,
  },
  {
    storeImage:
      "https://marketplace.canva.com/EAF-jFqBHBA/1/0/900w/canva-blue-book-reading-concept-phone-wallpaper-F51QYzgB6q0.jpg",
    name: "Book store name 3",
    bookIds: [],
    establishmentDate: new Date("2018-11-22T00:00:00Z"),
    website: "http://www.bookstore3.com",
    rating: 0,
    countryId: 3,
    id: 2,
  },
];

export const fakeBooks: Book[] = [
  {
    id: 1,
    name: "JavaScript: The Good Parts",
    copiesSold: 154,
    author: { id: 1, fullName: "Douglas Crockford" },
  },
  {
    id: 2,
    name: "JavaScript: The Definitive Guide",
    copiesSold: 66,
    author: { id: 2, fullName: "David Flanagan" },
  },
  {
    id: 3,
    name: "Learn JavaScript Visually",
    copiesSold: 78,
    author: { id: 3, fullName: "Ivelin Demirov" },
  },
  {
    id: 4,
    name: "Eloquent JavaScript",
    copiesSold: 111,
    author: { id: 4, fullName: "Marijn Haverbeke" },
  },
  {
    id: 5,
    name: "How JavaScript Works",
    copiesSold: 33,
    author: { id: 1, fullName: "Douglas Crockford" },
  },
  {
    id: 6,
    name: "Beautiful Code: Leading Programmers Explain How They Think",
    copiesSold: 66,
    author: { id: 5, fullName: "Greg Wilson" },
  },
  {
    id: 7,
    name: "Canvas Pocket Reference: Scripted Graphics for HTML5",
    copiesSold: 42,
    author: { id: 2, fullName: "David Flanagan" },
  },
  {
    id: 8,
    name: "JavaScript Pocket Reference: Activate Your Web Pages",
    copiesSold: 47,
    author: { id: 2, fullName: "David Flanagan" },
  },
];

export const fakeCountries: Country[] = [
  {
    id: 1,
    code: "AU",
  },
  {
    id: 2,
    code: "HR",
  },
  {
    id: 3,
    code: "CH",
  },
  {
    id: 4,
    code: "IS",
  },
  {
    id: 5,
    code: "SE",
  },
];

export const fakeAuthors: Author[] = [
  {
    id: 1,
    fullName: "Douglas Crockford",
  },
  {
    id: 2,
    fullName: "David Flanagan",
  },
  {
    id: 3,
    fullName: "Ivelin Demirov",
  },
  {
    id: 4,
    fullName: "Marijn Haverbeke",
  },
  {
    id: 5,
    fullName: "Greg Wilson",
  },
];
