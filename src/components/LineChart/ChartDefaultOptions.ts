import { NO_DATA } from 'constants/messages'

import TooltipConfig from './TooltipConfig'

const ChartDefaultOptions = {
  responsive: true,
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { drawBorder: false },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: TooltipConfig,
    crosshair: {
      sync: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
    },
    noDataText: {
      text: `${NO_DATA} ...`,
    },
  },
}

export default ChartDefaultOptions
