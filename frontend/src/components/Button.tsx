type ButtonVariants = 'primary' | 'secondary'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}

const variantsToCss: Partial<{
  [key in ButtonVariants]: string
}> = {
  primary: 'bg-yellow-400 text-white font-bold hover:bg-yellow-500',
}

export default function (props: ButtonProps) {
  const { children, variant, className, ...rest } = props
  let baseCss =
    'border-none py-3 px-6 rounded-lg text-base cursor-pointer mt-2 '
  if (variant) {
    baseCss += variantsToCss[variant] + (className ?? '')
  }
  return (
    <button className={baseCss} {...rest}>
      {children}
    </button>
  )
}
