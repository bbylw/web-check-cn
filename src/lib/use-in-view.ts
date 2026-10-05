import { useEffect, useRef, useState } from 'react'

/**
 * 元素进入视口时置为 true（一次性）。
 * 降级安全：无 IntersectionObserver 时直接可见，绝不把内容卡在隐藏态。
 */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  // 无 IntersectionObserver 的环境直接视为可见，绝不把内容卡在隐藏态
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, inView }
}
