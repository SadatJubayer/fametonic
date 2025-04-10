/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/hero-section';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, priority, ...rest } = props;
    return <img {...rest} />;
  },
}));

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />);
    const heading = screen.getByText(
      'Want to Turn Social Media Into a Profitable Career?'
    );
    expect(heading).toBeInTheDocument();
  });

  it('renders all feature items', () => {
    render(<HeroSection />);

    const features = [
      'Start growing your influence right away—no waiting required!',
      'Create viral TikToks and Reels step by step with easy-to-follow lessons',
      'Use a Personal AI Worker to boost your content',
      'Learn from expert-led courses designed for aspiring influencers',
    ];

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders the CTA button', () => {
    render(<HeroSection />);
    const ctaButton = screen.getByText('GET STARTED');
    expect(ctaButton).toBeInTheDocument();
  });

  it('renders both mobile and desktop app mockup images', () => {
    render(<HeroSection />);

    const images = screen.getAllByRole('img', {
      name: /fametonic app interface/i,
    });

    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', '/images/hero_image_mobile.png');
    expect(images[0]).toHaveAttribute(
      'alt',
      'Fametonic App Interface - Mobile View'
    );
    expect(images[1]).toHaveAttribute('src', '/images/hero_image.png');
    expect(images[1]).toHaveAttribute(
      'alt',
      'Fametonic App Interface - Desktop View'
    );
  });
});
