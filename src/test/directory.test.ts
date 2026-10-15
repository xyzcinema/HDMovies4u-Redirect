import { describe, expect, it } from "vitest";
import { brands, getBrand } from "@/data/brands";

describe("Retained directory", () => {
  it("keeps only the movie directory", () => {
    expect(brands.map(brand => brand.slug)).toEqual(["hdmovies4u"]);
    expect(getBrand("hubstream")).toBeUndefined();
  });
  it("uses the requested new name", () => {
    expect(brands[0]?.name).toBe("HDmovies4u");
    expect(brands[0]?.path).toBe("/hdmovies4u");
  });
});