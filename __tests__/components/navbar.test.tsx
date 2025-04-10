import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/navbar';

// Mock the icons
jest.mock('@/components/icons/fametonic-icon', () => ({
  __esModule: true,
  default: () => <div data-testid="fametonic-icon">FametonicIcon</div>,
}));

jest.mock('@/components/icons/menubar-icon', () => ({
  __esModule: true,
  default: () => <div data-testid="menubar-icon">MenubarIcon</div>,
}));

describe('Navbar', () => {
  const customNavItems = [
    { label: 'Custom Link 1', href: '/link1' },
    { label: 'Custom Link 2', href: '/link2' },
  ];

  it('renders the logo with correct link', () => {
    render(<Navbar />);
    const logoLink = screen.getByTestId('fametonic-icon').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders default navigation items', () => {
    render(<Navbar />);
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders mobile menu button with correct attributes', () => {
    render(<Navbar />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toHaveAttribute('aria-label', 'Toggle menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders navigation items with correct links', () => {
    render(<Navbar navItems={customNavItems} />);
    const links = screen.getAllByRole('link');

    // First link should be the logo
    expect(links[0]).toHaveAttribute('href', '/');

    // Check navigation links
    expect(links[1]).toHaveAttribute('href', '/link1');
    expect(links[2]).toHaveAttribute('href', '/link2');
  });
});
