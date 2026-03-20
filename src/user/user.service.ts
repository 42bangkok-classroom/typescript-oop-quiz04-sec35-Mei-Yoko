import { Injectable } from '@nestjs/common';
import { Iuser } from './user.interface';

@Injectable()
export class UserService{
    test(): any[] {
        return[];
    }
}
