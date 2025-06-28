export function formatPrice(price: number) {
  return price.toLocaleString("ru-RU", {
    style: "decimal",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
