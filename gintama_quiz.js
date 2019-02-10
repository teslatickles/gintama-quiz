// Gintama quiz -- but, really just a fun way to practice Node/Inquirer!

'use strict'

const inquirer = require('inquirer');
const commander = require('commander');
const chalk = require("chalk");

clear();

console.log(chalk.blue(`Gintama Quiz #1\n`));

const gintamaQuestions = [ 
    {
	type: "list",
	name: "anime",
	message: "What year did Gintama (anime series) first air?",
	choices: [
	    "2000",
	    "1995",
	    "2006",
	    "2010"
	],
    },
    {
	type: "list",
	name: "trans",
	message: "What does Gintama mean in English?",
	choices: [
	    "Silver Balls",
	    "Silver Soul",
            "Healthy Warrior",
	    "Daddy Pullups"
	],
    },
    {
	type: "list",
	name: "manga",    
	message: "What manga style does Gintama read?",
	choices: [
	    "Shonen Jump",
	    "Shojo",
	    "Sci-Fi",
	    "Seinen"
        ],
    },
    {
	type: "list",
	name: "shinpachi",
	message: "How old is Shimura Shinpachi (at least in Season 1?",
	choices: [
	    "15",
	    "19",
	    "16",
	    "22"
	],
    },
    {
	type: "list",
	name: "gintoki",
	message: "What is the name of the main protagonist?",
	choices: [
	    "Okita Sougo",
	    "Gintama Sakata",
            "Kagura",
	    "Sakata Gintoki"
	],
    },
    {
	type: "list",
	name: "pet",    
	message: "What is the name of Kagura's pet dog god?",
	choices: [
	    "Toshiru",
	    "Sadaharu",
	    "Komohana",
	    "Inugami"
        ]
    }
];

const answerKey = ["2006", "Silver Soul", "Shonen Jump", "16", "Sakata Gintoki", "Sadaharu"];

inquirer.prompt(gintamaQuestions).then(answers => {

    let correctCount = 0;
    
    if (answers.anime === answerKey[0]) {
        correctCount++;
    } 
    if (answers.trans === answerKey[1]) {
   	correctCount++;
    } 
    if (answers.manga === answerKey[2]) {
        correctCount++;
    }
    if (answers.shinpachi === answerKey[3]) {
        correctCount++;
    } 
    if (answers.gintoki === answerKey[4]) {
   	correctCount++;
    } 
    if (answers.pet === answerKey[5]) {
        correctCount++;
    }
    console.log(chalk.red(`${correctCount}/${gintamaQuestions.length} questions answered correctly!\n`));
});

function clear() {
    process.stdout.write('\x1Bc');
};
