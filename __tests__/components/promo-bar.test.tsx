import { render, screen } from '@testing-library/react';
import { PromoBar } from '@/components/promo-bar';

describe('PromoBar', () => {
  it('renders the promotion text', () => {
    render(<PromoBar />);

    // Test for the complete promo text
    expect(screen.getByText(/🚀 FRESH BEGINNINGS SALE/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Extra 25% OFF, Limited Spots - start your journey today!/
      )
    ).toBeInTheDocument();
  });
});
