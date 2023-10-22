import { Router } from 'express'

const router = Router()

/**
 * Appointment
*/

router.get('/appointment', (req, res) => {
    res.json({message: "hello"})
})
router.get('/appointment/:id', () => {})
router.put('/appointment/:id', () => {})
router.post('/appointment', () => { })
router.delete('/appointment/:id', () => { })


export default router;