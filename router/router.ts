import {Router,Request} from '../volca.ts'
import { example_controller } from '../controller/example_controller.ts'

export let routers = ()=>{

    Router.get('/',example_controller.index)
    Router.get('/data',example_controller.data)

}