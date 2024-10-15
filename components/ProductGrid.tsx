"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  { id: 1, name: 'Oak Planks', price: 25, image: 'https://source.unsplash.com/random/400x300?oak-wood' },
  { id: 2, name: 'Maple Boards', price: 30, image: 'https://source.unsplash.com/random/400x300?maple-wood' },
  { id: 3, name: 'Cherry Veneer', price: 15, image: 'https://source.unsplash.com/random/400x300?cherry-wood' },
  { id: 4, name: 'Walnut Slabs', price: 50, image: 'https://source.unsplash.com/random/400x300?walnut-wood' },
  { id: 5, name: 'Pine Boards', price: 20, image: 'https://source.unsplash.com/random/400x300?pine-wood' },
  { id: 6, name: 'Cedar Planks', price: 35, image: 'https://source.unsplash.com/random/400x300?cedar-wood' },
];

const ProductGrid = () => {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  const addToCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-48 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => addToCart(product.id)}>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;