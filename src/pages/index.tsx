import { ReactNode } from "react";
import SearchableLayout from "./layout/SearchableLayout";
import styles from "./index.module.css";
import BookItem from "@/pages/components/BookItem";
import { Book } from "@/types/book";
import { InferGetStaticPropsType } from "next";
import { getAllBooks, getRandomBooks } from "@/lib/books-api";
import Head from "next/head";

// 약속된 이름의 함수(SSR) getServerSideProps
// return 값은 props 객체 안에 담아두어야 함 (프레임워크의 문법)
export const getStaticProps = async () => {
  // 병렬 api 호출 (조금 더 빠르게 api 호출 가능)
  const [books, randomBooks] = await Promise.all([
    getAllBooks(),
    getRandomBooks(),
  ]);

  return {
    props: {
      books,
      randomBooks,
    },
    // 10초마다 데이터를 다시 불러옴(ISR)
  };
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
};
export default function Home({
  books,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // 서버에서 컴포넌트를 먼저 만들기 때문에 곧바로 window 객체같은 것들을 사용할 수 없음

  return (
    <div className={styles.container}>
      <Head>
        <title>한입북스</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입북스" />
        <meta
          property="og:description"
          content="한입 북스에 등록된 도서들을 만나보세요"
        />
      </Head>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book: Book) => (
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
