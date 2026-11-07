import { describe, expect, test } from '@jest/globals';
import { FormError } from '@komzot/ui';
import { render, screen } from '@testing-library/react-native';

describe('<FormError />', () => {
  test('renders the message as an alert', async () => {
    await render(<FormError message="Something went wrong." />);

    expect(screen.getByText('Something went wrong.')).toBeTruthy();
    expect(screen.getByRole('alert')).toBeTruthy();
  });

  test('renders nothing without a message', async () => {
    await render(<FormError message={null} />);

    expect(screen.queryByRole('alert')).toBeNull();
  });
});
