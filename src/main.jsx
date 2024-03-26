import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dpd from './pages/Dpd.jsx';
import Card from './components/Card.jsx';
import Dpr from './pages/Dpr.jsx';
import ErrorElem from './components/ErrorElem.jsx';
import DprdProv from './pages/Dprd.jsx';
import DprdKab from './pages/DprdKab.jsx';
import { getDataDpdList, getDataDprList, getDataDprdKabList, getDataDprdList } from './api.js';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <ErrorElem/>,
    children: [
      {
        path:'dpd',
        element:<Dpd/>,
          children:[
            {
              path:'dapil/:id',
              loader: async ({params}) => {
                const data = await getDataDpdList(params.id);
                return {data}
              },
              element:<Card/>
            }
          ]
      },
      {
        path:'dpr-ri',
        element:<Dpr/>,
        children:[
        {
          path:'dapil/:id',
          loader: async ({params}) => {
            const data = await getDataDprList(params.id);
            return {data}
          },
          element:<Card/>
        }
      ]
      },
      {
        path:'dprd-provinsi',
        element:<DprdProv/>,
        children:[
          {
            path:'dapil/:id',
            loader: async ({params}) => {
              const data = await getDataDprdList(params.id);
              return {data}
            },
            element:<Card/>
          }
        ]
      },
      {
        path:'dprd-kabupaten-kota',
        element:<DprdKab/>,
        children:[
        {
          path:'dapil/:id',
          loader: async ({params}) => {
            const data = await getDataDprdKabList(params.id);
            return {data}
          },
          element:<Card/>
        }
      ]
      },

    ]  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
