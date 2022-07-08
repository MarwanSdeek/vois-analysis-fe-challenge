import { Plugin } from 'chart.js'

const NO_DATA = 'No data to display'

type PluginOptions = { text: string }

const DEFAULT_OPTIONS = { text: NO_DATA }

const NoDataPlugin: Plugin = {
  id: 'noDataText',
  afterDraw(chart, args, options: PluginOptions) {
    const { datasets } = chart.data
    const { text = NO_DATA } = options || DEFAULT_OPTIONS

    let hasData = false
    for (let i = 0; i < datasets.length; i += 1) {
      const dataset = datasets[i]
      hasData = hasData || dataset.data.length > 0
    }

    if (hasData) {
      return
    }

    const ctx = chart.ctx
    const width = chart.width
    const height = chart.height
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'gray'
    ctx.font = '24px Arial'
    ctx.fillText(text, width / 2, height / 2)
    ctx.restore()
  },
}

export default NoDataPlugin
