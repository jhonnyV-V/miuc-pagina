import { HeadContent, createFileRoute } from '@tanstack/react-router'
import '../login.css'

export const Route = createFileRoute('/demo/login')({
  head: () => ({
    meta: [{ title: 'Inicio de Sesión - Congregación' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <HeadContent />
      <div className="login-container">
        <img
          src="../../public/miuc.png"
          width="250px"
          height="62.50px"
          alt=""
        />
        <form>
          <div className="input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
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
