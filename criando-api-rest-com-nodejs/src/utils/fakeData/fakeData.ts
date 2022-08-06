import { v4 as uuid } from 'uuid'
import { CreateUserService } from '../../services/CreateUserService'

class FakeData {
    createUserService = new CreateUserService()

    async execute() {

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Algum usuário',
            email: 'user@email.com'
        })
    
        await this.createUserService.execute({
            id: uuid(),
            nome: 'Outro usuário',
            email: ''
        })

    }

    async createUser() {
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Algum usuário',
            email: 'user@email.com'
        })

        return user;
    }
}

export { FakeData }