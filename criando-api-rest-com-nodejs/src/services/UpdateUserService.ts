import { getRepository } from 'typeorm'
import { Usuario } from '../entities/usuarios';

interface IUser {
    id: string;
    nome: string;
    email?: string;
}

class UpdateUserService{
    async execute({ id, nome, email }: IUser){
        const user = await getRepository(Usuario)
            .createQueryBuilder()
            .update()
            .set({
                nome: nome,
                email: email
            })
            .where('id = :id', { id })
            .execute()
        
        return user.raw;
    }
}

export { UpdateUserService }