import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn } from "storybook/test";

import { Button } from "./button";
import { Form } from "./form";

const meta = {
  title: "Forms/Form",
  component: Form,
  tags: ["autodocs", "test"],
  args: {
    onSubmit: fn(),
    children: <Button label="Submit" type="submit" />,
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Submits: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole("button", { name: "Submit" }));

    await expect(args.onSubmit).toHaveBeenCalledOnce();
  },
};
