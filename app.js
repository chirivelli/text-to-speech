import { serve } from 'bun'
import index from './index.html'

serve({
    port: process.env.PORT,
    static: {
        '/': index
    },
    fetch : () => new Response('404')
})