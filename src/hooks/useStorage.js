export default function useStorage() {
  const getItem = (key, type = "session") => {
    const storage = type === "local" ? localStorage : sessionStorage;
    const data = storage.getItem(key);

    return JSON.parse(data);
  };

  const setItem = (key, value, type = "session") => {
    const storage = type === "local" ? localStorage : sessionStorage;
    const stringify = JSON.stringify(value);
    return storage.setItem(key, stringify);
  };

  const removeItem = (key, type = "session") => {
    const storage = type === "local" ? localStorage : sessionStorage;
    return storage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
}
