import { useRouter } from "next/router";
import SearchableLayout from "../layout/SearchableLayout";
import BookItem from "../components/BookItem";
import books from "@/mock/books.json";

export default function Page() {
  const router = useRouter();
  const filteredBooks = books.filter((book) =>
    book.title.includes(router.query.q as string)
  );

  return (
    <div>
      {filteredBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
