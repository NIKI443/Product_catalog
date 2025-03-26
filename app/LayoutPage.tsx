import type { Route } from './+types/LayoutPage'
import { Outlet } from 'react-router'
import { SidebarMenu } from './components/shared/sidebarMenu'

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Product catalog' },
		{ name: 'description', content: 'Welcome to React Router!' },
	]
}
export default function LayoutPage() {
	return (
		<>
			<SidebarMenu />
			<Outlet />
		</>
	)
}
