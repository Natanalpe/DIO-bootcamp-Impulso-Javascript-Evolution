import { User } from '../entities/User'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { getMockUser } from '../__mocks__/mockUser'
import { UserController } from './UserController'

const mockUser: User = getMockUser()

jest.mock('../services/userService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return {
                createUser: jest.fn().mockImplementation(() => Promise.resolve(mockUser))
            }
        })
    }
})

describe('UserController', () => {
    const userController = new UserController()


    it('deve retornar status 201 e o usuario criado', async () => {
        const request = makeMockRequest({
            body: {
                name: 'Algum nome',
                email: 'email@dio.ex'
            }
        })

        const response = makeMockResponse()
        await userController.createUser(request, response)
        expect(response.state.status).toBe(201)
        expect(response.state.json).toHaveProperty('user_id')
        expect(response.state.json).toMatchObject({
            name: 'algum nome',
            email: 'email@dio.ex'
        })
    })
})
