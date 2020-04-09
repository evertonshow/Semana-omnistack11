import React ,{useState}from 'react'
import{Link,useHistory }from 'react-router-dom'
import{FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import'./register.css'

import logoimg from '../../assets/logo.svg'
 
export default function Register() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[whatsapp,setWhatsapp]=useState('')
    const[city,setCity]=useState('')
    const[uf,setUf]=useState('')

    const history = useHistory()

    async function handleRegister(e){
    e.preventDefault()

    const data ={
        name,
        email,
        whatsapp,
        city,
        uf,
    }
    try{
   const res = await api.post('ongs',data)
    alert(`Seu Id de acesso ${res.data.id}`)
    history.push('/')
    }catch(err){
        alert('Erro no cadastro,tente novamente.')
    }
}

    return (
<div className="register-container">
    <div className="content">
        <section>
        <img src={logoimg} alt="Be The Hero"/>
        
        <h1>Cadastro</h1>
<p>Faça seu cadastro,entre na plataforma e ajude pessoas encontrarem os casos da sua ONG.</p>

<Link className='black-link' to="/">
            <FiArrowLeft size={16} color={'e02041'}/>
             tenho cadastro
            </Link>
        </section>

        <form  onSubmit={handleRegister}>

        <input type="text" 
        placeholder='Digite sua ONG'
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <input type="email" 
        placeholder='e-mail'
         value={email}
         onChange={e => setEmail(e.target.value)}
         />

        <input  placeholder='whatsapp'
         value={whatsapp}
         onChange={e => setWhatsapp(e.target.value)}
        />

        <div className="input-group">

            <input placeholder='cidade'
             value={city}
             onChange={e => setCity(e.target.value)}
            />
            <input placeholder='uf'
             style={{width:80}}
             value={uf}
             onChange={e => setUf(e.target.value)}
            />
        </div>

        <button type="submit" className='button'>Cadastrar</button>
        </form>
    </div>
</div>    )
}