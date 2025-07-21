"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Button
      size="sm"
      onClick={() => window.history.back()}
      className="flex items-center gap-2 shrink-0"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="hidden sm:inline">Back</span>
    </Button>
  );
} 