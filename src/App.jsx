import './App.css'

import InitialSetup from './assets/components/InitialSetup'

function App() {

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="https://github.com/RecheEduardo" target='_blank'><i className="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/eduardorechemartins/" target='_blank'><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://wa.me/5511994088541?text=Ol%C3%A1%2C%20sou%20Eduardo%20Reche!" target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
          </ul>
        </nav>
      </header>
      <section className="setup">    
        <InitialSetup />
      </section>
      <footer className="bottom">Desenvolvido por <span>Eduardo Reche</span></footer>
    </>
  )
}

export default App
