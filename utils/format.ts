export const formatPrice = (price?: number) => {
  if (!price) return ''
  return new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'EUR' }).format(price)
}
