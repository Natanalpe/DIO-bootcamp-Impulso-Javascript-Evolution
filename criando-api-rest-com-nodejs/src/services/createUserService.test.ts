import { v4 as uuid} from 'uuid';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserService } from './CreateUserService';

describe('CreateUserService', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    it('Deve retornar o ID do usuário criado', async () => {
        const createUserService = new CreateUserService()

        const result = await createUserService.execute({
            id: uuid(),
            nome: 'Algum usuário',
            email: 'email@usuario.com'
        }) 

        expect(result).toHaveProperty('id')
    })
})