"use client";

import { useState } from "react";
import { formatHour } from "@/utils/format-datetime";

export default function ExemploPage() {
  const [hour] = useState(() => formatHour(Date.now()));

  return (
    <main className="min-h-150 text-4xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
