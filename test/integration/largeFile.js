
const path = require('path')
const http = require('http');
require('dotenv').config();
const Filestorage = require('../filestorage.js/src/index.js');
let Web3 = require('web3');
let web3 = new Web3(process.env.SCHAIN_ENDPOINT)
let schain_address = process.env.SCHAIN_ENDPOINT
let filestorage = new Filestorage(schain_address, true);
let fs = require('fs')
let address= process.env.ACC3
let pk = process.env.PK3
let directoryPath = '/home/evgeniyzh/largeFile/largeFile1.txt'

async function upload(){
        let balanceStart = await web3.eth.getBalance(process.env.ACC3);
        let timeStart = new Date()
        console.log(balanceStart)
        console.log('start: ', timeStart)
  	for (let i = 12 ; i < 50 ; ++i) {
  		let directoryPath = '/home/evgeniyzh/largeFile/largeFile'+i+'.txt';
		var content;
		var contentPath;
		// First I want to read the file
		content = await fs.readFileSync(directoryPath)
		console.log(content);   // Put all of the code here (not the best solution)
		contentPath = await filestorage.uploadFile(address,'largeFile'+i+'.txt', content,  pk);
		console.log(contentPath);

        let balanceFinish = await web3.eth.getBalance(process.env.ACC3);
        let balanceFinishEth = await web3.utils.fromWei((balanceStart - balanceFinish).toString(),"ether")
        let timeEnd = new Date()
        console.log('balance:  ', balanceFinishEth)
        console.log('end: ', timeEnd)
        process.on('Error', function (e) {
        console.log(new Date().toString(), e.stack || e);
        process.exit(1);
        });
       	}


}

upload();

