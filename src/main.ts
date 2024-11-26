import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "dark"
    }
})

createApp(App).use(vuetify).mount('#app')
