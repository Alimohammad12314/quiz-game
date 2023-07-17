const questions=[
 {
    que:'1) What is the boiling point of water ?',
     a:'50 C',
     b:'100 C',
     c:'150 C',
     d:'200 C',
     answ:'b'

 },
 {
    que:'2) Which fruit is associated with Issac Newton ?',
     a:'Apple',
     b:'Pear',
     c:'Pineapple',
     d:'Banana',
     answ:'a'

 },
 {
    que:'3) Which building was attacked on 9/11 ?',
     a:'Taj Mahal',
     b:'World Trade Center',
     c:'Statue of Liberty',
     d:'Twin Tower',
     answ:'b'

 },
 {
    que:'4) What is the capital of Australia ?',
     a:'Sydney',
     b:'Melbourne',
     c:'Canberra',
     d:'Brisbane',
     answ:'c'

 }


]

let index = 0;
let correct = 0,
 incorrect = 0,
 total = questions.length;
let questionBox = document.getElementById("quesbox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = questions[index]
    questionBox.innerText =data.que
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = questions[index]
        const ans = getAnswer()
        if (ans === data.answ) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (input) => {
            if (input.checked) {
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const quizEnd = () => {
   
    document.getElementsByClassName("box")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> <h2>Thank You for playing </h3><br> <h2>you've scored  ${correct} / ${total} !!</h2>
        </div>
    `
}
loadQuestion(index);