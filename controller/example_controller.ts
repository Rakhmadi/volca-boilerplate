import { Request } from '../volca.ts'

export class example_controller {

    static index(){
        return Request.toView('./view/wellcome.html',{})
    }

}