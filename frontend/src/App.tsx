// App.tsx
import { useState } from "react";
import Browser from "./pages/Browser";
import Console from "./pages/Console";

export default function () {
  const [page, setPage] = useState("Browser");

  switch (page) {
    case "Console":
      return <Console setPage={setPage} />;
    default:
      return <Browser setPage={setPage} />;
  }
}
