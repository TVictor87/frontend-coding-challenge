export interface BookStoreData extends BookstoreAttributes {
  books: Book[];

  country: Country;
}

export interface BookStoreResponse extends BookstoreAttributes {
  countryId: number;
  bookIds: number[];
}

export interface Book {
  id: number;
  name: string;
  author: Author;
  copiesSold: number;
}

export interface BookstoreAttributes {
  id: number;
  storeImage: string;
  name: string;
  establishmentDate: Date;
  website: string;
  rating: number;
}

export interface Author {
  id: number;
  fullName: string;
}

export interface Country {
  id: number;
  name?: string;
  code: string;
}
