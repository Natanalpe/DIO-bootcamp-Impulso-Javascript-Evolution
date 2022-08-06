import { getConnection, TableForeignKey } from 'typeorm'
import createConnection from '../database'
import { FakeData } from '../utils/fakeData/fakeData'
import { makeMockRequest } from '../utils/mocks/mockRequest'
import { makemockResponse } from '../utils/mocks/mockResponse'
import { DeleteUserController } from './DeleteUserController'

describe('DeleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.close();
    })

    const fakeData = new FakeData()

    it('Deve retirnar status 204 quando o usuari for deletado', async () => {
        const mockUser = await fakeData.createUser()

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        })

        const response = makemockResponse()

        const deleteUserController = new DeleteUserController()

        await deleteUserController.handle(request, response)

        expect(response.state.status).toBe(204)
    })
})