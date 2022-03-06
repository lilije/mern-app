const fs = require('fs');//file system
const userName = 'Mak';

fs.writeFile('user-data.txt', 'Name:' + userName, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('write file');
} )