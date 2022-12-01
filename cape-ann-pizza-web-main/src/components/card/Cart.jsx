import React, { useEffect, useState } from 'react'
import {  Link } from 'react-router-dom'
import {toast} from 'react-toastify'
import {deletePizza, updatePizza, reset} from '../../features/pizzaSlice'
import {AiFillCloseCircle} from 'react-icons/ai'
import {BiEdit} from 'react-icons/bi'
import {useSelector, useDispatch} from 'react-redux'
import './cart.css'
import Modal from 'react-modal'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const customStyles = {
  overlay:{
    background: 'rgba(0,0,0,0.5)',
  },
  content: {
    borderRadius: '2rem',
    width: '800px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
    backgroundColor: '#272629',
  },
  
}


Modal.setAppElement('#root')


function Cart({pizza}) {

  const {isError, isSuccess, message} = useSelector((state)=>state.pizzas)

  const [quantity, setQuantity] = useState(1)
  const [modalisOpen, setModalIsOpen] = useState(false)

  const dispatch = useDispatch()
  const handleDelete =  (id) =>{
    dispatch(deletePizza(id))
    toast.success('Pizza deleted')
  }



  
  const formik = useFormik({
    initialValues: {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      description: pizza.description,
      category:pizza.category,
      ingredients: pizza.ingredients,
      rating: pizza.rating,
      picture: pizza.picture
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required"),
        price: Yup.number().required("Required").min(1, "Price must be higher then 0."),
        description: Yup.string().required("Required"),
        category: Yup.string().required("Required"),
        ingredients: Yup.string().required("Required"),
        rating: Yup.number().required("Required").min(1, "Rating must be higher then 0.").max(5, "Rating can't be higher then 5."),
        picture: Yup.string().required("Required"),
    }),
    onSubmit: (values, {resetForm}) => {

      dispatch(updatePizza(values))
      resetForm({values: formik.initialValues})

      if(isError){
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT
      })
      }
  
      if(isSuccess){
        dispatch(reset())
          toast.success('Pizza is edited!', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
      dispatch(reset())
    }
  
  })

// Open/close modal
const openModal = () => setModalIsOpen(true)
const closeModal = () => setModalIsOpen(false)



  return (
    <>   
      <div className="box">
      
        <div onClick={() =>  handleDelete(pizza.id)} className='delete-pizza'> <AiFillCloseCircle /> </div>
        <div onClick={openModal}  className='edit-pizza'> <BiEdit /> </div>
        <Link to={`/pizza/${pizza.id}`}>
        <div className="price">$ <span> {pizza.price} </span> </div>
        <img src={pizza.picture} alt={pizza.name} />
        <div className="name"> {pizza.name} </div>
        </Link>
        <form>
          <input min={1} max={100} className='quanity' type="number" id='quantity' name='quanity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
          <button className='btn' type='submit' >Add to card</button>
        </form>
      </div>

      <Modal isOpen={modalisOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Edit pizza'>
        <div onClick={closeModal} className="close-pizza-modal"><AiFillCloseCircle /></div>

        <form onSubmit={formik.handleSubmit} className='add-pizza-form'>
      <div className="container">
      <h1>Edit Pizza</h1>

      <ul>

        <li>
          <label>Name</label>
          <input 
        type="text" 
        placeholder='Name'
        value={formik.values.name}
        onChange={formik.handleChange}
        id="name"
        name="name"
        onBlur={formik.handleBlur}
        />
        {formik.errors.name ? <p className='error'> {formik.errors.name} </p> : ''}
        </li>
        <li>
        <label>Price</label>
        <input 
        type="number" 
        min={1}
        step="any"
        placeholder='Price'
        value={formik.values.price}
        onChange={formik.handleChange}
        id="price"
        name="price"
        onBlur={formik.handleBlur}
        />
        {formik.errors.price ? <p className='error'> {formik.errors.price} </p> : ''}
        </li>
        <li>
        <label>Ingriditents</label>
          <input 
        type="text" 
        placeholder='Ingriditents (Please split words with comma)'
        value={formik.values.ingredients}
        onChange={formik.handleChange}
        id="ingredients"
        name="ingredients"
        onBlur={formik.handleBlur}
        />
        {formik.errors.ingredients ? <p className='error'> {formik.errors.ingredients} </p> : ''}
        </li>
        <li>
        <label>Rating</label>
        <input 
        type="number" 
        min={1}
        max={5}
        step="any"
        placeholder='Rating'
        value={formik.values.rating}
        onChange={formik.handleChange}
        id="rating"
        name="rating"
        onBlur={formik.handleBlur}
        />
        {formik.errors.rating? <p className='error'> {formik.errors.rating} </p> : ''}
        </li>
        <li>
        <label>Description</label>
          <textarea 
          name="description" 
          id="description" 
          value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder='Description'
          ></textarea>
          {formik.errors.description ? <p className='error'> {formik.errors.description} </p> : ''}
        </li>
        <li>
        <label>Picture link</label>
          <input 
        type="text" 
        placeholder='Picture Link'
        value={formik.values.picture}
        onChange={formik.handleChange}
        id="picture"
        name="picture"
        onBlur={formik.handleBlur}
        />
        {formik.errors.picture ? <p className='error'> {formik.errors.picture} </p> : ''}
        </li>
        <li>
        <label>Category</label>
        <select 
        name="category" 
        id="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        >
          <option disabled defaultValue>--Please Choose category--</option>
          <option value="Veg">Vegetarian</option>
          <option  value="Non-Veg">Non-Vegetarian</option>
        </select>
        {formik.errors.category ? <p className='error'> {formik.errors.category} </p> : ''}
        </li>

        <li>
          <button>Edit</button>
        </li>
      </ul>
      </div>
       
       </form>

      </Modal>  
 
    </>
  )
}


export default Cart