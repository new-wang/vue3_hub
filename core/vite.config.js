import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

function _resolve(dir){
  return path.resolve(__dirname,dir);
}

// https://vitejs.dev/config/
export default ( { mode } ) => {
  const urlVariable = loadEnv(mode,process.cwd())['VITE_BASE_API']

  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath:'mock',
        supportTs: false,
        localEnabled:true
      })
    ],
    resolve: {
      alias: {
        '@': _resolve( 'src' ),
        'comps': _resolve( 'src/components' ),
        'plugin': _resolve( 'src/plugins' ),
        'views': _resolve( 'src/views' ),
        'styles': _resolve( 'src/styles' ),
        'config': _resolve( 'config'),
        'apis': _resolve( 'src/apis' ),
        'layouts': _resolve( 'layouts' ),
        'utils': _resolve( 'src/utils' )
      }
    },
    server:{
      proxy: {
        '/api': {
          target: `http://${urlVariable}:7001`,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
