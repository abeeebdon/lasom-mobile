import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import { Product } from '../types/global'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { app } from '../config'

// Define the context and initial types
interface AppContextType {
  products: Product[] | undefined
  setProducts: (products: Product[] | undefined) => void
  getData: () => Promise<Product[] | undefined>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>()
  const db = getFirestore(app)

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const productArray: Product[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, 'id'>), // Type assertion for the data structure
    }))
    setProducts(productArray)
    return productArray
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AppContext.Provider value={{ products, setProducts, getData }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
