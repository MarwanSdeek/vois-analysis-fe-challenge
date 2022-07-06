function getIncreasePercentage(
  firstValue: number,
  secondValue: number
): number {
  if (firstValue === 0) return 0

  return Math.round(((secondValue - firstValue) / firstValue) * 100)
}

export { getIncreasePercentage }
