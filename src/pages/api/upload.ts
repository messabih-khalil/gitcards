import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
type Data = {
  timestamp: string;
  signature: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      folder: 'gitcards',
    },
    process.env.SECRET_KEY as string
  );
  const data = {
    timestamp: timestamp.toString(),
    signature: signature,
  };
  res.status(200).json(data);
}
