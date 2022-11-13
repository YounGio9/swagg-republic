import React from 'react';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { useState, useEffect } from 'react';
import Categories from "./Categories";
import {plantList} from "../datas/plantList";
import Search from "./Search";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ArticleDetails from "./ArticleDetails";

function App() {

	const [cartState, setCartState] = useState(false)
	const [menuState, setMenuState] = useState(false)
	const [activeCategory, setActiveCategory] = useState('')
	const [searchState, setSearchState] = useState(false)
	const [searching, setSearching] = useState([])

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	const savedArticle = sessionStorage.getItem('article')
	const [article, setArticle] = useState(savedArticle ? JSON.parse(savedArticle) : {})
  	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
		sessionStorage.setItem('article', JSON.stringify(article))
	}, [cart, article])


	const Nav = () => (
		<Banner
			cartState={cartState}
			setCartState={setCartState}
			menuState={menuState}
			setMenuState={setMenuState}
			searchState={searchState}
			setSearchState={setSearchState}
			setActiveCategory={setActiveCategory}
			setSearching={setSearching}
			cart={cart}
		/>
	)

	console.log(article)
  return (
	  <Router>
  			<React.Fragment>

  <div className='layout-inner'>
	  <Categories
		  categories={categories}
		  setActiveCategory={setActiveCategory}
		  activeCategory={activeCategory}
		  setMenuState={setMenuState}
		  menuState={menuState}
		  searchState={searchState}
		  setSearchState={setSearchState}
	  />
	  <Search
		  searchState={searchState}
		  setSearchState={setSearchState}
		  setActiveCategory={setActiveCategory}
		  searching={searching}
		  setSearching={setSearching}
	  />

	 			<div style={{
					 position: "relative",
						overflowY: menuState || cartState ? 'hidden' : 'visible',
					 	width: '100%',
						transform: `translateX(-${cartState ? 300 : 0}px)`,
						transition: '0.7s',
				 }}>

					<Nav />
						<Routes>
							<Route exact path="/swagg-republic" element={
								<ShoppingList
									activeCategory={activeCategory}
									searching={searching}
									setArticle={setArticle}
								/>
							} />
							<Route path={"/shop/:name"} element={
								<ArticleDetails
									article={article}
									cart={cart}
									updateCart={updateCart}/>
							} />
						</Routes>
					<Footer />

				</div>
	  <Cart
		  cart={cart}
		  updateCart={updateCart}
		  cartState={cartState}
		  setCartState={setCartState}
	  />
  </div>																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																							
			</React.Fragment>
	  </Router>
	  );
}
export default App;
