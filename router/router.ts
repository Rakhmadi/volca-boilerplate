import {Router,Request} from '../volca.ts'
export let router = ()=>{
    Router.get('/',()=>{
        Request.toResponse({
            content:'text/plain',
            body:`Hello World`
        })
    })
}