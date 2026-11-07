import { describe, expect, jest, test } from '@jest/globals';
import { TextLink } from '@komzot/ui';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe('<TextLink />', () => {
  test('calls onPress', async () => {
    const onPress = jest.fn();

    await render(<TextLink onPress={onPress}>Create one</TextLink>);
    fireEvent.press(screen.getByText('Create one'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('is disabled by default state when disabled', async () => {
    await render(
      <TextLink disabled onPress={() => {}}>
        Create one
      </TextLink>
    );

    const link = screen.getByText('Create one');
    expect(link.props.onPress).toBeUndefined();
    expect(link.props.accessibilityState).toEqual({ disabled: true });
  });
});
