const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptimme ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),// Trả về tổng bộ nhớ dạng byte
    freeMem: os.freemem()// trả về bộ nhớ còn trống dạng byte
}
console.log(currentOS)