import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import BestSellingTable from "../../src/components/BestSellingTable";
import { Book } from "../../src/api/types";
import { BOOKS_PER_STORE } from "../../src/config";
import "@testing-library/jest-dom/vitest";

const mockBooks: Book[] = [
  {
    id: 1,
    name: "Book A",
    copiesSold: 120,
    author: { id: 1, fullName: "Author 1" },
  },
  {
    id: 2,
    name: "Book B",
    copiesSold: 80,
    author: { id: 2, fullName: "Author 2" },
  },
  {
    id: 3,
    name: "Book C",
    copiesSold: 150,
    author: { id: 3, fullName: "Author 3" },
  },
  {
    id: 4,
    name: "Book D",
    copiesSold: 200,
    author: { id: 4, fullName: "Author 4" },
  },
  {
    id: 5,
    name: "Book E",
    copiesSold: 50,
    author: { id: 5, fullName: "Author 5" },
  },
];

describe("BestSellingTable", () => {
  it("should render a message when there are no books", () => {
    render(<BestSellingTable books={[]} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
    cleanup();
  });

  it("should render the correct number of books based on BOOKS_PER_STORE", () => {
    render(<BestSellingTable books={mockBooks} />);
    const rows = screen.getAllByRole("row");
    // +1 because of the header row
    expect(rows).toHaveLength(BOOKS_PER_STORE + 1);
    cleanup();
  });

  it("should render the books in descending order of copiesSold", () => {
    render(<BestSellingTable books={mockBooks} />);
    const rows = screen.getAllByRole("row").slice(1); // skip header row
    const renderedBooks = rows.map((row) =>
      (row as HTMLTableRowElement).cells[0].textContent?.replace("📖 ", "")
    );

    const expectedBooks = [...mockBooks]
      .sort((a, b) => b.copiesSold - a.copiesSold)
      .slice(0, BOOKS_PER_STORE)
      .map((book) => book.name);

    expect(renderedBooks).toEqual(expectedBooks);
    cleanup();
  });

  it("should render the correct book names and authors", () => {
    render(<BestSellingTable books={mockBooks} />);
    const rows = screen.getAllByRole("row").slice(1); // skip header row

    rows.forEach((row, index) => {
      const sortedBooks = [...mockBooks]
        .sort((a, b) => b.copiesSold - a.copiesSold)
        .slice(0, BOOKS_PER_STORE);
      const book = sortedBooks[index];
      const tableRow = row as HTMLTableRowElement;
      expect(tableRow.cells[0].textContent).toBe(`📖 ${book.name}`);
      expect(tableRow.cells[1].textContent).toBe(`👤 ${book.author.fullName}`);
    });
    cleanup();
  });
});
