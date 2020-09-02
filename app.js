const btn = document.querySelector('.talk'); 
const content = document.querySelector('.content');

//speech
const greetings = ['Im good, glad you asked!', 'doing good!', 'leave me alone!'];
const weather = ['weather is fine', 'you need an Umbrella today', 'why are you asking this? you dont even go outside'];
const create = ['Im crated by a brilliant'];
const robot = ['No, Im not', 'Give me a captcha test. I can pass that!'];
const like = ['Yes, I do', 'No. I hate you'];
const dream = ['I only dream of helping you'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart =  function() {
    console.log('Voice is activated!');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'Sorry! I dont understand what you said';

    if(message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text =  finalText;
    };

    if(message.includes('how is the climate')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text =  finalText;
    };

    if(message.includes('who created you')) {
        const finalText = create[Math.floor(Math.random() * create.length)];
        speech.text =  finalText;
    };

    if(message.includes('are you a robo')) {
        const finalText = robot[Math.floor(Math.random() * robot.length)];
        speech.text =  finalText;
    };

    if(message.includes('Do you like me?')) {
        const finalText = like[Math.floor(Math.random() * like.length)];
        speech.text =  finalText;
    };

    if(message.includes('What do you dram about?')) {
        const finalText = like[Math.floor(Math.random() * like.length)];
        speech.text =  finalText;
    };
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};
