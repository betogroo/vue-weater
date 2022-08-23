import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    Components({
      dirs: [
        path.resolve(__dirname, 'src/components/app'),
        path.resolve(__dirname, 'src/components/overlay')
      ],
      dts: path.resolve(__dirname, '@types/components.d.ts')
    })
  ]
})
