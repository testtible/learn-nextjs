import { ReactNode } from "react";
import SearchableLayout from "./layout/SearchableLayout";

export default function Home() {
  return <h1>인덱스</h1>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
