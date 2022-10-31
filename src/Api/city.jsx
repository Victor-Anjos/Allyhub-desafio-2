import axios from "axios"
import { useEffect, useState } from "react"

//Consumindo a API - para o Select -> Cidades


const UseCities = () => {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/city")
        .then((response) => {setCities(response.data)})
    }, [])

    return ({cities})

}

export default UseCities