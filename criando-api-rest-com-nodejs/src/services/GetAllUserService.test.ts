import { getConnection } from 'typeorm';
import createConnection from '../database';
import { CreateUserService } from './CreateUserService';
import { GetAllUserService } from './GetAllUsersService';
import { FakeData } from '../utils/fakeData/fakeData'

describe('GetAllUserService', () => {
    beforeAll(async () => {
        const connection = createConnection()
        await (await connection).runMigrations
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuario')
        await connection.close();
    })

    const fakeData = new FakeData();

    it('Deve retornar todos os usuários cadastrados', async () => {

        await fakeData.execute();

        const expectedResponse = [
            {
                nome: 'Algum usuário',
                email: 'user@email.com'
            },
            {
                nome: 'Outro usuário',
                email: ''
            }
        ]

        const getAllUserService = new GetAllUserService()

        const result = await getAllUserService.execute()

        expect(result).toMatchObject(expectedResponse)
    })
})