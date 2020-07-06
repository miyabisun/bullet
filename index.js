require('livescript')
const {Command} = require('commander')
const program = new Command()
const p = require('./package.json')

program
  .version(p.version)
  .name('bullet')
  .parse(process.argv)

console.log(program.version)
