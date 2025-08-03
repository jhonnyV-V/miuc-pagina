import { memo, useEffect, useRef } from 'react'

type TextSliderProps = {
  content: Array<string>
  defaultText: string
}

let i = 0

function changeContent(contentRef: HTMLDivElement, content: Array<string>) {
  contentRef.style.opacity = '0'
  setTimeout(() => {
    i = (i + 1) % content.length
    contentRef.textContent = content[i]
    contentRef.style.opacity = '1'
  }, 500)
}
let interval: ReturnType<typeof setInterval>

function TextSlider(props: TextSliderProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      interval = setInterval(
        () => changeContent(ref.current!, props.content),
        7000,
      )
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })
  return (
    <div
      ref={ref}
      className="mt-4 italic text-sm text-gray-700 transition-opacity duration-500 ease-in-out text-ellipsis max-w-[60ch]"
    >
      {props.defaultText}
    </div>
  )
}

export default memo(TextSlider)
