import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:5001'
})

const endPointUser = '/user'

describe(endPointUser, async () => {
    it('Deve retirnar o status 200' , async () => {
        const user = await server.post(endPointUser,  {
            name: 'Algum usuário',
            email:'email@dio.ex'
        })

        expect(user.status).toBe(201)
    })
})