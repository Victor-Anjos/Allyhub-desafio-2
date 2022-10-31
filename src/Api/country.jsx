import axios from "axios"
import { useEffect, useState } from "react"

//Consumindo a API - para o Select -> Paises

const UseCountry= () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/country")
        .then((response) => {setCountries(response.data)})
    }, [])

    return ({countries})

}

export default UseCountry