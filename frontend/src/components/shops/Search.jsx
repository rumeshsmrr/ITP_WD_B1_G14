import { useState , useEffect } from "react";
import axios from "axios";
import './Search.css'

const Search = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async() => {
        const {data} = await axios.get("http://localhost:8070/api/products/")
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    } , [])

    const searchHandle = async (event) => {

        let key = event.target.value
        if(key){
            let result = await fetch(`/api/products/search/${key}`)
            result = await result.json()
            if(result){
                setProducts(result)
            }
    
        }else{
            getProducts()
        }
    }

    return(

    <form onChange={searchHandle} className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required />
            <button className="search-btn" type="submit"></button>
            
    </form>
    )

}

export default Search

