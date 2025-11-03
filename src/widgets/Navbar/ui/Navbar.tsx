import { ThemeSwitcher } from '../../../features/ThemeSwitcher/ThemeSwitcher'
import classes from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
