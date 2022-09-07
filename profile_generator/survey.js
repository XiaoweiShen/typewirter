 const readline = require('readline');
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
// //const chalk = require('chalk');


const questions = [
 "What's your name? Nicknames are also acceptable :)",
 "What's an activity you like doing?",
 "What do you listen to while doing that?",
 "Which meal is your favourite (eg: dinner, brunch, etc.)",
 "What's your favourite thing to eat for that meal?",
 "Which sport is your absolute favourite?",
 "Where is the dream place you wish to go during vocation?"
];

const answers ={
  0:'',
  1:'',
  2:'',
  3:'',
  4:'',
  5:'',
  6:''
}


const mainrun = ()=>{
  let i = 0;// as use recursion , the varible can only define outside the func
  //below is the function use to recursion
  const recusionfunc = ()=>{
   if (i < questions.length) {
      rl.question(questions[i], (answer) => {
      answers[i]=answer;
      i++;
      recusionfunc();
      })
     } else {
       setTimeout(() => {   //have to put the console.log to asynchronize quene to get correct result . 
        console.log('---------------------------------------------------------------------------');
        console.log('Thanks for finish the survey, '+`${answers['0']}`+'!\n'+'Here is your generated profile:\n');
        console.log("Hello! My name is "+`${answers['0']}.`+'I like to listening to '+`${answers['2']} `+'while I am doing my hobby,which is '+`${answers['1']}. My favorite meal? of corse ${answers['3']} and ${answers['4']} is my favorite. I'm the big fans of ${answers['5']}.It is amazing if I can go to ${answers['6']} with the people I love!`);
        
        rl.close();        

      }, 1000);
    }
  };
 recusionfunc();//must invoke to start;
}  
  
mainrun();
