// UpperCamelCase
import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    return(
        // Fragment
        <div className='nav-style'>
            <h1>VyD</h1>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Promociones</button></li>
                <li><button>Contacto</button></li>
                <li><button>La Empresa</button></li>
            </ul>
            <CartWidget />
        </div>
    ) 
}

export default NavBar