import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The repository is a GitHub user site (guilred.github.io), so it is served
// from the domain root. Change this to '/repository-name/' only if the site
// ever moves to a project page.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
