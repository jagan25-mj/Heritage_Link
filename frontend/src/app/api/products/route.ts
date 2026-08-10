import { NextResponse } from 'next/server';

export async function GET() {
  const dummyProducts = [
    { id: '1', name: 'Kondapalli Wooden Elephant', price: 499, image: '/assets/img/products/ecommerce/ecommerce_elephant_1_1786208980204.png', images: ['/assets/img/products/ecommerce/ecommerce_elephant_1_1786208980204.png', '/assets/img/products/ecommerce/ecommerce_elephant_2_1786209002053.png', '/assets/img/products/ecommerce/ecommerce_elephant_3_1786209024285.png', '/assets/img/products/ecommerce/ecommerce_elephant_4_1786209045814.png'], category: 'Wood Crafts' },
    { id: '2', name: 'Toys Set For Kids Wooden Hand Made', price: 499, image: '/assets/img/products/ecommerce/ecommerce_lorry1_1786209244496.png', images: ['/assets/img/products/ecommerce/ecommerce_lorry1_1786209244496.png', '/assets/img/products/ecommerce/ecommerce_ambulance1_1786209157057.png', '/assets/img/products/ecommerce/ecommerce_fireengine1_1786209214799.png', '/assets/img/products/policecar_new.png', '/assets/img/products/toys_set_new.png'], category: 'Wood Crafts' },
    { id: '3', name: 'Kondapalli Bullock Cart', price: 449, image: '/assets/img/products/ecommerce/ecommerce_bullcart_new1.png', images: ['/assets/img/products/ecommerce/ecommerce_bullcart_new1.png', '/assets/img/products/ecommerce/ecommerce_bullcart_new2.png', '/assets/img/products/ecommerce/ecommerce_bullcart_new3.png', '/assets/img/products/ecommerce/ecommerce_bullcart_new4.png'], category: 'Wood Crafts' },
    { id: '4', name: 'Kondapalli Marriage Pair', price: 299, image: '/assets/img/products/ecommerce/ecommerce_marriagepair_new1.png', images: ['/assets/img/products/ecommerce/ecommerce_marriagepair_new1.png', '/assets/img/products/ecommerce/ecommerce_marriagepair_new2.png'], category: 'Wood Crafts' },
    { id: '5', name: 'Kondapalli Marriage Mandapam', price: 399, image: '/assets/img/products/ecommerce/ecommerce_marriagemandapam_new1.png', images: ['/assets/img/products/ecommerce/ecommerce_marriagemandapam_new1.png', '/assets/img/products/ecommerce/ecommerce_marriagemandapam_new2.png'], category: 'Wood Crafts' },
  ];
  
  return NextResponse.json(dummyProducts);
}
