export default function formattedText(text) {
  if (!text) return "Tunggu Sebentar";
  const formattedText = text
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return formattedText;
}
