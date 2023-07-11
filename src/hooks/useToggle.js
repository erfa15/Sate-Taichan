import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [status, setStatus] = useState(initialValue);
  const toggleStatus = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return { status, toggleStatus };
}
