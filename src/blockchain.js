const Block = require('./block');

class Blockchain {
    constructor() {
        this.bloques = [this.addFirstBlock()];
    }

    addFirstBlock() {
        return new Block(0, 'Genesis');
    }

    lastBlock() {
        return this.bloques[this.bloques.length - 1];
    }

    addToBlockchain(data) {
        let prevBlock = this.lastBlock();
        let currentBlock = new Block(prevBlock.index + 1, data, prevBlock.hash);
        if (
            currentBlock.hash !== prevBlock.hash &&
            currentBlock.index > prevBlock.index
        ) {
            this.bloques.push(currentBlock);
        }
    }

    showBlockChain() {
        console.log('Welcome to my first BlockChain in crypto');
        this.bloques.forEach((bloque) => {
            const bloqueCadena = JSON.stringify(bloque, null, 2);
            console.log(bloqueCadena);
            console.log(
                '---------------------------------------------------------------------------------------'
            );
        });
    }
}

module.exports = Blockchain;
