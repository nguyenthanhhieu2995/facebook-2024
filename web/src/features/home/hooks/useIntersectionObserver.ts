import { useCallback, useRef, DependencyList } from 'react'

export const useIntersectionObserver = (callback: () => void, dependencies: DependencyList) => {
  const observer = useRef<IntersectionObserver>()

  return useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback()
      }
    })

    if (node) observer.current.observe(node)
  }, dependencies)
}

