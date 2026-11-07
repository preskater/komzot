import type { Meta, StoryObj } from "@storybook/react";

import { AuthCard } from "./auth-card";
import { Button } from "./button";
import { TextLink } from "./text-link";

const meta = {
  title: "Auth/AuthCard",
  component: AuthCard,
  tags: ["autodocs", "test"],
  args: {
    title: "Sign in",
    subtitle: "Sign in to your KomZot account.",
    children: <Button fullWidth label="Sign in" />,
    footer: (
      <span>
        No account? <TextLink>Create one</TextLink>
      </span>
    ),
  },
} satisfies Meta<typeof AuthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutFooter: Story = {
  args: {
    footer: undefined,
  },
};
