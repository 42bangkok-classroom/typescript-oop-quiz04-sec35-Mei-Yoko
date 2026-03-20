import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';

import * as fs from 'fs';
@Injectable()
export class UserService{
    test(): any[] {
        return[];
    }

    findAll(): IUser[] {
        const data = fs.readFileSync('./data/users.json', 'utf8');
        const users = JSON.parse(data);
        return users;
    }
}
