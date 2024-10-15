import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to WoodCraft Market</h1>
        <p className="text-xl mb-8">Premium wood and lumber for all your crafting needs</p>
        <Link href="/market">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Wide Selection</h2>
          <p>From oak to maple, we have the perfect wood for your project.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quality Guaranteed</h2>
          <p>All our wood is carefully selected and inspected for quality.</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Expert Advice</h2>
          <p>Our team of woodworking experts is here to help you choose the right wood.</p>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Oak Planks', 'Maple Boards', 'Cherry Veneer'].map((product, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md">
              <div className="mb-4 h-48 relative">
                <Image
                  src={`https://source.unsplash.com/random/400x300?wood,${product.toLowerCase().replace(' ', '-')}`}
                  alt={product}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product}</h3>
              <Link href="/market">
                <Button variant="outline">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}