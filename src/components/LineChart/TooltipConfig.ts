import { TooltipItem, ChartType } from 'chart.js'

import { getIncreasePercentage } from 'utils/Math'
import { getDatasetPointAsNumber } from 'utils/Types'

const hidden = () => ''

const getDataSetLabel = (tooltipItem: TooltipItem<ChartType>): string => {
  return tooltipItem.dataset.label || ''
}

const getPointValueWithIncreasePercentage = (
  tooltipItems: TooltipItem<ChartType>[]
): string => {
  if (tooltipItems.length === 0 || !tooltipItems[0]) {
    return ''
  }

  const { dataIndex, dataset, formattedValue } = tooltipItems[0]
  const labelledValue = `${formattedValue} lessons`

  const hasPrevious = dataIndex > 0
  if (!hasPrevious) {
    return labelledValue
  }

  const current: number = getDatasetPointAsNumber(dataset.data[dataIndex]),
    previous: number = getDatasetPointAsNumber(dataset.data[dataIndex - 1])

  if (previous === 0) {
    return labelledValue
  }

  const increasePercentage = getIncreasePercentage(previous, current)

  const sign = increasePercentage > 0 ? '+' : '-'
  const arrow = increasePercentage > 0 ? '↑' : '↓'
  const afterText =
    increasePercentage != 0
      ? `${sign} ${Math.abs(increasePercentage)}% ${arrow}`
      : `0% -`

  return `${labelledValue} ${afterText}`
}

const TooltipConfig = {
  usePointStyle: true,
  rtl: true,
  textDirection: 'ltr',
  padding: 10,
  boxPadding: 60,
  callbacks: {
    title: hidden,
    label: getDataSetLabel,
    afterBody: getPointValueWithIncreasePercentage,
  },
}

export default TooltipConfig
