import styles from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { getBookForId } from "@/lib/books-api";
import { useRouter } from "next/router";

// 경로 지정
export const getStaticPaths = async () => {
  // id는 문자열로 지정하여야 next에서 정상적으로 경로를 읽어옴
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],

    fallback: true,
    // false: 404 Not Found
    // blocking : SSR 방식
    // true : SSR 방식 + 데이터 없는 폴백 상태의 페이지 반환 및 데이터가 준비된 후 따로 받아옴
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const book = await getBookForId(context.params!.id as string);

  if (!book) {
    // api 호출 실패 시 404 페이지 반환 코드
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
    },
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (!book) return <div>다시 시도해주세요.</div>;

  if (router.isFallback) return <div>Loading...</div>;

  const { coverImgUrl, title, subTitle, description, author, publisher } = book;
  return (
    <div className={styles.container}>
      <div
        className={styles.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
