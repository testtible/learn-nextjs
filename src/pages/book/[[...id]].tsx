import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <div>{`Book ${router.query.id}`}</div>
}