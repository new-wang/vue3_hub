import { createPinia, defineStore } from 'pinia'
import { ref } from 'vue'

const pinia = createPinia()

// options
export const useStore = defineStore('use', {
    state: () => ({ count: 5 }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
// setup
export const useCounterStore  = defineStore('main', () => {
    const count = ref(1)
    
    return { count }
})

export default (app) => {
    app.use( pinia )
}
