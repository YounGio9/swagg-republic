import { plantList, carrouselImages } from '../datas/plantList'
import {Swiper, SwiperSlide} from 'swiper/react'
import  SwiperCore, {Navigation, Thumbs, Pagination, Scrollbar, EffectFade } from 'swiper'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'
import 'swiper/css/bundle'

SwiperCore.use([Navigation, Pagination, Scrollbar, Thumbs, EffectFade])

function ShoppingList({ activeCategory, searching,  setArticle }) {

	return (
		<div className='shopping-list'>
			<Swiper
				style={{
					display: !searching.length && activeCategory === '' ? 'block' : 'none',
				}}

			id='swiper-container'
			tag='section'
			wrapperTag='ul'
			slidesPerView={ window.matchMedia("(max-width: 700px)").matches ? 1 : 2 }
			spaceBetween={10}
			pagination={{ clickable: true }}
			>
			{carrouselImages.map((img, idx ) =>
					<SwiperSlide style={{listStyle:'none'}} key={`${idx}`} tag='li' >
						<img className='carrousselImg' src={img.cover}   alt={`${img.name}`} />
					</SwiperSlide>
				)}
			</Swiper>
			<span style={{
				margin: '30px 0 10px 0',
				display: !activeCategory ? 'none' : 'block',
				fontWeight: "bold",
				textAlign: "center",
				fontSize: '1.6em'

			}}>{activeCategory}</span>
			<ul className='plant-list'>
				{plantList.map(({ color, gallery, cover, size, id, name, price, category }) =>
					!activeCategory || activeCategory === category ||
						activeCategory === 'Magasin' || searching.includes(category) ? (
						<div className='plant-info-container' key={id}>
							<PlantItem
								name={name}
								cover={cover}
								gallery={gallery}
								color={color}
								price={price}
								setArticle={setArticle}
								size={size}
							/>

						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList