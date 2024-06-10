import type {
  Book,
  BookStoreData,
  BookStoreResponse,
  Author,
  Country,
} from "./types";

import {
  STORES_API_URL,
  BOOKS_API_URL,
  COUNTRIES_API_URL,
  AUTHORS_API_URL,
} from "../config";

export const apiGetBookStores = async (): Promise<BookStoreData[]> => {
  // Fetch all data from the APIs
  const [storesResponse, booksResponse, countriesResponse, authorsResponse] =
    await Promise.all([
      fetch(STORES_API_URL),
      fetch(BOOKS_API_URL),
      fetch(COUNTRIES_API_URL),
      fetch(AUTHORS_API_URL),
    ]);

  const stores = await storesResponse.json();
  const books = await booksResponse.json();
  const countries = await countriesResponse.json();
  const authors = await authorsResponse.json();

  // Map the data to the structure we need
  const bookStores: BookStoreData[] = stores.map((store: BookStoreResponse) => {
    const storeBooks: Book[] = store.bookIds.map((bookId: number) => {
      const bookDetail = books.find((book: Book) => book.id === bookId);
      const authorDetail: Author = authors.find(
        (author: Author) => author.id === bookDetail.authorId
      );

      return {
        id: bookDetail.id,
        name: bookDetail.name,
        author: authorDetail,
        copiesSold: bookDetail.copiesSold,
      };
    });

    const countryDetail: Country = countries.find(
      (country: any) => country.id === store.countryId
    );

    return {
      id: store.id,
      storeImage: store.storeImage,
      name: store.name,
      establishmentDate: new Date(store.establishmentDate),
      website: store.website,
      rating: store.rating,
      books: storeBooks,
      country: countryDetail,
    };
  });

  return bookStores;
};
