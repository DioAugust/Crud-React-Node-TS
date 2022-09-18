import { router } from '../routes'
import app from './app'


app.use(router)

app.listen(3000, () => {
    console.log('App running on port 3000')
})