import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/components/ImageMagnifier/**/*.ts', 'src/components/ImageMagnifier/**/*.vue'],
      exclude: ['node_modules'],
      // 关键：指定类型入口
      entryRoot: 'src/components/ImageMagnifier',
      outDir: 'dist/types',
      // 修复深层类型导出
      copyDtsFiles: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/ImageMagnifier/index.ts'), // 指向您的入口文件
      name: 'VueImageMagnifier',
      formats: ['es', 'umd'], // 输出两种模块格式
      fileName: (format) => `vue-image-magnifier.${format}.js`
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue' // UMD模式全局变量名
        },
        exports: "named"
      }
    },
    minify: 'terser', // 开启压缩
    terserOptions: {
      compress: {
        defaults: true, // 激活完整压缩
        drop_console: true // 可选：移除 console
      },
      format: {
        comments: false // 移除所有注释
      }
    },
    sourcemap: false // 生成sourcemap
  }

})

