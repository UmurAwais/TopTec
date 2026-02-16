import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AirFilters from './pages/categories/air-filters/index.jsx'
import AirCleaning from './pages/categories/air-cleaning/index.jsx'
import LaboratoryFurniture from './pages/categories/laboratory-furniture/index.jsx'
import ProductionMachinery from './pages/categories/production-machinery/index.jsx'
import LaboratoryEquipment from './pages/categories/laboratory-equipment/index.jsx'
import SterileProcessing from './pages/categories/sterile-processing/index.jsx'
import HVACSystems from './pages/categories/hvac-systems/index.jsx'

import ProductPage from './pages/ProductPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:slug",
        element: <ProductPage />,
      },
      {
        path: "categories",
        children: [
          { path: "air-filters", element: <AirFilters /> },
          { path: "air-cleaning", element: <AirCleaning /> },
          { path: "laboratory-furniture", element: <LaboratoryFurniture /> },
          { path: "production-machinery", element: <ProductionMachinery /> },
          { path: "laboratory-equipment", element: <LaboratoryEquipment /> },
          { path: "sterile-processing", element: <SterileProcessing /> },
          { path: "hvac-systems", element: <HVACSystems /> },
        ]
      },
      // Add more nested routes here
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
