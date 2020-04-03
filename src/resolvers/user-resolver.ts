import { Resolver, Query, FieldResolver, Arg, Root, Mutation, Ctx, Int } from "type-graphql";
import { getRepository } from "typeorm";
import {User} from "../entity/User";

@Resolver()
export class UserResolver{

    @Query(returns => User)
    async users(@Arg("id") id : string){
        return getRepository(User).findOne(id) ;
    }
}
