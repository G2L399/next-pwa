"use client";

import React from "react";
import "./globals.css";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 max-w-[1024px]">{children}</div>
  );
}
