import {Resolver, Query, FieldResolver, Arg, Root, Mutation, Ctx, Int} from "type-graphql";

@Resolver()
export class HelloResolver {

    @Query(() => String, {name: 'hello'})
    sayHello(@Arg("name") name: string) {
        return `Hello ${name || 'World'}`;
    }

}
