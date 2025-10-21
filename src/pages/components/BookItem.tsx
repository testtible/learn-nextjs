import { Book } from "@/types/book";
import Link from "next/link";
import React from "react";
import styles from "./BookItem.module.css";

const BookItem = ({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: Book) => {
  return (
    <Link href={`/book/${id}`} className={styles.container}>
      <div>
        <img src={coverImgUrl} alt={title} />
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <br />
        <div className={styles.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
};

export default BookItem;
