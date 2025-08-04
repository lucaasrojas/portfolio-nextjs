import { NextResponse, type NextRequest } from "next/server";
import puppeteer, { type Browser } from 'puppeteer';
import puppeteerCore, { type Browser as BrowserCore } from 'puppeteer-core';
import chromium from '@sparticuz/chromium-min';
export async function GET(request: NextRequest) {
  try {
    // An example for Logic
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get("url");
    if (!url) return NextResponse.json({ error: "Invalid request" }, { status: 400 });

    let browser: Browser | BrowserCore;
    if (process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production') {
        // Configure the version based on your package.json (for your future usage).
        const executablePath = await chromium.executablePath('https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar')
        browser = await puppeteerCore.launch({
            executablePath,
            // You can pass other configs as required
            args: chromium.args,
            // headless: chromium.headless,
            // defaultViewport: chromium.defaultViewport
        })
    } else {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        })
    }
    const page = await browser.newPage();

    await page.goto(url, {
        waitUntil: 'networkidle0'
    });

    const screenshot  = await page.screenshot({
        path: 'screenshot.png',
        fullPage: true
    });

    await browser.close();

    return new NextResponse(screenshot, {
        status: 200,
        headers: {
            'Content-Type': 'image/png',
            'Content-Disposition': `attachment; filename=${url}.png`,
        },
    });
} catch (error) {
    console.error('screenshot generation error:', error);
    return NextResponse.json(
        { message: 'Error generating screenshot' },
        { status: 500 }
    );
}
}