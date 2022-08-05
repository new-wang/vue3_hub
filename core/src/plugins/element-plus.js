import ElementPlus from "element-plus"
import locale from 'element-plus/lib/locale/lang/en'

export default function(app){
    // 完整
    app.use(ElementPlus,{locale})

    // // 按需引入
    // app.use(ElButton)
    // app.use(ElInput)
}