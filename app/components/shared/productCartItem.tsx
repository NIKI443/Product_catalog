import { Trash2 } from 'lucide-react'
import React from 'react'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'
import { useProductStore } from '~/store/useProductStore'

interface Props {
	product: Product
	className?: string
}

export const ProductCartItem: React.FC<Props> = ({ product, className }) => {
	const { deleteProductCart } = useProductStore()
	return (
		<div
			className={cn(
				'border-2 mb-3 flex justify-between border-purple-500 rounded-2xl p-3',
				className
			)}
		>
			<div className='mx-auto w-2xl text-center'>
				<div className='w-full h-45 mb-3 rounded-2xl flex items-center justify-center overflow-hidden'>
					<img
						src={product.image}
						alt={product.title}
						className='w-9/10 h-full object-contain'
					/>
				</div>

				<h2 className='font-semibold'>{product.title}</h2>
				<p className='mt-1 text-sm mb-3'>{product.description}</p>
				<p className='mt-1'>${product.price}</p>
			</div>
			<Button
				onClick={() => {
					deleteProductCart(product.id)
					product.isCart = false
				}}
				className='w-min py-5 group mt-2 bg-transparent hover:bg-purple-300 cursor-pointer shadow-none'
			>
				<Trash2 className='size-6 shrink-0 group-hover:stroke-white stroke-gray-700 duration-150' />
			</Button>
		</div>
	)
}
