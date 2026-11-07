import type { Meta, StoryObj } from "@storybook/react-native";

import { AuthCard } from "./auth-card";
import { AuthScreen } from "./auth-screen";
import { Button } from "./button";

const meta = {
  title: "Auth/AuthScreen",
  component: AuthScreen,
  args: {
    children: (
      <AuthCard title="Welcome" subtitle="Sign in to continue.">
        <Button fullWidth label="Continue" />
      </AuthCard>
    ),
  },
} satisfies Meta<typeof AuthScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
