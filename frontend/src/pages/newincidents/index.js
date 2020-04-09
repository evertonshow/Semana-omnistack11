import React,{useState} from 'react'
import{Link ,useHistory} from 'react-router-dom'
import{FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

import'./incidents.css'
import logoimg from '../../assets/logo.svg'

export default function Newincidents(){
const [title,setTitle] = useState('')
const [description,setDescription] = useState('')
const [value,setvalue] = useState('')

const ongId = localStorage.getItem('ongId')

const history = useHistory()

   async function handleNewincident(e){
        e.preventDefault()
    
    const data = {
        title,
        description,
        value
    }
    try {
        await api.post('incidents',data,{
            headers:{
                Authorization : ongId,
             }
        })
        history.push('/profile')

    } catch (error) {
        alert('Erro no cadastro do seu caso, tente novamente.')
    }
   }
    return (
        <div className="new-incidents">
    <div className="content">
        <section>
        <img src={logoimg} alt="Be The Hero"/>
        
        <h1>Cadastrar Novo Caso</h1>
<p>Descreva o caso detalhamente para encontrar um herói para resolver</p>

<Link className='black-link' to="/profile">
            <FiArrowLeft size={16} color={'e02041'}/>
             Voltar Para Home
            </Link>
        </section>

        <form  onSubmit={handleNewincident}>
        <input 
          placeholder='Titulo do caso'
          value={title}
          onChange = {e => setTitle(e.target.value)}
          />
        <textarea 
          placeholder='Descrição'
          value={description}
          onChange = {e => setDescription(e.target.value)}
          />
        <input  
          placeholder='Valor em reais'
          value={value}
          onChange = {e => setvalue(e.target.value)}
          />

        <button type="submit" className='button'>Cadastrar</button>
        </form>
    </div>
</div>  
    )
}