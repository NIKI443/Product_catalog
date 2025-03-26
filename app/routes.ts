import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
	route('', 'LayoutPage.tsx', [
		index('routes/home.tsx'),
		route('cart', 'routes/cart.tsx'),
	]),
] satisfies RouteConfig
