import { Command } from 'https://cdn.depjs.com/cmd/mod.ts'

const program = new Command(/* name */)

program.version('0.0.1')

program
  .option('-c.c, --create:controller <FILE>', 'load configuration file')
  .option('-v, --verbose', 'enable verbose mode')

program.parse(Deno.args)

let Filesexist = async(path:string)=>{
    try {
        const stats =await Deno.lstat(path)
        return stats && stats.isFile
    } catch (err) {
        if (err && err instanceof Deno.errors.NotFound) {
            return false
        } else {
            throw err
        }
    }
}

if (program["create:controller"] != null && program["create:controller"] != '') {
    const Isi = `
  //controller ${program["create:controller"]} created
  import { Request } from '../volca_module.ts'

export class ${program["create:controller"]} {

    static index(){
        return Request.toResponse({
            body:'hello world'
        })
    }

}`
    const FileName =`./controller/${program["create:controller"]}.ts`
    if (await Filesexist(`${Deno.cwd()}${FileName}`)) {
       console.log('the controller already exists');
    } else {
      await Deno.writeTextFile(FileName, Isi);
      console.log(`\u001b[32;1m ☑️   Controller "${program["create:controller"]}" Created`);
    }
  }