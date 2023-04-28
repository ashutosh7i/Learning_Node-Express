//this module will itself require os module.
const os = require("os");

const platform = os.platform();
const machine = os.machine();
const memory = os.totalmem();
const version = os.version();

OSInfo = () => {
    console.log(
        {
            "Information_About_your_OS": "",
            "Platform": `${platform}`,
            "Machine": `${machine}`,
            "Memory": `${memory}`,
            "Version": `${version}`
        }
    )
};


//OSInfo();

exports.osInfo = () => {
    return OSInfo();
}