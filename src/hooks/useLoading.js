import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function useLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, []);

  return isLoading;
}
