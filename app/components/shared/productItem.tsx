import React from 'react'
import { Button } from '~/components/ui/button'
import { useProductStore } from '~/store/useProductStore'

interface Props {
	product: Product
}

export const ProductItem: React.FC<Props> = ({ product }) => {
	const { addProductCart, deleteProductCart } = useProductStore()
	return (
		<div className='border-2 border-purple-500 rounded-2xl p-3 cursor-pointer hover:shadow-violet-200 hover:shadow-lg'>
			<div className='w-full h-45 mb-3 rounded-2xl flex items-center justify-center overflow-hidden'>
				<img
					src={product.image}
					alt={product.title}
					className='w-9/10 h-full object-contain'
				/>
			</div>
			<h2 className='line-clamp-1 font-semibold'>{product.title}</h2>
			<p className='mt-1 text-sm'>${product.price}</p>
			{product.isCart ? (
				<div>
					<Button
						onClick={e => {
							deleteProductCart(product.id)
							product.isCart = false
						}}
						className='w-full mt-2 bg-purple-300  hover:bg-purple-200 cursor-pointer'
					>
						Удалить из корзины
					</Button>
				</div>
			) : (
				<Button
					onClick={e => {
						e.preventDefault()
						addProductCart(product)
						product.isCart = true
					}}
					className='w-full mt-2 bg-purple-400  hover:bg-purple-300 cursor-pointer'
				>
					Добавить в корзину
				</Button>
			)}
		</div>
	)
}
