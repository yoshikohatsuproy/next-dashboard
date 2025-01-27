import { Metadata } from "next"
import { CartCounter } from "@/shopping-cart/components/CartCounter";

 
 export const metadata: Metadata = {
     title: 'Counter title', description: 'Counter description'
 }
 
 
 


export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos en el carrito de compras</span>
      
      <CartCounter value={10} />
    </div>
  );
}