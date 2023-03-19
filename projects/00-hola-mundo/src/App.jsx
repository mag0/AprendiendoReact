import './App.css'
import Header from './components/Header'
import Section from './components/section'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Segunda from './pages/Segunda'
import Tercera from './pages/Tercera'


export function App(){
  return( 
    <div className='container'>
      <Header />
      <main>
        <section>
          <Routes>
            <Route path='/' element={<Section pagina='Esta es la primer pagina'></Section>} ></Route>
            <Route path='/segunda-seccion' element={<Segunda></Segunda>} ></Route>
            <Route path='/tercera-seccion' element={<Tercera></Tercera>} ></Route>
          </Routes>
        </section>
      </main>
      <Footer />
    </div>
  )
}