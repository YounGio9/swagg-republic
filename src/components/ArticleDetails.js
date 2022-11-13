import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, Navigation} from "swiper";
import '../styles/ArticleDetails.css'
function ArticleDetails({article, cart, updateCart}) {
    function addToCart(name, price) {
        const currentArticleSaved = cart.find((plant) => plant.name === name)
        if (currentArticleSaved) {
            const cartFilteredCurrentArticle = cart.filter(
                (article) => article.name !== name
            )
            updateCart([
                ...cartFilteredCurrentArticle,
                { name, price, amount: currentArticleSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }


    return (
        <div className={'article-details'}>

            <Swiper
                modules={[Navigation, EffectFade]}
                className='item-gallery-swiper'
                tag='section'
                wrapperTag='ul'
                spaceBetween={5}
                effect='fade'
                draggable={"false"}
                pagination={{clickable: true}}
            >
                {article.gallery.map((cover, idx) =>
                    <SwiperSlide style={{listStyle:'none'}} key={idx} tag='li'>
                        <img  className='article-details-img' src={cover} alt={`${article.name} cover`} />
                    </SwiperSlide>
                )}
            </Swiper>
            <div className={'article-details-second'}>
                <div className={'article-infos-details'}>
                    <span className={'article-details-name'}>{article.name}</span>
                    <span className='article-details-price'>{article.price}F</span>
                </div>
                <div className={'article-sizes'}>
                    <span>size</span>
                    <ul>
                        {article.size.map((size, idx )=>
                            <li key={idx}>{size}</li>
                        )}
                    </ul>
                </div>
                <div className={'article-color'}>
                    <span>color</span>
                    <span style={{fontWeight: "bold"}}>{article.color}</span>
                </div>
                <button className='add-article-button' onClick={() => {
                    addToCart(article.name, article.price)
                    window.alert('article ajouté au panier')
                }
                }
                >Ajouter au panier</button>
            </div>

        </div>
    )
}

export default ArticleDetails