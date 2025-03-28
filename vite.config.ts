import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rewriteSlashToIndexHtml = (): PluginOption => {
  return {
    name: 'rewrite-slash-to-index-html',
    apply: 'serve',
    enforce: 'post',
    configureServer(server: any) {
      server.middlewares.use('/', (req: any, _: any, next: any) => {
        if (req.url === '/') {
          req.url = '/index.html'
        }
        next()
      })
    },
  }
}


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    rewriteSlashToIndexHtml(),
  ],
  base: "/but-portfolio-tailwind/",
  build: {
    outDir: 'dist',
  },
  appType: 'mpa',
})