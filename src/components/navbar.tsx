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

/**
 * Default navigation items
 */
const defaultNavItems: NavItem[] = [
  { label: 'About us', href: '#' },
  { label: 'Contact', href: '##' },
];

/**
 * Main navigation component for the application
 */
export function Navbar({
  navItems = defaultNavItems,
  className = '',
}: NavbarProps) {
  return (
    <header className={`z-40 w-full py-4 ${className}`}>
      <div className="container flex h-16 md:h-24 md:mt-6 items-center md:items-start justify-between">
        {/* Spacer for mobile layout balance */}
        <div className="block md:hidden w-10" aria-hidden="true" />

        {/* Brand logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <FametonicICon />
          </Link>
        </div>

        {/* Primary navigation - desktop only */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[18px] font-medium text-gray hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle - mobile only */}
        <div className="block md:hidden">
          <button
            className="text-white p-2"
            aria-label="Toggle menu"
            aria-expanded="false"
          >
            <MenubarIcon />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
