import { createContext,   useReducer } from "react";
import { initialState, productsReducer } from "../ProductsReducer/ProductsReducer";


const ProductContext = createContext();


export const MainContextProvider = ({children}) =>{
  console.log(children)
    const [state,dispatch] = useReducer(productsReducer,initialState);
   
      return (
        <ProductContext.Provider value={{state,dispatch}}>
            {children}
        </ProductContext.Provider>
      )
    }

    export {ProductContext}