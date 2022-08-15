import { useEffect } from 'react'

const useOnMount = (func: () => void) => useEffect(func, [func])

export default useOnMount
