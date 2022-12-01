import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './addPizza.css'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {createPizza, reset} from '../../features/pizzaSlice'





function AddPizza() {

  const {isError, isSuccess, message} = useSelector((state)=>state.pizzas)
  const dispatch = useDispatch()


  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      description: "",
      category: "--Please Choose category--",
      ingredients: "",
      rating: 0,
      picture: ""
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

      dispatch(createPizza(values))
      resetForm({values: formik.initialValues})

      if(isError){
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT
      })
      }
  
      if(isSuccess){
        dispatch(reset())
          toast.success('Pizza is added!', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
      dispatch(reset())
    }
  
  })

  return (
    <>
    
    <form onSubmit={formik.handleSubmit} className='add-pizza-form'>
      <div className="container">
      <h1>Add New Pizza</h1>

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
          <button>Submit</button>
        </li>
      </ul>

      

      </div>
       
    </form>

    </>
  )
}

export default AddPizza