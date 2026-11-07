import type { Meta, StoryObj } from "@storybook/react";

import { FormError } from "./form-error";

const meta = {
  title: "Forms/FormError",
  component: FormError,
  tags: ["autodocs", "test"],
  args: {
    message: "Something went wrong.",
  },
} satisfies Meta<typeof FormError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hidden: Story = {
  args: {
    message: null,
  },
};
