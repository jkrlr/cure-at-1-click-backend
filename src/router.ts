import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from './utils/middleware'

const router = Router()

// Don't trust the user that information that they are sending us.
// Because they don't know, they can send us anything.
// Since, we have multitenant database, so be careful about for the information on their scope.


/**
 * User Routes
*/
router.get('/users', (req, res) => { })
router.get('/users/:id', (req, res) => { })
router.put('/users/:id', (req, res) => { })
router.delete('/users/:id', (req, res) => { })

/**
 * Profile Routes
 */
router.get('/profiles', (req, res) => { })
router.get('/profiles/:id', (req, res) => { })
router.post('/profiles', (req, res) => { })
router.put('/profiles/:id', (req, res) => { })
router.delete('/profiles/:id', (req, res) => { })

/**
 * Member Routes
 */
router.get('/members', (req, res) => { })
router.get('/members/:id', (req, res) => { })
router.post('/members', (req, res) => { })
router.put('/members/:id', (req, res) => { })
router.delete('/members/:id', (req, res) => { })

/**
 * Appointment Routes
 */
router.get('/appointments', (req, res) => { })
router.get('/appointments/:id', () => {})
router.post('/appointments',
    body('date').isDate().withMessage('Date is required'),
    body('time').isString().withMessage('Time is required'),
    body('description').optional().isString(),
    handleInputErrors,
    () => { }
)
router.put('/appointments/:id', () => {})
router.delete('/appointments/:id', () => { })

/**
 * Prescription Routes
 */
router.get('/prescriptions', () => {})
router.post('/prescriptions', () => {})
router.get('/prescriptions/:id', () => { })
router.put('/prescriptions/:id', () => { })               
router.delete('/prescriptions/:id', () => { })

/**
 * Medicine Routes
 */
router.get('/medicines', () => { })
router.post('/medicines', () => { })
router.get('/medicines/:id', () => {})
router.put('/medicines/:id', () => { })
router.delete('/medicines/:id', () => { })

export default router;