import models from '../models/index.js' 

const getItems = async (req, res) =>{
    const data = await models.tracksModels.find({})

    res.send({data})
}
const getItem = (req, res) =>{

}
const createItem = async (req, res) =>{
    const { body } = req
    console.log(body)
    const data = await models.tracksModels.create(body)
    res.send({data})
}
const updateItem = (req, res) =>{

}
const deleteItem = (req, res) =>{

}


export { getItems, getItem, createItem, updateItem, deleteItem }