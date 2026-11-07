import type { Meta, StoryObj } from "@storybook/react-native";
import { StyleSheet, Text, View } from "react-native";

import { AuthCard } from "./auth-card";
import { Button } from "./button";
import { TextLink } from "./text-link";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  footer: {
    flexDirection: "row",
    gap: 4,
  },
  footerText: {
    color: "#666666",
    fontSize: 14,
  },
});

const meta = {
  title: "Auth/AuthCard",
  component: AuthCard,
  decorators: [
    (Story) => (
      <View style={styles.container}>
        <Story />
      </View>
    ),
  ],
  args: {
    title: "Sign in",
    subtitle: "Sign in to your KomZot account.",
    children: <Button fullWidth label="Sign in" />,
    footer: (
      <View style={styles.footer}>
        <Text style={styles.footerText}>No account?</Text>
        <TextLink>Create one</TextLink>
      </View>
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
