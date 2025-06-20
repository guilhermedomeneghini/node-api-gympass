import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs';
import { inMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository';
import { UserAlreadyExistsError } from './errors/user-already-exist-error';

describe('Register Use Case', ()=> {
    it('should be able to register', async ()=>{
        const usersRepository = new inMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const {user} = await registerUseCase.execute({
            name: 'Nome teste',
            email: 'email@teste.com',
            password: '123456',

        })
        expect(user.id).toEqual(expect.any(String))
    })

    it('should hash user password upon registration', async ()=>{
        const usersRepository = new inMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const {user} = await registerUseCase.execute({
            name: 'Nome teste',
            email: 'email@teste.com',
            password: '123456',

        })

        const isPasswordCorrectlyHashed = await compare(
            '123456', user.password_hash,
        )

        expect(isPasswordCorrectlyHashed).toBe(true)
    })
})

describe('Register Use Case', ()=> {
    it('should not be able to register with same email twice', async ()=>{
        const usersRepository = new inMemoryUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        const email = 'email@teste.com'

        await registerUseCase.execute({
            name: 'Nome teste',
            email: email,
            password: '123456',

        })

        expect(()=>
            registerUseCase.execute({
                name: 'Nome teste',
                email,
                password: '123456',
            }),
        ).rejects.toBeInstanceOf(UserAlreadyExistsError)
    })
})