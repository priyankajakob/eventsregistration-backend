const express = require('express')
const router = express.Router()

const usersController = require('../app/controllers/usersController')
const registrationsController = require('../app/controllers/registrationsController')
const eventsController = require('../app/controllers/eventsController')

router.get('/users',usersController.list)
router.post('/users',usersController.create)
router.get('/users/:id',usersController.show)
router.put('/users/:id',usersController.update)
router.delete('/users/:id',usersController.destroy)

router.get('/events',eventsController.list)
router.post('/events',eventsController.create)
router.get('/events/:id',eventsController.show)
router.put('/events/:id',eventsController.update)
router.delete('/events/:id',eventsController.destroy)

router.get('/registrations',registrationsController.list)
router.post('/registrations',registrationsController.create)
router.get('/registrations/:id',registrationsController.show)
router.put('/registrations/:id',registrationsController.update)
router.delete('/registrations/:id',registrationsController.destroy)

module.exports = {
    router
}