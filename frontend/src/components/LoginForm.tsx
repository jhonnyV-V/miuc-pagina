import { Link } from '@tanstack/react-router'
import Button from './Button'
import Input from './Input'
import TextSlider from './TextSlider'

type ComponentProps = {
  onFormSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>
  isLoggingIn: boolean
}

const verses = [
  '“El Señor es mi luz y mi salvación; ¿a quién temeré?” – Salmo 27:1',
  '“Todo lo puedo en Cristo que me fortalece.” – Filipenses 4:13',
  '“El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.” – Salmo 91:1',
  '“Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia.” – Proverbios 3:5',
  '“Yo soy el camino, la verdad y la vida.” – Juan 14:6',
]
const defaultText =
  '“El Señor es mi luz y mi salvación; ¿a quién temeré?” – Salmo 27:1'

export function LoginForm({ onFormSubmit, isLoggingIn }: ComponentProps) {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-[#1a3d5d] text-blue-950 min-h-screen min-w-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 text-center min-w-md sm:p-6">
        <picture>
          {/* First choice for the browser */}
          <source
            srcSet="/miuc-250.avif"
            type="image/avif"
            width="250px"
            height="62px"
            className="ml-16"
          />
          <source
            srcSet="/miuc-250.jpeg"
            type="image/avif"
            width="250px"
            height="62px"
            className="ml-16"
          />
          {/* fallback; other attributes, like `alt` and `sizes`, will be shared across all possible images */}
          <img
            src="/miuc-250.png"
            width="250px"
            height="62px"
            alt="MIUC Ministerio Internacional Uno en Cristo"
            className="ml-16"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <form onSubmit={onFormSubmit}>
          <fieldset disabled={isLoggingIn} className="pt-2">
            <div className="mb-4 text-left">
              <Input
                type="email"
                id="email"
                name="email"
                label="Correo electrónico"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <Input
                type="password"
                id="password"
                name="password"
                label="Contraseña"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" variant="primary">
              {isLoggingIn ? 'Iniciando Sesión' : 'Iniciar Sesión'}
            </Button>
          </fieldset>
        </form>
        <Link to="/" className="block mt-4 text-md text-blue-900 no-underline">
          ¿Olvidaste tu contraseña?
        </Link>
        <TextSlider content={verses} defaultText={defaultText} />
      </div>
    </div>
  )
}
