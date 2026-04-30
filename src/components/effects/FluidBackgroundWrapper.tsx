"use client";

import dynamic from "next/dynamic";

const FluidBackground = dynamic(
  () => import("@/components/effects/FluidBackground"),
  { ssr: false }
);

export default function FluidBackgroundWrapper() {
  return <FluidBackground isActive={true} />;
}
