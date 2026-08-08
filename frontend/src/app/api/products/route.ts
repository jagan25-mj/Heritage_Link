import { NextResponse } from 'next/server';

export async function GET() {
  const dummyProducts = [
    { id: '1', name: 'Kondapalli Wooden Elephant', price: 2500, image: '/assets/img/products/ecommerce/ecommerce_elephant_1_1786208980204.png', images: ['/assets/img/products/ecommerce/ecommerce_elephant_1_1786208980204.png', '/assets/img/products/ecommerce/ecommerce_elephant_2_1786209002053.png', '/assets/img/products/ecommerce/ecommerce_elephant_3_1786209024285.png', '/assets/img/products/ecommerce/ecommerce_elephant_4_1786209045814.png'], category: 'Wood Crafts' },
    { id: '2', name: 'Toys Set For Kids Wooden Hand Made', price: 499, image: '/assets/img/products/ecommerce/ecommerce_lorry1_1786209244496.png', images: ['/assets/img/products/ecommerce/ecommerce_lorry1_1786209244496.png', '/assets/img/products/ecommerce/ecommerce_ambulance1_1786209157057.png', '/assets/img/products/ecommerce/ecommerce_fireengine1_1786209214799.png', '/assets/img/products/policecar 1.jpg'], category: 'Wood Crafts' },
    { id: '3', name: 'Kondapalli Bullock Cart', price: 1800, image: '/assets/img/products/ecommerce/ecommerce_bullcart1_1786209114316.png', category: 'Wood Crafts' },
    { id: '4', name: 'Kondapalli Marriage Pair', price: 2200, image: '/assets/img/products/ecommerce/ecommerce_marriagepair1_1786209143225.png', category: 'Wood Crafts' },
    { id: '5', name: 'Kondapalli Marriage Mandapam', price: 3200, image: '/assets/img/products/ecommerce/ecommerce_marriagemandapam1_1786209263485.png', category: 'Wood Crafts' },
  ];
  
  return NextResponse.json(dummyProducts);
}
