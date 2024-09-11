import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': {
				target: process.env.VITE_API_URL,
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
			// '/:shortUrl': {
			// 	target: process.env.VITE_API_URL,
			// 	changeOrigin: true,
			// 	bypass: req => {
			// 		if (req?.url?.startsWith('/api')) {
			// 			return req.url;
			// 		}
			// 	},
			// },
		},
	},
});
