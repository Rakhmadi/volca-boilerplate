import {AppServe} from "./volca.ts"
import {routers} from './router/router.ts'
import "https://deno.land/x/dotenv/load.ts";

let appServOpt = {
    hostname:Deno.env.get('HOST'),
    port:Number(Deno.env.get('PORT'))
}

AppServe(async()=>{

    routers();

},appServOpt);