import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./SearchableLayout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");

  const router = useRouter();
  const q = router.query.q;

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    // Next.js에서 router.query는 비동기적으로 동작하므로 첫 마운트 시에는 router.query.q가 undefined
    setSearch((q as string) || "");
  }, [q]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          placeholder="검색어를 입력해주세요."
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
};

export default SearchableLayout;
