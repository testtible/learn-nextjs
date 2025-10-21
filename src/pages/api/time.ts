import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  time: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ time: new Date().toLocaleString() });
}