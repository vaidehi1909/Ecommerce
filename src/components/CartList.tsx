"use client"
import { useCartList } from "@/hooks/useCartList"
import { CartProduct } from "@/types/product"

const CartList = () => {
  const { cartList } = useCartList()
  return (
    <>{cartList.map((item: CartProduct) => <li key={item.id}>{item.title}  Quantity - {item.quantity}</li>)}</>
  )
}

export default CartList
