
class Generation {
    constructor(target, mutationChance, startingGenerations) {
        this.target = target;
        this.mutationChance = mutationChance;
        this.startingGenerations = startingGenerations;



        this.generation = [];
        for(let i = 0; i < startingGenerations; i++){
            this.generation.push(new DNA(this.target.length))
        }

    }
}
