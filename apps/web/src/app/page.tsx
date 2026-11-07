"use client";

import { Button } from "@komzot/ui";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        fontFamily: "var(--font-geist-sans)",
        gap: 16,
        justifyContent: "center",
        padding: 32,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 40, fontWeight: 700, margin: 0 }}>Komzot Web</h1>
      <p style={{ margin: 0, opacity: 0.7 }}>
        This button comes from the shared <code>@komzot/ui</code> package.
      </p>
      <Button
        label={`Clicked ${count} ${count === 1 ? "time" : "times"}`}
        onPress={() => setCount((value) => value + 1)}
      />
    </main>
  );
}
