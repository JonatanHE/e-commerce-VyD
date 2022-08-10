// UpperCamelCase
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return(
        // Fragment
        <div className='nav-style'>
            <Link to="/"><img src='../assets/logo.png' className='logo' alt='VyD'></img></Link>
            <ul>
                <Link to="/"><li><button>Inicio</button></li></Link>
                <Link to="/productos"><li><button>Productos</button></li></Link>
                <Link to="/contacto"><li><button>Contacto</button></li></Link>
                <Link to="/"><li><button>La Empresa</button></li></Link>
            </ul>
            <CartWidget />
        </div>
    ) 
}

export default NavBar