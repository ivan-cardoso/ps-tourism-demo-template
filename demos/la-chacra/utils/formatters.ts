export const formatCurrency = (amount: number, currency = "ARS") => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount)
}

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export const formatPhoneForCall = (phone: string) => {
  return phone.replace(/\s+/g, "").replace(/[^\d+]/g, "")
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}
