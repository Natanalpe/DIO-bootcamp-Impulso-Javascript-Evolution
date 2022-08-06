import { getConnection } from 'typeorm';
import createConnection from '../database';
import { FakeData } from '../utils/fakeData/fakeData';
import { GetAllUserController } from './GetAllUserController';
import { makeMockRequest } from '../utils/mocks/mockRequest'
import { makemockResponse } from '../utils/mocks/mockResponse'

describe('GetAllUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakeData = new FakeData()

    it('Deve retornar status 200 quando pegar todos os usuários', async () => {
        await fakeData.execute()

        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({})

        const response = makemockResponse()

        await getAllUserController.handle(request, response)

        expect(response.state.status).toBe(200)


    })
})