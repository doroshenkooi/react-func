import { ShopItemFunc } from './fanc'
import './App.css'

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£',
    basket: 'добавить в корзину'
  }
  return (
    <>
    <ShopItemFunc item={item}/>
    </>
  )
}

export default App
