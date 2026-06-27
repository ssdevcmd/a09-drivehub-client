import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner
        size="lg"
        color="accent"
        label="Loading car details..."
      />
    </div>
  );
}