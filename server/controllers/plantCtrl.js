// const plantAdded= require('./plants.json')
const plantData= require('../plantdata.json')
// const wishList= require('../wishlist.json')
let id = 0

module.exports= {
    add:(req, res) => {
        const newPlant = {...req.body, id}
        plantData.push(newPlant)
        id++
        res.status(200).send(plantData)
    },
    getPlants:(req, res) => {
        res.status(200).send(plantData)
    },
    rename:(req, res) => {
        const {id} = req.params
        const {name} = req.body
        const index = plantData.findIndex(el => el.id === +id)
        plantData[index].name = name
        res.status(200).send(plantData)
    },
    delete: (req, res) => {
        const {id} = req.params
        const index = plantData.findIndex(el => el.id === +id)
        plantData.splice(index, 1)
        res.status(200).send(plantData)
    }
}