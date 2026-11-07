import type { Meta, StoryObj } from "@storybook/react-native";
import { View } from "react-native";

import { Button } from "./button";

const meta = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
  args: {
    label: "Button",
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
