import { describe, expect, jest, test } from '@jest/globals';
import { Button } from '@komzot/ui';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('<Button />', () => {
  test('calls onPress when pressed', async () => {
    const onPress = jest.fn();

    await render(<Button label="Press me" onPress={onPress} />);
    fireEvent.press(screen.getByRole('button', { name: 'Press me' }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress when disabled', async () => {
    const onPress = jest.fn();

    await render(<Button label="Disabled" disabled onPress={onPress} />);
    fireEvent.press(screen.getByRole('button', { name: 'Disabled' }));

    expect(onPress).not.toHaveBeenCalled();
  });
});
