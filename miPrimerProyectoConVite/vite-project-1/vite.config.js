import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig(({command, mode})=>{
    const port = 3000

    console.log(command, mode)
    const env = loadEnv(mode, process.cwd())
    console.log(env)
    if (mode === "development"){
        console.log('modo desarrollo')
    }else{
        console.log('modo produccion')
        return{
            build:{
                lib: {
                    entry: resolve(__dirname, 'lib', 'main.js'),
                    name: "demo",
                    fileName: (format)=>`demo.${format}.js`
                }
            }
        }
    }

    return{
        server: {
            port
        }
    }
})