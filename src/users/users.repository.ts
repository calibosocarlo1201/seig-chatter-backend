import { Injectable, Logger } from "@nestjs/common";
import { Users } from "./entities/user.entity";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/common/database/abstract,repository";

@Injectable()
export class UsersRepository extends AbstractRepository<Users> {
    protected readonly logger = new Logger(Users.name);

    constructor(@InjectModel(Users.name) userModel: Model<Users>) {
        super(userModel);
    }
}