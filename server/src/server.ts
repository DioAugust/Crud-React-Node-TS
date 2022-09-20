import { router } from '../routes'
import app from './app'


app.use(router)
app.listen(3000, () => {
    console.log('App running on http://localhost:3000/')
})