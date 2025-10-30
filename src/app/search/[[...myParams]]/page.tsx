"use client";

import { use } from "react";

interface DynamicSearchProps {
  params: Promise<{
    myParams?: string[];
  }>;
}

export default function DynamicSearch({ params }: DynamicSearchProps) {
  // ✅ unwrap params Promise (required in Next.js 15+)
  const resolvedParams = use(params);
  const myParams = resolvedParams.myParams || [];

  const category = myParams[0] || "none";
  const group = myParams[1] || "none";
  const brand = myParams[2] || "none";
  const modelNo = myParams[3] || "none";

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dynamic Search Page</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Group:</strong> {group}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Model No:</strong> {modelNo}</p>
    </div>
  );
}
