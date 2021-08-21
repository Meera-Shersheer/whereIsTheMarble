




//Step 2 link every image with a clickable action
let images = Array.from(document.getElementsByClassName('cups-display'));

//Array.from to make sure that it makes an array
console.log(images);



//console.log("Hello"); to check the linking is correct
function restartGame() {
   //console.log("inside function")
    //1-reset all images to cup images

    for (let i = 0; i < images.length; i++) {
        document.getElementById(i+1).src = "./the game's image/cup.jpg"

        


    }

//2) reset game variables
 wronglives = 2;
 win = false;
 //3) find new random number
guessRandom();
}

let score = 0; // we can use var instead of let or we can leave it empty
let correctAnswer;
let wronglives = 2;
let win = false;

function correctAction() {//1)change the cup image into marble image

    document.getElementById(correctAnswer).src = "./the game's image/marble.jpg";
    //2)increase score
    score++ // or score+=1 or score= score+1
    //console.log(score);
    document.getElementById("scoreValue").innerHTML = score;
    //update win value
    win = true;

}

function wrongAction(index) {//1)change the cup image into wrong image

    document.getElementById(index).src ="./the game's image/wrong.jpg ";
    //2) decrease number of wrong lives
    wronglives--;
    console.log(wronglives);

}





function guessRandom() {
    correctAnswer = Math.ceil(Math.random() * 5);//call the random function that is built in the java script Math  library
    console.log(correctAnswer)

    //Step 1 Get random number
}
guessRandom()



for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        //addEventListener() a function that checks if an action occured on the "images" 
        // 'click' is the action
        // function(){} is the the response (behavior) to the action 

        if (wronglives != 0 && win == false ) {


            if (correctAnswer == (i + 1)) {
                // console.log("you are correct")
                correctAction();
                
            }
            else {
                // console.log("you are wrong")
                wrongAction(i + 1);
            }
        }

    });
}