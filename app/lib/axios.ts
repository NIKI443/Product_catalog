import axios from 'axios'

const axiosInstance = axios.create({
	baseURL:
		import.meta.env.VITE_REACT_APP_BACKEND_URI || 'https://fakestoreapi.com',
})

export default axiosInstance
