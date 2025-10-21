import { useRouter } from "next/router";
import SearchableLayout from "../layout/SearchableLayout";

export default function Page() {
  const router = useRouter();

  return <h1>{`검색 ${router.query.q}`}</h1>;
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
