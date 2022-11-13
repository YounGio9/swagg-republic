import {useState} from "react";
import './../styles/Search.css'
import {plantList} from "../datas/plantList";
import {Link} from "react-router-dom";
function Search ({searchState, setSearchState, setActiveCategory, searching, setSearching}) {


    const [recherche, setRecherche] = useState('')
    const handleBlur = () => {
        const s = plantList.filter(article =>
            article.category.toLowerCase().includes(recherche.toLowerCase()) ||
            recherche.toLowerCase().includes(article.category.toLowerCase()) ||
            article.name.toLowerCase().includes(recherche.toLowerCase())

        ).reduce((acc, article) =>
            acc.includes(article.category) ? acc : acc.concat(article.category), []
            )
        if(recherche.length === 0) {
            setActiveCategory('')
            setSearching([])
        }
        else {
            setSearching(s)
            if(s.length === 0)
                setActiveCategory('Not found')
            else
                setActiveCategory(recherche)

        }


        console.log(searching)

        setSearchState(false)


    }
    const handleReset = (e) => {
        if(e.target.tagName === 'DIV')
            setSearchState(false)
    }
    const handleChange = (e) => {
        setRecherche(e.target.value)
    }
    return (searchState ? (
     <Link to={'/swagg-republic'}>

   X  <div className={'search'} onClick={handleReset}>
            <div className={'search-container'}>
                <label style={{color: "black"}}> Que voulez vous ?</label>
                <input
                    className={'search-input'}
                    value={recherche}
                    type={'text'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={'Entrez un mot'}
                />
            </div>
        </div>
     </Link>
    ) : (
            <div className={'search-close'}></div>
        )
    )
}

export default Search