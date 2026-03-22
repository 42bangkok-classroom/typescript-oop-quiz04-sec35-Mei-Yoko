import { Injectable,NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserService{
    test(): any[] {
        return[];
    }

    findAll(): IUser[] {
        const filePath = path.join(process.cwd(), 'data', 'users.json');
        const read = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(read) as IUser[];
    }

   findOne(id: string, fields?: string[]): Partial<IUser>{
        const users = this.findAll();

        let foundUser : IUser | undefined = undefined;
        for(let i = 0; i < users.length; i++){

            if(users[i].id === id){
                foundUser = users[i];
                break;
            }
        }

        if (foundUser ===  undefined){
            throw new NotFoundException('User not found');
        }

        if (fields === undefined){
            return foundUser;
        }

        const result: Partial<IUser> = {};

        for(let i = 0; i<fields.length; i++){
            const fieldName = fields[i]

            if (fieldName in foundUser) {
                result[fieldName as keyof IUser] = foundUser[fieldName as keyof IUser];
              }
            }
            return result;
        }

    }


