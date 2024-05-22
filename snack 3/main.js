'use strict'

const animals = [
    {
        nome: 'leopardo',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },

    {
        nome: 'giraffa',
        famiglia: 'giraffidi',
        classe: 'mammiferi'
    },

    {
        nome: 'coccodrillo',
        famiglia: 'crocodylidae',
        classe: 'rettili'
    },

    {
        nome: 'aquila',
        famiglia: 'accipitridae',
        classe: 'uccelli'
    },

    {
        nome: 'balena',
        famiglia: 'balenidi',
        classe: 'mammiferi'
    },

    {
        nome: 'falena',
        famiglia: 'lepidotteri',
        classe: 'insetti'
    },

    {
        nome: 'carpa',
        famiglia: 'ciprinidae',
        classe: 'pesci'
    },

    {
        nome: 'rana',
        famiglia: 'ranidae',
        classe: 'anfibi'
    },

]

const mammals = [];

for (let i = 0; i < animals.length; i++) {

    const animalFam = animals[i];
    console.log(animalFam);

    if (animalFam.classe === 'mammiferi') {
        mammals.push(animalFam.nome);
    }
}

console.log(mammals);