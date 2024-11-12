// Load the click sound
const clickSound = new Audio('./audios/click.mp3');
const egaleSound = new Audio('./audios/egaleSound.mp3');
const quitterSound = new Audio('./audios/quitterSound.mp3');
const operationSound = new Audio('./audios/operationClick.mp3');


// Function to play sound
function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function playEgalSound(){
    egaleSound.currentTime = 0 ;
    egaleSound.play();

}

function playQuitterSound(){
    quitterSound.currentTime = 0 ;
    quitterSound.play();
}

function playOperationSound(){

    operationSound.currentTime = 0 ;
    operationSound.play();
}




document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    switch (key) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            // Handle number keys (0-9)
            calculer('ch', key);
            playClickSound();
            break;
        case '+':
            calculer('op', '+');
            playOperationSound();
            break;
        case '-':
            calculer('op', '-');
            playOperationSound();
            break;
        case '*':
        case 'x':
            calculer('op', 'x');
            playOperationSound();
            break;
        case '/':
            calculer('op', '/');
            playOperationSound();
            break;
        case 'Enter':
        case '=':
            calculer('eg', '=');
            playEgalSound();
            break;
        case '.':
            calculer('dec', '.');
            playClickSound();
            break;
        
        case 'Escape':
            // Clear the screen with Backspace or Escape
            calculer('sp', 'C');
            playQuitterSound();
            break;
        default:
            // Ignore other keys
            break;
    }
});