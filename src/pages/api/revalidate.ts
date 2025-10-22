import { NextApiRequest, NextApiResponse } from "next";

// ISR의 사용자 액션에 따른 데이터 갱신 요청을 즉각적으로 처리하고 싶은 경우
// On-Demand ISR이라고 함
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error revalidating");
  }
};

export default handler;
