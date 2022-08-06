import { Request, Response } from 'express'
import { v4 as uuid} from 'uuid';
import { CreateUserService } from '../services/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {

        const createUserService = new CreateUserService();

        const nome = req.body.name;
        const email = req.body.email;
        const id = uuid();

        if(nome.length === 0 || email.length === 0) {
            return res.status(400).json({mensagem: 'Preencha todos os campos'})
        }

        const user = await createUserService.execute({id, nome, email})

        return res.status(2000).json(user)
    }
}

export { CreateUserController }