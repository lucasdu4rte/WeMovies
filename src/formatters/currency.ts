const BRL = {
  style: 'currency',
  currency: 'BRL',
  locale: 'pt-BR'
}

const currencyMap = {
  BRL,
}

export const currencyFormat = (currencyCode: 'BRL', value: number) => {
  const currency = currencyMap[currencyCode]
  return new Intl.NumberFormat(currency.locale, {
    style: currency.style,
    currency: currency.currency
  }).format(value)
}
