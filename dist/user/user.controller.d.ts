import { User } from './models/user.entity';
import { UserService } from './user.service';
import { userCreateDto } from './models/user-create.dto';
import { userUpdateDto } from './models/user-update.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    all(page?: number): Promise<User[]>;
    create(body: userCreateDto): Promise<User>;
    get(id: number): Promise<User>;
    update(id: number, body: userUpdateDto): Promise<User>;
    delete(id: number): Promise<any>;
}
