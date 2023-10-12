export function formatCashToString(value: number) {
  const valueFormat = value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '');

  return valueFormat;
}
