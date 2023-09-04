import express from 'express'
import uploadMiddleware from '../utils/handleStorage.js'
import { createItem, getItems } from '../controllers/storage.js'

const router = express.Router()

router.post('/', uploadMiddleware.single("myfile"), createItem)
router.get('/', uploadMiddleware.single("myfile"), getItems)

export default router