// import axios from "axios";
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import pizzaService from "../../features/pizzaService";
// import { Link, useLocation } from "react-router-dom";
// import './adminDataTableGeneral.css'


// import styled from 'styled-components'

// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';

  
// export default function adminDataTableGeneral() {

//     const [pizzas, setPizzas] = useState([]);

//     useEffect(()=>{
//         fetchPizzas();
//     }, []);

//     const fetchPizzas = () =>{
//         axios.get('http://localhost:5000/pizza').then((res) =>{
//             console.log(res.data.data);
//             setPizzas(res.data.data);
//             console.log(pizzas);
//         }).catch((err)=>{
//             console.log(err);
//         });
//     };

//     const columns = [
//         { field: 'id',
//           headerName: 'ID',
//           width: 90 
//         },
//         {
//           field: 'name',
//           headerName: 'Name',
//           width: 150,
//           editable: true,
//         },
//         {
//             field: 'description',
//             headerName: 'Description',
//             width: 200,
//             editable: true,
//         },
//         {
//             field: 'price',
//             headerName: 'Price',
//             width: 150,
//             editable: true,
//         },
//         {
//             field: 'rating',
//             headerName: 'Rating',
//             width: 150,
//             editable: true,
//         },
//         {
//             field: 'picture_link',
//             headerName: 'Picture link',
//             width: 350,
//             editable: true,
//         },
//     ];
      
//     return (
//         <div className='wholeGridDataDiv'>
//             <WholeGridDataGrid
//             >
//                 <Box sx={{ height: 400, width: '100%', background: '#ffffff' }}>
//                     <DataGrid
//                         rows= {pizzas}
//                         columns= {columns}
//                         pageSize={5}
//                         rowsPerPageOptions={[5]}
//                         checkboxSelection
//                         disableSelectionOnClick
//                         experimentalFeatures={{ newEditingApi: true }}
//                     />
//                 </Box>
//             </WholeGridDataGrid>
//         </div>
//     );
// }

// const WholeGridDataGrid = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
// // gap:1.5rem;
// // align-items: flex-start;
// justify-content: center;
// margin-top: 4rem;
// margin: 2% 5%;
// `
