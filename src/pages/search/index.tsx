import SearchableLayout from "../layout/SearchableLayout";
import BookItem from "../components/BookItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { searchBook } from "@/lib/books-api";
import { Book } from "@/types/book";
import Head from "next/head";

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
      <Head>
        <title>한입북스 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      {books.map((book: Book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
