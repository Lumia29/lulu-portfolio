"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className="back-link"
      onClick={() => router.back()}
    >
      ← 返回
    </button>
  );
}
