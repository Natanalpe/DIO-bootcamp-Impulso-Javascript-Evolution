import { UserService } from './UserService'
import { v4 as uuid } from 'uuid'
import { getMockUser } from '../__mocks__/mockUser'

jest.mock('../respositories/UserRepository')
const mockUserRepository = require('../respositories/UserRepository')

describe('UserService', () => {

    const mockUser = getMockUser()

    const userService = new UserService({
        userRepository: mockUserRepository,
        name: 'Algum nome',
        email: 'email@dio.ex'
    })    

    it('Deve retornar o usuario quando for salvo', async () => {
        mockUserRepository.save = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
            const user = await userService.createUser()
            expect(user).toHaveProperty('user_id')
            expect(user).toMatchObject({
                name: 'Algum nome',
                email: 'email@dio.ex'
            })
    })
})