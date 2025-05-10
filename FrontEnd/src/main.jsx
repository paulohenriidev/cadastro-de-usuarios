import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyled } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </StrictMode>
)
