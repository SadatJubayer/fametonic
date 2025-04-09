import Link from 'next/link';
import FametonicICon from './icons/fametonic-icon';
import MenubarIcon from './icons/menubar-icon';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems?: NavItem[];
  className?: string;
};

const defaultNavItems: NavItem[] = [
  { label: 'About us', href: '#' },
  { label: 'Contact', href: '##' },
];

export function Navbar({
  navItems = defaultNavItems,
  className = '',
}: NavbarProps) {
  return (
    <header className={`sticky top-0 z-40 w-full bg-black py-4 ${className}`}>
      <div className="container flex h-16 md:h-24 items-center justify-between">
        {/* Empty div to balance the navbar on mobile */}
        <div className="block sm:hidden w-10"></div>

        {/* Logo  */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <FametonicICon />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[18px] text-gray font-medium hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="block sm:hidden">
          <button className="text-white p-2" aria-label="Toggle menu">
            <MenubarIcon />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
