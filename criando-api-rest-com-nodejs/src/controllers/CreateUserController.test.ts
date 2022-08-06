import { Request } from 'express';
import { getConnection } from 'typeorm';
import createConnection from '../database';
import { makemockResponse } from '../utils/mocks/mockResponse';
import { CreateUserController } from './CreateUserController';

describe('CreateUserController', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()
    })

    const createUserController = new CreateUserController();
    const response = makemockResponse()

    it('Deve retornar o status 201 quando o usuário é criado', async () => {
        const request = {
            body: {
                nome: 'Algum usuario',
                email: 'email@email.com'
            }
        } as Request


        expect(response.state.status).toBe(201)

    })

    it('Deve retornar status 400 quando o nomenão for informado', async () => {
        const request = {
            body: {
                nome: '',
                email: 'email@email.com'
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 201 quando o email não for informado', async () => {
        const request = {
            body: {
                nome: 'Algum usuario',
                email: ''
            }
        } as Request

        await createUserController.handle(request, response)

        expect(response.state.status).toBe(201)
    })
})