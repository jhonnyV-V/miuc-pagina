interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
}

export default function (props: InputProps) {
  const { className, name, label, labelProps, ...rest } = props
  let baseCss = 'w-full p-3 border border-gray-300 rounded-lg text-base '
  if (className) {
    baseCss += className
  }
  let labelBaseCss = 'block mb-1 text-base font-semibold '
  if (labelProps?.className) {
    labelBaseCss += labelProps.className
  }
  return (
    <>
      {label && (
        <label htmlFor={name} className={labelBaseCss} {...labelProps}>
          Correo electrónico
        </label>
      )}
      <input name={name} className={baseCss} {...rest} />
    </>
  )
}
