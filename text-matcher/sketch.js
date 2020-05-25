

let generation;


function setup() {

    bestPhrase = createP("Best phrase:");
    //bestPhrase.position(10,10);
    bestPhrase.class("best");
  
    allPhrases = createP("All phrases:");
    allPhrases.position(600, 10);
    allPhrases.class("all");
  
    stats = createP("Stats");
    //stats.position(10,200);
    stats.class("stats");



    let target = "Mi mangerei 1000 slinzeghe a colazione";
    let startingGenerations = 100;
    let mutationChance = 0.01;

    generation = new Generation(target, mutationChance, startingGenerations);

}

function draw() {


    generation.selection();

    generation.reproduction();

    if(generation.isFinished()){
        noLoop();
    }

    displayLoop();
}


function selection(){
    generation.evalFitness();
    generation.buildMatingPool();
}

function reproduction(){
    const nextGeneration = [];
    for(let i = 0; i < n; i++){
        generation.pickParents();
        child = generation.crossover();
        child = child.mutation();
        nextGeneration.push(child);
    }

    generation = nextGeneration;
}


function displayInfo() {
    // Display current status of population
    let answer = generation.getBest();
  
    bestPhrase.html("Best phrase:<br>" + answer);
  
    let statstext = "Total Generations:     " + generation.getGenerations() + "<br>";
    statstext += "Average Fitness:       " + nf(generation.getAverageFitness()) + "<br>";
    statstext += "Starting Generation:      " + startingGenerations + "<br>";
    statstext += "Mutation Rate:         " + floor(mutationChance * 100) + "%";
  
    stats.html(statstext);
  
    allPhrases.html("All phrases:<br>" + generation.allPhrases())
  }