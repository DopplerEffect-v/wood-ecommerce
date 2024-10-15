"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const pathname = usePathname();

  const NavItems = () => (
    <>
      <Link href="/" className={pathname === '/' ? 'font-bold' : ''}>
        Home
      </Link>
      <Link href="/market" className={pathname === '/market' ? 'font-bold' : ''}>
        Market
      </Link>
      <Link href="/categories" className={pathname === '/categories' ? 'font-bold' : ''}>
        Categories
      </Link>
    </>
  );

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          WoodCraft Market
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavItems />
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <NavItems />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;