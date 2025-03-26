import { useEffect } from 'react'
import { ProductItem } from '~/components/shared/productItem'
import { ProductItemSkeleton } from '~/components/shared/productItemSkeleton'
import { useProductStore } from '~/store/useProductStore'

export default function Home() {
	const {
		fetchProducts,
		products,
		filterProducts,
		isProductFilter,
		isProductFetch,
	} = useProductStore()

	useEffect(() => {
		fetchProducts()
	}, [fetchProducts])

	const FilterProducts =
		filterProducts.length > 0 || isProductFilter ? (
			!isProductFilter ? (
				filterProducts.map(product => (
					<ProductItem key={product.id} product={product} />
				))
			) : (
				<h2 className='w-full col-span-full text-center text-3xl'>
					Товар не найден
				</h2>
			)
		) : (
			products.map(product => (
				<ProductItem key={product.id} product={product} />
			))
		)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 '>
				{isProductFetch
					? FilterProducts
					: Array(8)
							.fill(null)
							.map((_, index) => <ProductItemSkeleton key={index} />)}
			</div>
		</div>
	)
}
