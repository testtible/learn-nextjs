import { ReactNode } from "react";
import SearchableLayout from "./layout/SearchableLayout";
import styles from "./index.module.css";
import books from "../mock/books.json";
import BookItem from "@/pages/components/BookItem";
import { Book } from "@/types/book";

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book: Book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book: Book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
