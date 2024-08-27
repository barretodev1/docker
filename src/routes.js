import express from 'express'
import {createUser, getAllUsers, deleteUsers} from './Controllers/control.js'

const router = express.Router()

router.post('/cadastro', createUser)
router.get('/listar', getAllUsers)
router.delete('/deletar', deleteUsers)

export default router