import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import Page from "./page";

vi.mock("@/components/auth-status", () => ({
  AuthStatus: () => <span>Auth status</span>,
}));

test("renders the KomZot home page", () => {
  render(<Page />);

  expect(screen.getByRole("heading", { level: 1, name: "KomZot" })).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Shared @komzot/ui button" })
  ).toBeInTheDocument();
});
