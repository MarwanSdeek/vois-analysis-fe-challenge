import { ScatterDataPoint, BubbleDataPoint } from 'chart.js'

type DatasetPoint = number | ScatterDataPoint | BubbleDataPoint | null

function isDatasetPointANumber(val: DatasetPoint): val is number {
  return typeof val === 'number'
}

function getDatasetPointAsNumber(val: DatasetPoint): number {
  return val && isDatasetPointANumber(val) ? val : 0
}

export { getDatasetPointAsNumber }
