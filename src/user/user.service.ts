import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UserService{
    test(): any[] {
        return[];
    }

    findAll(): IUser[] {
        const filePath = path.join(process.cwd(), 'data', 'users.json');
        const raw = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(raw) as IUser[];
    }
}
