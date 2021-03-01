
  //controller contrd created
  import { Request } from '../volca_module.ts'

export class contrd {

    static index(){
        return Request.toResponse({
            body:'hello world'
        })
    }

}