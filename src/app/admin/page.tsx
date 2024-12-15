'use client';

import { useMap } from "@/hooks/UseMap";
import { useRef } from "react";

export function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef);

  return <div className="w-screen h-screen" ref={mapContainerRef} />;
}

export default AdminPage;
