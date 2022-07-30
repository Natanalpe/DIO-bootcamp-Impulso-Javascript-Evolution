const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = (fRam / tRam) * 100
    
    const stats = {
        os: platform(),
        arch: arch(),
        totalRAM: `${parseInt(tRam)} MB`,
        freeRAM: `${parseInt(fRam)} MB`,
        usage: `${usage.toFixed(1)}%`
    };
    
    console.clear();
    console.table(stats);

    exports.stats = stats;
}, 1000)
