import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>WoodCraft Market is your premier source for high-quality wood and lumber. We cater to all your woodworking and crafting needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/market">Market</Link></li>
              <li><Link href="/categories">Categories</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@woodcraftmarket.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Wood Lane, Forestville, CA 12345</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 WoodCraft Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;