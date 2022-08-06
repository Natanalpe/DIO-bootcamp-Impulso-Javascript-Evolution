import { response } from 'express'
import { User } from '../entities/User'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { getMockUser } from '../__mocks__/mockUser'
import { UserController } from './UserController'
import { Request } from 'express'

const mockUser: User = getMockUser()

let mockReturnCreateUser
jest.mock('../services/userService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return {
                createUser: mockReturnCreateUser
            }
        })
    }
})

describe('UserController', () => {
    const userController = new UserController()
    const request = makeMockRequest({
        body: {
            name: 'Algum nome',
            email: 'email@dio.ex'
        }
    })


    it('deve retornar status 201 e o usuario criado', async () => {
        mockReturnCreateUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        await userController.createUser(request, response)
        expect(response.status).toBe(201)
        expect(response.json).toHaveProperty('user_id')
        expect(response.json).toMatchObject({
            name: 'algum nome',
            email: 'email@dio.ex'
        })
    })

    it('Deve retornar status 500 quando ocorrer um erro', async ()=> {
        mockReturnCreateUser = jest.fn().mockImplementation(() => {
            throw new Error()
        })
        await userController.createUser(request, response)
        expect(response.status).toBe(500)
    })
})
