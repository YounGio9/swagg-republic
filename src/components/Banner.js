import logo from '../assets/drapeau.png'
import '../styles/Banner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
const Banner = ({cartState, cart, setCartState, setActiveCategory, setSearching, setMenuState, menuState, searchState, setSearchState}) => {
    const toggleCart = () => {
        setCartState(!cartState)
        setMenuState(false)
    }
    const toggleMenu = () => {
        setMenuState(!menuState)
    }
    const toggleSearch = () => {
        setSearchState(!searchState)
    }
    const resetAll = () => {
        setSearching([])
        setActiveCategory('')
    }

    return (
        <div className={'total'}>
    <div className="banner">
        <Link to={'/swagg-republic'} onClick={resetAll}> <img src={logo} alt="logo" className='logo'/></Link>
        <Link to={'/swagg-republic'} onClick={resetAll} style={{textDecoration: 'none', color: 'black'}}>
            <h1 className='title'>Swag Republic</h1>
        </Link>
    </div>
            <div className={'main'}>
                <button style={{backgroundColor: 'white'}} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} fontSize={23} color={'black'}/>
                </button>

                <p>
                    <button style={{backgroundColor: 'white'}} onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={23} color={'black'}/>
                    </button>
                  <span className={cart.length ? 'cart-icon' : ''}>
                      <button style={{backgroundColor: 'white'}} onClick={toggleCart}>
                        <FontAwesomeIcon icon={faCartShopping} style={{marginLeft: 20}} fontSize={23} color={'black'}/>
                      </button>
                  </span>


                </p>
            </div>


    </div>
    )

}

export default Banner