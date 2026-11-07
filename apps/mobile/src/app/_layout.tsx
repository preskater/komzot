import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

export const unstable_settings = {
  anchor: storybookEnabled ? '(storybook)/index' : '(pages)/index',
};

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={storybookEnabled}>
          <Stack.Screen name="(storybook)/index" />
        </Stack.Protected>
        <Stack.Screen name="(pages)/index" />
        <Stack.Screen name="(pages)/sign-in" />
        <Stack.Screen name="(pages)/sign-up" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
