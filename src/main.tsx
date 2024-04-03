import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import ContactNav from './presentation/UI/Components/ContactNav'
import App from './presentation/Routers/router'
import { QueryClientProvider, QueryClient } from 'react-query'
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ContactNav /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
