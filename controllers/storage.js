import models from '../models/index.js' 
const PUBLIC_URL = process.env.PUBLIC_URL

const getItems = async (req, res) =>{
    const data = await models.storageModels.find({});
    res.json(data)
}
const getItem = (req, res) =>{

}
const createItem = async (req, res) =>{
    const { body, file } = req
    console.log(file)
    const fileData = {
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
    const data = await models.storageModels.create(fileData)
    res.send({data})
}
const updateItem = (req, res) =>{

}
const deleteItem = (req, res) =>{

}


export { getItems, getItem, createItem, updateItem, deleteItem }