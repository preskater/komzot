import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

import HomeScreen from '../src/app/(pages)/index';

describe('<HomeScreen />', () => {
  test('renders the app name and shared button', async () => {
    await render(<HomeScreen />);

    expect(screen.getByText('KomZot')).toBeTruthy();
    expect(screen.getByText('Shared @komzot/ui button')).toBeTruthy();
  });
});
