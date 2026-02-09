import { createContext, useContext, useEffect, useState } from 'react'
import { getAllProducts } from '../services/api'

const ProductContext = createContext()

export function ProductProvider({ children }){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    let mounted = true
    getAllProducts()
      .then(data => { if(mounted) setProducts(data || []) })
      .catch(err => err && setError(err.message))
      .finally(()=> mounted && setLoading(false))
    return ()=> mounted = false
  },[])

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts(){
  return useContext(ProductContext)
}
