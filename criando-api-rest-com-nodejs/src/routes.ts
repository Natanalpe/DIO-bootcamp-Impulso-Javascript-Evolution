import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './services/DeleteUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUsercontroller = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get('/', (req: Request, res: Response) => {
    return res.json({mensagem: "DIO API"})
});

router.post('/usuarios', createUserController.handle);
router.get('/usuarios', getAllUserController.handle);
router.patch('/usuario', updateUsercontroller.handle);
router.delete('/usuario/:id', deleteUserController.handle);

export { router };