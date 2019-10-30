const wishList= require('../wishlist.json')
let id = 0

module.exports= {
    add:(req, res) => {
        const newPlant= {...req.body, id}
        wishList.push(newPlant)
        id++
        res.status(200).send(wishList)
    },
    getWishlist:(req, res) => {
        console.log('hit getWishlist');
        
        res.status(200).send(wishList)
    },
    rename: (req, res) => {

        console.log('renameFunction!');
        

        const {id} =req.params
        const {nickname} =req.body
        const index = wishList.findIndex(p => p.id === id)
    
        wishList[index].my_nickname = nickname
        res.status(200).send(wishList)
    },
    delete: (req, res) => {
        const {id} = req.params
        const index = wishList.findIndex(p => p.id === +id)
        wishList.splice(index, 1)
        res.status(200).send(wishList)
    }
}