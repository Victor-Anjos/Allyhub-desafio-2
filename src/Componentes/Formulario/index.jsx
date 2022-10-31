import { useState } from "react";
import Select from "react-select";

import UseCountries from "../../Api/country";
import UseCities from "../../Api/city";

import './formulario.css'

const Formulario = () => {

  //Valores do Input
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  //Coloca os países dentro das opções do select
  const { countries } = UseCountries();
  const CountriesOptions = countries.map((country) => ({
    value: country.code,
    label: country.name
  }))

  //Coloca os países dentro das opções do select
  const { cities } = UseCities();
  const CitiesOptions = cities.map((city) => ({
    value: city.id,
    label: city.name
  }))

  //Função utilizada quando o submit é pressionado
  const handleSubmit = (e) => {
    e.preventDefault()

    //Reseta os valores do input
    setNome("");
    setEmail("");
    setTelefone("");
    setCpf("");
  }

  return (

    <div className='formulario__content'>

      <form action="" className='formulario' onSubmit={handleSubmit}>

        <h2 className='formulario__subtitle'>Dados Pessoais</h2>

        <label htmlFor="">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder='Digite o seu nome...'
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Digite o seu email...'
        />

        <label htmlFor="">Telefone</label>
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          placeholder='Digite o seu telefone...'
        />

        <label htmlFor="">CPF</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
          placeholder='Digite o seu CPF...'

        />

        <h2 className='formulario__subtitle'>Dados Pessoais</h2>

        <Select
          className="formulario__select"
          options={CountriesOptions}
          isMulti
          required
          placeholder="Selecione o país"
        />

        <Select
          className="formulario__select"
          options={CitiesOptions}
          isMulti
          required
          placeholder="Selecione a cidade"
        />

        <button type='submit'>Enviar</button>

      </form>

    </div>

  )

}

export default Formulario