import puppeteer, { ElementHandle } from 'puppeteer';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  imageUrl: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == 'POST') {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(JSON.parse(req.body).url);

    await page.waitForSelector('#code_direct');
    const inputField: ElementHandle<Element> | null = await page.$(
      '#code_direct'
    );
    const value = await page.evaluate(
      (element: string | null | any) => element?.value,
      inputField
    );

    res.status(200).json({ imageUrl: value });

    await browser.close();
  }
};

export default handler;
