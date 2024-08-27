import express from 'express'
import userRoutes from './routes.js'
import Users from './Models/user.js'
import Sequelize from 'sequelize'
import config from './Config/database.js'
const app = express()

app.use(express.json())
const sequelize = new Sequelize(config)
Users.init(sequelize)

app.use('/users', userRoutes) 

sequelize.authenticate().then( () => {
    console.log("BANCO DE DADOS RODANDO")
    app.listen(3000, () => console.log('API RODANDO'))
}).catch(error => {
    console.log(error)
})

