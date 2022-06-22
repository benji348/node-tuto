const os = require("os")
    //info about current user
    // const currentUser = os.userInfo()
    // console.log(currentUser)
    // console.log(os.uptime())

const currentOs = {
    userInfo: os.userInfo(),
    name: os.type(),
    time: os.uptime(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
    platfomr: os.platform(),
    osversion: os.version(),
    NetworkInformation: os.networkInterfaces()
}
console.log(currentOs)
    // console.log(os)