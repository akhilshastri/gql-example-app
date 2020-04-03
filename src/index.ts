import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga'
import {createConnection} from "typeorm";
import { buildSchema } from "type-graphql";
import {UserResolver} from "./resolvers/user-resolver";
import {HelloResolver} from "./resolvers/hello-resolver";

const getSchema = async ()=> {
    let schema;
    try {

        schema = await buildSchema({
            resolvers: [UserResolver, HelloResolver]
        });

        return schema ;
    } catch (e) {
        console.error(e);
        throw e;
    }

};

createConnection().then(async () => {
    const schema = await getSchema();
    const server = new GraphQLServer({ schema }) ;
    await server.start(() => console.log("Server is running on localhost:4000"));
}).catch(() => {
    console.log("Couldn't connect to the database.")
});
