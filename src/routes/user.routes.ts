import { Router } from 'express'
import asyncHandler from '../middlewares/asyncHandler'
import { validateFieldsRequest } from '../middlewares/validateFields'
import validateJwt from '../middlewares/validateJWT'
import { createUser } from '../controllers/user.controller'

const router = Router()

router.post('/create',
    [
        validateJwt,
        asyncHandler(validateFieldsRequest)
    ],
    asyncHandler(createUser)
)

export default router