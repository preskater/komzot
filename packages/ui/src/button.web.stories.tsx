import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "storybook/test";

import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs", "test"],
  args: {
    label: "Button",
    onPress: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    loadingLabel: "Saving...",
  },
};

export const Clicks: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Button" }));

    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};
