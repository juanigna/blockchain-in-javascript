const SHA256 = require('crypto-js/sha256');
const hex2ascii = require('hex2ascii');

class Block {
    constructor(index, data, previousBlockHash = null) {
        this.index = index;
        this.date = new Date().getTime();
        this.data = data;
        this.previousBlockHash = previousBlockHash;
        this.hash = this.createHash();
    }

    createHash() {
        return SHA256(
            this.index + this.date + this.data + this.previousBlockHash
        ).toString();
    }
}

module.exports = Block;
