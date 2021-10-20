require('dotenv').config();
const Filestorage = require('../../src/index');
// const getAddress = require('../utils/helper').getAddress;

let endpoint = process.env.SCHAIN_ENDPOINT;
let user_address = process.env.USER_ADDRESS;

let filestorage = new Filestorage(endpoint, true);

async function getters() {
    const getOccupiedSpace = await filestorage.getOccupiedSpace(user_address);
    console.log()
    const getReservedSpace = await filestorage.getReservedSpace(user_address);
    const getTotalSpace = await filestorage.getTotalSpace();
    const getTotalReservedSpace = await filestorage.getTotalReservedSpace();
    let getOccupiedSpaceMB = getOccupiedSpace === 0 ? getOccupiedSpace + ' MB' : getOccupiedSpace / 1000000 + ' MB';
    console.log()
    let getReservedSpaceMB = getReservedSpace === 0 ? getReservedSpace + ' MB' : getReservedSpace / 1000000 + ' MB';
    let getTotalSpaceMB = getTotalSpace === 0 ? getTotalSpace + ' MB' : getTotalSpace / 1000000 + ' MB';
    let getTotalReservedSpaceMB = getTotalReservedSpace === 0 ?
        getTotalReservedSpace + ' MB' : getTotalReservedSpace / 1000000 + ' MB';

    await console.log('getOccupiedSpace for ', user_address, ' is ', getOccupiedSpaceMB);
    await console.log('getReservedSpace for ', user_address, '  is ', getReservedSpaceMB);
    await console.log('getTotalSpace is ', getTotalSpaceMB);
    await console.log('getTotalReservedSpace is ', getTotalReservedSpaceMB);
}

getters();

