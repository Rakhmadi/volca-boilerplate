import { Request } from '../volca.ts'
import { Flight } from '../denoDB.ts'
export class example_controller {
    
    static index(){
        return Request.toView('./view/wellcome.html',{})
    }
    
    static async data(){
        
        return Request.toResponseJson(await Flight.all(),200)
    }
}