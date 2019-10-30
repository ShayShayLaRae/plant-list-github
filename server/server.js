require ('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl= require('./controllers/plantCtrl')
const wishlistCtrl= require('./controllers/wishlistCtrl')

const app = express()
app.use(express.json())

// app.post('/api/plants', ctrl.addToP)
// app.get('/api/plants', ctrl.getPlants)
// app.put('/api/plants', ctrl.renameP)
// app.delete('/api/plants', ctrl.deleteFromP)

// app.post('/api/wishlist', ctrlW.addToWL)
app.get('/api/wishlist', wishlistCtrl.getWishlist)
app.put('/api/wishlist/:id', wishlistCtrl.rename)
// app.delete('api/wishlist', ctrlW.deleteFromWL)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} It's Alive!`))