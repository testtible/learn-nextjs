import SearchableLayout from "../layout/SearchableLayout";
import BookItem from "../components/BookItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { searchBook } from "@/lib/books-api";
import { Book } from "@/types/book";

// getStaticPaths

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const books = await searchBook(context.query.q as string);
  return {
    props: {
      books,
    },
  };
};
export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book: Book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
