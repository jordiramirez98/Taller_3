import { HashRouter, Routes, Route } from 'react-router-dom'

// Layout
import { Header } from './features/layout/components/Header'
import { Content } from './features/layout/components/Content'
import { Footer } from './features/layout/components/Footer'

// Auth
import { Myaccount } from './features/auth/components/Myaccount'
import { Mybuys } from './features/auth/components/Mybuys'
import { Myfavorites } from './features/auth/components/Myfavorites'
import { Mycart } from './features/auth/components/Mycart'

// View
import { Article } from './features/view/Components/Article'
import { Offers } from './features/view/Components/Offers'

// Context
import { ShopProvider } from './features/view/hooks/useContext1'

function App() {

  return (

    <ShopProvider>

      <HashRouter>

        <Header />

        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/articles' element={<Article />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/myaccount' element={<Myaccount />} />
          <Route path='/mybuys' element={<Mybuys />} />
          <Route path='/myfavorites' element={<Myfavorites />} />
          <Route path='/cart' element={<Mycart />} />
        </Routes>

        <Footer />

      </HashRouter>

    </ShopProvider>

  )
}

export default App