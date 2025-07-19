import '../login.css'
import Button from './Button'

type ComponentProps = {
  onFormSubmit: (evt: React.FormEvent<HTMLFormElement>) => Promise<void>
  isLoggingIn: boolean
}

export function LoginForm({ onFormSubmit, isLoggingIn }: ComponentProps) {
  return (
    <>
      <div className="login-container">
        <img
          src="../../public/miuc.png"
          width="250px"
          height="62.50px"
          alt=""
        />
        <form onSubmit={onFormSubmit}>
          <fieldset disabled={isLoggingIn}>
            <div className="mb-4 text-left">
              <label
                htmlFor="email"
                className="block mb-1 text-base font-semibold"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                required
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
              />
            </div>
            <div className="mb-4 text-left">
              <label
                htmlFor="password"
                className="block mb-1 text-base font-semibold"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
              />
            </div>
            <Button type="submit" variant="primary">
              {isLoggingIn ? 'Iniciando Sesión' : 'Iniciar Sesión'}
            </Button>
          </fieldset>
        </form>
        <a href="/" className="forgot-password">
          ¿Olvidaste tu contraseña?
        </a>

        <div className="verse-slider">
          “El Señor es mi luz y mi salvación; ¿a quién temeré?” – Salmo 27:1
        </div>
      </div>
    </>
  )
}
//   <script>
//   const verses = [
//     "“El Señor es mi luz y mi salvación; ¿a quién temeré?” – Salmo 27:1",
//     "“Todo lo puedo en Cristo que me fortalece.” – Filipenses 4:13",
//     "“El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.” – Salmo 91:1",
//     "“Confía en el Señor con todo tu corazón y no te apoyes en tu propia prudencia.” – Proverbios 3:5",
//     "“Yo soy el camino, la verdad y la vida.” – Juan 14:6"
//   ];
//
//   let index = 0;
//   const verseElement = document.querySelector('.verse-slider');
//
//   function changeVerse() {
//     verseElement.style.opacity = 0;
//     setTimeout(() => {
//       index = (index + 1) % verses.length;
//       verseElement.textContent = verses[index];
//       verseElement.style.opacity = 1;
//     }, 500);
//   }
//
//   setInterval(changeVerse, 10000); // Cambia cada 10 segundos
// </script>
