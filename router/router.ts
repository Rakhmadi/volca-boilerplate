import {Router,Request} from '../volca.ts'
import { example_controller } from '../controller/example_controller.ts'

export let routers = async()=>{

    await Router.get('/',example_controller.index)

}