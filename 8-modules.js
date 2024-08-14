const names = require('./3-names')
const func = require('./4-utils')
const data = require('./5-alternative')

require('./7-mind-grenade');


func("susan")
func(names.john);
func(names.peter)
sayHi('hitlu')
sayHi(john)
sayHi(peter)


const os = require('os');

// info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);