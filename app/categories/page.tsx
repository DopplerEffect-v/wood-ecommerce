import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const categories = [
  { name: 'Hardwood', description: 'Durable and beautiful woods like oak, maple, and walnut' },
  { name: 'Softwood', description: 'Versatile woods like pine, cedar, and fir' },
  { name: 'Exotic Wood', description: 'Unique and rare woods from around the world' },
  { name: 'Reclaimed Wood', description: 'Eco-friendly options with character and history' },
  { name: 'Veneer', description: 'Thin wood sheets for furniture and cabinetry' },
  { name: 'Plywood', description: 'Engineered wood for various construction needs' },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Wood Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link href={`/market?category=${category.name.toLowerCase()}`} key={index}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}