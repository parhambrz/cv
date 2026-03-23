const monthYear = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
})

export function formatDateLabel(value) {
  if (!value || value === 'Present') {
    return 'Present'
  }

  const [year, month] = value.split('-')
  const asDate = new Date(Number(year), Number(month) - 1, 1)

  if (Number.isNaN(asDate.getTime())) {
    return value
  }

  return monthYear.format(asDate)
}
