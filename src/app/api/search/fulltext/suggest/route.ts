import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const count = parseInt(searchParams.get('count') || '5', 10);
  const suggestions = Array.from({ length: count }, (_, i) => `${q} suggestion ${i + 1}`);
  return NextResponse.json({ suggestions });
}
