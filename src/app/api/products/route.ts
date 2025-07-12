import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.yml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const products = yaml.load(fileContents);
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error reading or parsing products.yml:', error);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}