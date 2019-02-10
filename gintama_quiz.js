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
	    "Shounen Jump",
	    "Shojo",
	    "Sci-Fi",
	    "Seinen"
        ],
    },
    {
	type: "list",
	name: "shinpachi",
	message: "How old is Shimura Shinpachi (at least in Season 1?)",
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
    },
    { 
	type: "list",
	name: "aliens",    
	message: "The aliens that have taken over Gintama universe are referred to as what? ",
	choices: [
	    "Tamanori",
	    "Sadaharu",
	    "Amanto",
	    "Starry Sky People"
        ]
    },
    { 
	type: "list",
	name: "faction",    
	message: "What faction is Katsura Kutarou a leader of?",
	choices: [
	    "Edo",
	    "Kopancha",
	    "Yato",
	    "Joui"
        ]
    },
    { 
	type: "list",
	name: "setting",    
	message: "Where does Gintama take place (the setting)?",
	choices: [
	    "Kyoto",
	    "Meiji",
	    "Hokkaido",
	    "Edo"
        ]
    },
    { 
	type: "list",
	name: "explosive",    
	message: "What is the name of Banzou's discreet, explosive invention that looks like a really dull figurine?",
	choices: [
	    "Time Bomb",
	    "Jani",
	    "Justaway",
	    "Inugami"
        ]
    }
];

const answerKey = [
	"2006", 
	"Silver Soul", 
	"Shounen Jump", 
	"16", 
	"Sakata Gintoki", 
	"Sadaharu",
	"Amanto",
	"Joui",
	"Edo",
	"Justaway"
];

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
    if (answers.aliens === answerKey[6]) {
	correctCount++;
    }
    if (answers.faction === answerKey[7]) {
        correctCount++;
    }
    if (answers.setting === answerKey[8]) {
	correctCount++;
    }
    if (answers.explosive === answerKey[9]) {
	correctCount++;
    };
    console.log(chalk.red(`${correctCount}/${gintamaQuestions.length} questions answered correctly!\n`));
});

function clear() {
    process.stdout.write('\x1Bc');
};
