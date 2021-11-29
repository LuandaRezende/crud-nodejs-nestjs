import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {

    users: User[] = [];

    getAll(){
        return this.users;
    }

    getById(id: number){
        const user = this.users.find((value) => value.id == id);

        return user;
    }

    create(user: User){
        let lastId = 0;

        if(this.users.length > 0){
            lastId = this.users[this.users.length - 1].id;
        }

        user.id = lastId + 1;

        this.users.push(user);

        return user;
    }

    update(user: User){
        let userArray = this.getById(user.id);

        if(userArray){
            userArray.name = user.name;
            userArray.age = user.age;
            userArray.city = user.city;
        }

        return userArray;
    }

    delete(id: number){
        const index = this.users.findIndex((value) => value.id == id);

        this.users.splice(index, 1);
    }
}
