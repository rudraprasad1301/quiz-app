const quizdata=[ 
    {
        "question": "What is the capital of France?",
        "options": ["Paris", "London", "Berlin", "Madrid"],
        correct: 0


    }
    ,
    {
        "question": "What is the capital of Germany?",
        "options": ["Berlin", "Munich", "Hamburg", "Cologne"],
        correct: 0

    },
    {
        "question": "What is the capital of Italy?",
        "options": ["Rome", "Milan", "Naples", "Turin"]
        , correct: 0

    },
    {
        "question": "what is full form of HTML?",
        "options":[
            "Hyper Text Markup Language",
            "Hyper Text Marking Language",
            "Hyper Text Making language",
            "Hyper Text maintain Language"
        ],
        correct: 0
    
    }
    ,
    {
        "question": "what is full form of CSS??",
        "options":[
            "common style sheet",
            "Cascading Style Sheets",
            "color style sheet",
            "Computer Style Sheets"
        ]
        , correct: 1

    },
    {
        "question": "what is  JavaScript??",
        "options":[
            "Java Scripting Language",
            "Java Scripting sheet",
            "Java Scripting style",
            "programming language"

        ],
        correct: 3
    }



]
 const answerelement=document.querySelectorAll(".answer")
 const questionele = document.querySelector("#question");  
 const option1 = document.querySelector(".option1");  
const option2 = document.querySelector(".option2");  
const option3 = document.querySelector(".option3");  
const option4 = document.querySelector(".option4");  
 const submitbutton=document.querySelector('.btn');
 const quiz=document.querySelector('.quiz-section')
 let currentquiz=0;
 let score=0;
/*const loadquiz = () =>{
    const question=quizdata[currentquiz].question;
    const options=quizdata[currentquiz].options;
    console.log(questionele)
    questionele.innerText = question;
    console.log(option)
    option1.innerText = options[0];
    option2.innerText = options[1];
    option3.innerText = options[2];
    option4.innerText = options[3];
   */



 
 const loadquiz = () => {
    const currentQuestion = quizdata[currentquiz];  // Fetching the current question object
    const options = currentQuestion.options;
    let correct=currentQuestion.correct

    questionele.innerText = currentQuestion.question;  // Corrected usage
    option1.innerText = options[0];
    option2.innerText = options[1];
    option3.innerText = options[2];
    option4.innerText = options[3];
    currentquiz++;
};

loadquiz();
const selectedoption=()=>
{
    let ans_index;
    answerelement.forEach((ele, index) => {
        if(ele.checked)
        {
            ans_index=index
        }
    })
    return ans_index;
}
const clearans=()=>
{
    answerelement.forEach((ele)=>ele.checked=false)
}
submitbutton.addEventListener('click', () => {
    let userAnswer =selectedoption()
    if(userAnswer===quizdata[currentquiz].correct)
    {
        score++
    }
    

    if(currentquiz<quizdata.length-1)
    { clearans();
        loadquiz();
    }
    else{
        quiz.innerHTML = `
            <div class='result'>
                <h2>Your score is ${score}/${quizdata.length}</h2>
                <h3>Congratulations on completing the quiz!</h3>
                <button class='btn' onclick="location.reload()">Play Again</button>
            </div>`
    }


})

 