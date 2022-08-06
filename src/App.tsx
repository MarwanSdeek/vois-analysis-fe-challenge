import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider as ReduxProvider } from 'react-redux'

import { PagesLoader } from './pages'
import store from './store'
import { globalStyles } from 'stitches.config'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 4.5 * 60 * 1000,
    },
  },
})

function App() {
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PagesLoader />
      </ReduxProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
