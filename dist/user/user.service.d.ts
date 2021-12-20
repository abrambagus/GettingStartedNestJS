import { Repository } from 'typeorm';
import { User } from './models/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    all(): Promise<User[]>;
    paginate(page?: number): Promise<any>;
    create(data: any): Promise<User>;
    findOne(condition: any): Promise<User>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
