import useLocalStorage from 'use-local-storage';

import './index.css';

function App() { 
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (    
      <div className='app' data-theme={theme} >
        <div className='login'>
          <h1>Faça seu login</h1>

          <div className='container'>

            <div className='top'>
              <i class='fab fa-google'></i>
              <i class='fab fa-facebook-square'></i>
              <i class='fab fa-linkedin'></i>
              <i class='fab fa-instagram-square'></i>
            </div>

            <p className='divider'><span>Ou</span></p>

            <form action="">
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder='Digite seu email'/>
              <label htmlFor="">Senha</label>
              <input type="password" placeholder='Digite sua senha' />

              <div className='remember'>
                <input type="checkbox" checked="checked" />
                <p>Lembrar-me</p>
              </div>

              <button>Entrar</button>

            </form>

            <div className='bottom'>
              <p>Esqueceu sua senha?</p>
              <a href="">Redefinir senha</a>
            </div>
            <p className='create'>Criar conta</p>

          </div>

          <div className='theme-toggle'>
            <h2>Light Theme</h2>
            <i onClick={switchTheme} class='fas fa-toggle-on'></i>
          </div>
        </div>
      </div>
      
  )
}

export default App
