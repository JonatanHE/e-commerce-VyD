// UpperCamelCase
import './NavBar.scss'
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
        </div>
    ) 
}

export default NavBar