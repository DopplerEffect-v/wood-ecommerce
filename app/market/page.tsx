import ProductGrid from '@/components/ProductGrid';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function MarketPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wood Market</h1>
      <div className="flex mb-8">
        <Input
          type="search"
          placeholder="Search for wood products..."
          className="mr-4"
        />
        <Button>Search</Button>
      </div>
      <ProductGrid />
    </div>
  );
}