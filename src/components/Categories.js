import '../styles/Categories.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Categories({ setActiveCategory, categories, activeCategory, menuState, setMenuState, searchState, setSearchState}) {

	const others = ['A propos de nous', 'Politique de retour', 'FAQ']
	return (menuState ? (
		<div className='menu'>
			<button className={'close-menu'} onClick={() => setMenuState(false)}>
				<FontAwesomeIcon icon={faXmark} fontSize={'1.2em'} />
			</button>
			<Link to={'/swagg-republic'} style={{textAlign: "left"}} >
				<button className={'button-kind'} onClick={() => {
					setActiveCategory('Magasin')
					setMenuState(false)
				}}> Magasin </button>
			</Link>

			{categories.map((cat, idx ) =>
				<Link to={'/swagg-republic'} key={idx} style={{textAlign: "left"}}>
					<button className={'button-kind'}  value={cat} onClick={(e) => {
						setActiveCategory(cat)
						setMenuState(false)
					}}>{ cat }</button>
				</Link>

			)}
			{others.map((other, idx) =>
				<button className={'button-kind'} key={idx}>{other}</button>
			)}

		</div>) : (
			<div className={'menu-closed'}></div>
		)
	)
}

export default Categories