import ElementPlus from "element-plus"
import locale from 'element-plus/lib/locale/lang/en'

import 'element-plus/dist/index.css'

export default function(app){
    // 完整
    app.use(ElementPlus,{locale})

    // // 按需引入
    // app.use(ElButton)
    // app.use(ElInput)
}