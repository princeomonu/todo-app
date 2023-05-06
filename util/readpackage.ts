import fs from 'fs'
import path from 'path'

export default ()=>{
    const _pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(),'package.json'),'utf-8'))
    console.log({_pkg})
    return _pkg
}