import type { Meta, StoryObj } from "@storybook/react-native";
import { StyleSheet, View } from "react-native";

import { TextField } from "./text-field";

const meta = {
  title: "Forms/TextField",
  component: TextField,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
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

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "Enter a valid email address.",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    autoComplete: "current-password",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
});
