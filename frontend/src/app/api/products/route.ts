import { NextResponse } from 'next/server';

export async function GET() {
  const dummyProducts = [
    { id: '1', name: 'Kondapalli Wooden Elephant', price: 2500, image: 'kondapalli-toys.png', category: 'Wood Crafts' },
    { id: '2', name: 'Blue Pottery Vase', price: 1800, image: 'blue-pottery.png', category: 'Pottery' },
    { id: '3', name: 'Kalamkari Fabric', price: 3500, image: 'kalamkari.png', category: 'Textiles' },
    { id: '4', name: 'Traditional Brass Lamp', price: 4200, image: 'brass-lamp.png', category: 'Metal Crafts' },
    { id: '5', name: 'Dokra Metal Art', price: 2800, image: 'dokra-art.png', category: 'Metal Crafts' },
    { id: '6', name: 'Pochampally Ikat Saree', price: 6500, image: 'pochampally-saree.png', category: 'Textiles' },
    { id: '7', name: 'Terracotta Decor', price: 1200, image: 'terracotta.png', category: 'Pottery' },
    { id: '8', name: 'Warli Tribal Painting', price: 3000, image: 'warli-painting.png', category: 'Paintings' },
  ];
  
  return NextResponse.json(dummyProducts);
}
