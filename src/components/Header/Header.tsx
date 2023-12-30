import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="screen__wrapper">
        <a href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>

        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
