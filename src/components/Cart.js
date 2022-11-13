import { useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart, cartState, setCartState }) {
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	let widget = window.FedaPay.init({
		public_key: 'pk_live_jPmPYgnXz9wJqf1liUr5fZtF',
		transaction: {
			amount: 100,
			description: 'valider mon panier'
		},
		customer: {
			email: 'john.doe@gmail.com',
			lastname: 'Doe',
			firstname: 'John'
		}
	})

	useEffect(() => {
		document.title = `SR: ${total}F d'achats`
	}, [total])
	
	return cartState ? (
		<div className='cart'>
			<button
				className='cart-toggle-button'
				onClick={() => setCartState(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul className='articles'>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}F x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}F</h3>
					<div style={{
						display: "grid",
						gap: 20,
						height: 100,
						width: '100%',
						alignContent: 'center',
					}}>
						<button id={'pay-btn'} className='vider-panier' onClick={() => updateCart([])}>
							Vider le panier
						</button>
						<button  style={{color: 'white'}} onClick={() => {
							widget.open()
						}} className={'valider-panier'}>
							valider
						</button>
					</div>

				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='cart-closed'>

		</div>
	)
}

export default Cart