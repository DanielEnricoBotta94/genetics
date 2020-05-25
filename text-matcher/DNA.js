
class DNA {
    constructor(length) {
        this.genes = [];
        for (let i = 0; i < length; i++) {
            this.genes.push(this.getRandomChar());
        }
    }

    getRandomChar() {
        return String.fromCharCode(random(0, 300));
    }

    fitness(target){
        let score = 0;
        for(i = 0; i < this.genes.length; i++){
            if(target[i] == this.genes[i]){
                score++;
            }
        }
        return score / this.genes.length;
    }
}
