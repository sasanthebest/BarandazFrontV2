"use client";
import { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return <>{children}</>;
  }
  return null;
};

export default ClientOnly;
