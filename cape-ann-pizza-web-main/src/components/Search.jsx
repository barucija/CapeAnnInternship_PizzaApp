import {useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Search() {

  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      navigate('/search/' + input)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
    <FormStyle onSubmit={submitHandler}>
      <div>
      <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Pronađi omiljenu pizza-u"/>
      </div>
    </FormStyle>
    </>
  )
}

const FormStyle = styled.form`
    text-align:center;
    div{
      width: 100%;
    }

    input{
          font-size: 1.5rem;
          padding: 1rem 3rem;
          border-radius: 1rem;
          outline: none;
          width: 100%
          color: white;      
    }
`

export default Search