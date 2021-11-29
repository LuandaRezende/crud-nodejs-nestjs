import { Injectable } from '@nestjs/common';

@Injectable()
export class User {
    id: number;
    name: string;
    age: number;
    city: string;
}
