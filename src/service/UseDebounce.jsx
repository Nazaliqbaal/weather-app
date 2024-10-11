import { useEffect, useState } from "react";

export function UseDebounce(val, delay) {
  const [debouncedVal, setDebouncedVal] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => clearTimeout(handler);
  }, [val, delay]);
  return debouncedVal;
}
