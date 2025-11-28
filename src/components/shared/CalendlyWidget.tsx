"use client";

import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

export function CalendlyWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[650px] bg-slate-50 rounded-lg">
        <p className="text-slate-500">Loading scheduler...</p>
      </div>
    );
  }

  return (
    <InlineWidget
      url="https://calendly.com/service-leadergaragedoor"
      styles={{
        height: "700px",
        minWidth: "320px",
      }}
    />
  );
}