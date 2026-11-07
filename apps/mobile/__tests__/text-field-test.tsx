import { describe, expect, jest, test } from '@jest/globals';
import { TextField } from '@komzot/ui';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('<TextField />', () => {
  test('renders the label and forwards typed text', async () => {
    const onChangeText = jest.fn();

    await render(
      <TextField
        label="Email"
        onChangeText={onChangeText}
        type="email"
        value=""
      />
    );

    expect(screen.getByText('Email')).toBeTruthy();
    fireEvent.changeText(screen.getByLabelText('Email'), 'hello@example.com');

    expect(onChangeText).toHaveBeenCalledWith('hello@example.com');
  });

  test('renders an error message', async () => {
    await render(
      <TextField
        error="Enter a valid email address."
        label="Email"
        onChangeText={() => {}}
        value=""
      />
    );

    expect(screen.getByText('Enter a valid email address.')).toBeTruthy();
  });
});
