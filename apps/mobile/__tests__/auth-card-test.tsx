import { describe, expect, test } from '@jest/globals';
import { AuthCard, TextLink } from '@komzot/ui';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';

describe('<AuthCard />', () => {
  test('renders the title, subtitle, content, and footer', async () => {
    await render(
      <AuthCard
        footer={<TextLink>Create one</TextLink>}
        subtitle="Sign in to your account."
        title="Sign in"
      >
        <Text>Content</Text>
      </AuthCard>
    );

    expect(screen.getByText('Sign in')).toBeTruthy();
    expect(screen.getByText('Sign in to your account.')).toBeTruthy();
    expect(screen.getByText('Content')).toBeTruthy();
    expect(screen.getByText('Create one')).toBeTruthy();
  });
});
