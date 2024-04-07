const express=require('express')
const dataRouter =express.Router()

const dataControllers=require('../Controllers/Data/dataController')

dataRouter.post('/calculationData',dataControllers.controllers.calculationDataController)

dataRouter.get('/fetchCalculationData',dataControllers.controllers.fetchCalculationData)
dataRouter.get('/fetchProjectData',dataControllers.controllers.fetchProjectData)

module.exports=dataRouter