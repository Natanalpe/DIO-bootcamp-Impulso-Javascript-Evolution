import { Request } from 'express'
import { createConnection, getConnection } from 'typeorm'
import { FakeData } from '../utils/fakeData/fakeData'
import { makemockResponse } from '../utils/mocks/mockResponse'
import { UpdateUserController } from './UpdateUserController'

describe('UpdateUserController', async () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        connection.query('DELETE FROM usuarios')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 uando o usuario for editado', async () => {
        const mockUser = await fakeData.createUser()
        const updateUsercontroller = new UpdateUserController()
        
        const request = {
            body: {
                id: mockUser.id,
                nome: 'Outro nome',
                email: 'email@email.com.br'
            }
        } as Request

        const response = makemockResponse()

        await updateUsercontroller.handle(request, response)

        expect(response.state.status).toBe(204)

    })
})