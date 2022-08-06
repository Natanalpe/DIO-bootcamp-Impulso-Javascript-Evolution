import { getRepository } from 'typeorm'
import { Usuario } from '../entities/usuarios';


class GetAllUserService {
    async execute() {
        const usuarios = await getRepository(Usuario)
            .createQueryBuilder('usuarios')
            .select()
            .getMany()
    }
}

export { GetAllUserService };