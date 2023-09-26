const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let finalStr = "";

const ques6 = function() {
  rl.question(`Which sport is your absolute favourite?  `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    finalStr += `Favourite sport is  :  ${answer}\n`;
    console.log(finalStr);




    rl.close();

  });
};
const ques5 = function(callback) {
  rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);


    finalStr += `Favourite dish to eat in meal is :  ${answer}\n`;
    callback();


  });
};
const ques4 = function(callback) {
  rl.question(`Which meal is your favourite ?(eg: dinner, brunch, etc.) `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    finalStr += `favourite meal is :  ${answer}\n`;

    callback(ques6);

  });
};
const ques3 = function(callback) {
  rl.question(`What do you listen to while doing that?`, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    //finalProfile.push("Like to listen:",answer);
    finalStr += `Like to listen:  ${answer}\n`;
    callback(ques5);

  });
};
const ques2 = function(callback) {
  rl.question(`What's an activity you like doing?`, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);


    finalStr += `Favourite Activity is:  ${answer}\n`;
    callback(ques4);

  });
};
const ques1 = function(callback) {
  rl.question(`'What's your name? Nicknames are also acceptable :)? `, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);


    finalStr += `Name is : ${answer} \n`;
    callback(ques3);

  });

};

ques1(ques2);

