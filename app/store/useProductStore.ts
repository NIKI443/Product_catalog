import { create } from 'zustand'
import axios from '~/lib/axios'

interface ProductState {
	products: Product[]
	carts: Product[]
	filterProducts: Product[]
	categories: Category[]
	isProductFetch: boolean
	isProductFilter: boolean
}
interface ProductActions {
	fetchProducts: () => Promise<void>
	filterProduct: (value: string) => void
	searchProduct: (searchText: string) => void
	addProductCart: (product: Product) => void
	deleteProductCart: (product: number) => void
}

export const useProductStore = create<ProductState & ProductActions>()(
	(set, get) => ({
		products: [],
		carts: [],
		filterProducts: [],
		categories: [],
		isProductFetch: false,
		isProductFilter: false,
		fetchProducts: async () => {
			try {
				const res = await axios.get<Product[]>('/products')
			const products = res.data.map(product => ({
				...product,
				isCart: get().carts.some(cartItem => cartItem.id === product.id),
			}))
				const filterCategory = Array.from(
					new Set(res.data.map(product => product.category))
				).map(category => ({
					value: category,
					label: category.charAt(0).toUpperCase() + category.slice(1),
				}))

				set({
					products: products,
					categories: filterCategory,
					isProductFetch: true,
				})
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		},
		filterProduct: value => {
			const filterProducts = get().products.filter(
				product => product.category == value
			)
			set({
				filterProducts: filterProducts,
			})
		},
		searchProduct: searchText => {
			const filterProducts = get().products.filter(product => {
				if (product.title.toLowerCase().includes(searchText.toLowerCase())) {
					return product
				}
			})

			set({
				filterProducts: filterProducts,
				isProductFilter: filterProducts.length == 0,
			})
		},

		addProductCart: product => {
			const existingProduct = get().carts.filter(p => p.id !== product.id)
			set({ carts: [...existingProduct, product] })
		},

		deleteProductCart: productId => {
			set({ carts: get().carts.filter(p => p.id !== productId) })
		},
	})
)
