const os = require('os')

console.log("Architecture", os.arch());
console.log("Platform", os.platform());
console.log("TotalMemory", os.totalmem());
console.log("freeMem", os.freemem());
console.log("Hostaname", os.hostname());
