const router = require('express').Router()
const {
    getAllBread, 
    getBreadById,
    createBread
} = require('../controllers/bread')

router.get('/', getAllBread)

router.get(':/id', getBreadById)

router.post('/', createBread)

module.exports = router