import type { NextApiRequest, NextApiResponse } from 'next';
import { headers } from 'next/dist/client/components/headers';
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url');

  if (!url || typeof url !== 'string') {
    return new Response("Missing or invalid URL", { status: 400 })
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const screenshot = await page.screenshot({ type: 'png' });
  await browser.close();

  return new Response(screenshot, {
    headers: {
      'Content-Type': 'image/png',
      'Content-Length': screenshot.length.toString(),
      'Cache-Control': 'public, max-age=1296000',
    }
  })
}
