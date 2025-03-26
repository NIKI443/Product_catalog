import { ProductCartItem } from '~/components/shared/productCartItem'
import { Button } from '~/components/ui/button'
import { useProductStore } from '~/store/useProductStore'

export default function Cart() {
	const { carts } = useProductStore()
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-4 '>
			<div className='col-span-3 mr-10'>
				{carts.length === 0 ? (
					<h2 className='text-3xl font-semibold text-center text-gray-500'>
						Нет товаров
					</h2>
				) : (
					carts.map(cart => <ProductCartItem key={cart.id} product={cart} />)
				)}
			</div>
			<div>
				<h2 className='py-2  text-center text-3xl rounded-t-lg font-semibold bg-neutral-100'>
					ИТОГ
				</h2>
				<div className='p-2.5 pt-5 grid gap-3 border-2 border-t-transparent rounded-b-lg text-center'>
					{carts.map(cart => (
						<p key={cart.id} className='ml-6 text-left'>
							---{cart.title}
						</p>
					))}
					<div>
						<p className='text-xl'>Количество товаров: {carts.length}</p>
						<p className='text-xl'>
							Общая стоимость: $
							{carts.reduce((total, cart) => total + cart.price, 0).toFixed(2)}
						</p>
					</div>
					<Button className='w-full text-lg bg-purple-500 hover:bg-purple-400 cursor-pointer'>
						Купить
					</Button>
				</div>
			</div>
		</div>
	)
}
