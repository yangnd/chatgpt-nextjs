import deepLTranslate from '@/api/chatgptApi/deeplApi';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  answer?: string;
  result?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;

  const result = await deepLTranslate(prompt);

  res.status(200).json({ result });
}
