import { render, screen } from '@testing-library/react';
import { FeatureItem } from '@/components/feature-item';

describe('FeatureItem', () => {
  const defaultText = 'Test feature text';

  it('renders feature text correctly', () => {
    render(<FeatureItem text={defaultText} />);
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });

  it('renders with sparkle emoji', () => {
    render(<FeatureItem text={defaultText} />);
    expect(screen.getByText('✨')).toBeInTheDocument();
  });

  it('applies animation delay class when provided', () => {
    const delay = 'delay-200';
    render(<FeatureItem text={defaultText} delay={delay} />);
    const container = screen.getByText(defaultText).closest('div');
    expect(container).toHaveClass('animate-fade-in', delay);
  });

  it('applies centered alignment classes when provided', () => {
    const centered = 'md:text-left';
    render(<FeatureItem text={defaultText} centered={centered} />);
    const container = screen.getByText(defaultText).closest('div');
    expect(container).toHaveClass('justify-center', 'text-left', centered);
  });

  it('renders without centered classes when not provided', () => {
    render(<FeatureItem text={defaultText} />);
    const container = screen.getByText(defaultText).closest('div');
    expect(container).toHaveClass(
      'flex',
      'justify-start',
      'space-x-2',
      'animate-fade-in'
    );
    expect(container).not.toHaveClass('justify-center', 'text-left');
  });
});
