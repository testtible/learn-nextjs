import { Book } from "@/types/book";

const basicUrl = "http://localhost:12345";
export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${basicUrl}/book`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getRandomBooks = async (): Promise<Book[]> => {
  try {
    const response = await fetch(`${basicUrl}/book/random`);
    if (!response.ok) {
      throw new Error("Failed to fetch random books");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const searchBook = async (query: string): Promise<Book[]> => {
  try {
    const response = await fetch(`${basicUrl}/book/search?q=${query}`);
    if (!response.ok) {
      throw new Error("Failed to search books");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const getBookForId = async (id: string): Promise<Book | null> => {
  try {
    const response = await fetch(`${basicUrl}/book/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch book");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    return null;
  }
};
