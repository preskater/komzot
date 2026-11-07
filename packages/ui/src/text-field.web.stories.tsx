import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "storybook/test";
import { useState } from "react";

import { TextField } from "./text-field";
import type { TextFieldProps } from "./text-field.types";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  tags: ["autodocs", "test"],
  args: {
    label: "Email",
    value: "",
    onChangeText: () => {},
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

function ControlledTextField(args: TextFieldProps) {
  const [value, setValue] = useState(args.value);

  return <TextField {...args} value={value} onChangeText={setValue} />;
}

export const Default: Story = {
  render: (args) => <ControlledTextField {...args} />,
};

export const WithError: Story = {
  args: {
    error: "Enter a valid email address.",
  },
  render: (args) => <ControlledTextField {...args} />,
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    autoComplete: "current-password",
  },
  render: (args) => <ControlledTextField {...args} />,
};

export const Typing: Story = {
  render: (args) => <ControlledTextField {...args} />,
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText("Email");

    await userEvent.type(input, "hello@example.com");

    await expect(input).toHaveValue("hello@example.com");
  },
};
