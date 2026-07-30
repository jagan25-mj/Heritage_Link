import { NextResponse } from 'next/server';

export async function GET() {
  const dummyProducts = [
    { id: '1', name: 'Kondapalli Wooden Elephant', price: 2500, image: 'kondapalli-toys.png', category: 'Wood Crafts' },
    { id: '2', name: 'Blue Pottery Vase', price: 1800, image: 'blue-pottery.png', category: 'Pottery' },
    { id: '3', name: 'Kalamkari Fabric', price: 3500, image: 'kalamkari.png', category: 'Textiles' },
  ];
  
  return NextResponse.json(dummyProducts);
}
