// App.tsx
import { useState } from "react";
import Browser from "./pages/Browser";
import Console from "./pages/Console";

export default function () {
  const [page, setPage] = useState("Console");

  switch (page) {
    case "Browser":
      return <Browser setPage={setPage} />;
    default:
      return <Console setPage={setPage} />;
  }
}
