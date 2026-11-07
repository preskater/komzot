import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "storybook/test";

import { TextLink } from "./text-link";

const meta = {
  title: "Navigation/TextLink",
  component: TextLink,
  tags: ["autodocs", "test"],
  args: {
    children: "Create one",
    onPress: fn(),
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clicks: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Create one" }));

    await expect(args.onPress).toHaveBeenCalledOnce();
  },
};
