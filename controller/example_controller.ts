import { Request } from '../volca_module.ts'

export class example_controller {

    static index(){
        return Request.toView('./view/wellcome.html',{})
    }

}