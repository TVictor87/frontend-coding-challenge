import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import Rating from "../../src/components/Rating";
import "@testing-library/jest-dom/vitest";

describe("Show rating", () => {
  it("should fill 5 stars when rating is 5", () => {
    render(<Rating rating={5} />);
    const stars = screen.getAllByText("★");
    expect(stars).toHaveLength(5);
    stars.forEach((star, index) => {
      if (index < 5) {
        expect(star).toHaveClass(/filled/);
        screen.debug(star);
      } else {
        expect(star).not.toHaveClass(/filled/);
      }
    });
    cleanup();
  });

  it("should fill 3 stars when rating is 3, and 2 should be empty", () => {
    render(<Rating rating={3} />);
    const stars = screen.getAllByText("★");
    expect(stars).toHaveLength(5);
    stars.forEach((star, index) => {
      if (index < 3) {
        expect(star).toHaveClass(/filled/);
      } else {
        expect(star).not.toHaveClass(/filled/);
      }
    });
    cleanup();
  });

  it("should fill 0 stars when rating is 0, and 5 should be empty", () => {
    render(<Rating rating={0} />);
    const stars = screen.getAllByText("★");
    expect(stars).toHaveLength(5);
    stars.forEach((star, index) => {
      if (index < 0) {
        expect(star).toHaveClass(/filled/);
      } else {
        expect(star).not.toHaveClass(/filled/);
      }
    });
    cleanup();
  });
});
