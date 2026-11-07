import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react-native';

const mockUseSession = jest.fn();
const mockSignOut = jest.fn();

jest.mock('expo-router', () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn() }),
}));

jest.mock('@/lib/auth-client', () => ({
  authClient: {
    signOut: mockSignOut,
    useSession: () => mockUseSession(),
  },
}));

import HomeScreen from '../src/app/(pages)/index';

describe('<HomeScreen />', () => {
  beforeEach(() => {
    mockUseSession.mockReturnValue({ data: null, isPending: false });
  });

  test('renders the signed-out state', async () => {
    await render(<HomeScreen />);

    expect(screen.getByText('KomZot')).toBeTruthy();
    expect(screen.getByText('Signed out')).toBeTruthy();
    expect(screen.getByText('Sign in')).toBeTruthy();
    expect(screen.getByText('Create account')).toBeTruthy();
  });

  test('renders the signed-in state', async () => {
    mockUseSession.mockReturnValue({
      data: { user: { email: 'test@example.com' } },
      isPending: false,
    });

    await render(<HomeScreen />);

    expect(screen.getByText('Signed in as test@example.com')).toBeTruthy();
    expect(screen.getByText('Sign out')).toBeTruthy();
  });
});
