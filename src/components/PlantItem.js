import '../styles/PlantItem.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import  {Navigation, EffectFade } from 'swiper'
import 'swiper/css/bundle'
import {Link} from "react-router-dom";
/*function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}*/

function PlantItem({ cover, gallery, name, color, price,  setArticle, size }) {
	return (
		<Link to={`/shop/${name}`} style={{textDecoration: 'none'}} onClick={() => {
			setArticle({
			cover: cover,
			gallery: gallery,
			name: name,
			price: price,
			color: color,
			size: size
		})

		}}>
			<button className='article-item' >
				<Swiper
					modules={[Navigation, EffectFade]}
					className='item-gallery-swiper'
					tag='section'
					wrapperTag='ul'
					spaceBetween={5}
					effect='fade'
					draggable={"false"}
				>
					{cover.map((cover, idx) =>
						<SwiperSlide style={{listStyle:'none'}} key={idx} tag='li'>
							<img  className='plant-item-cover' src={cover} alt={`${name} cover`} />
						</SwiperSlide>
					)}
				</Swiper>
				<div className={'article-infos'}>
					<span id={'article-name'}>{name}</span>
					<span className='plant-item-price'>{price}F</span>
				</div>
			</button>
		</Link>

	)
}

export default PlantItem