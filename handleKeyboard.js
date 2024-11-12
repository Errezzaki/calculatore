document.addEventListener('keydown', (event) => {
    const key = event.key;

    switch (key) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            // Handle number keys (0-9)
            calculer('ch', key);
            break;
        case '+':
            calculer('op', '+');
            break;
        case '-':
            calculer('op', '-');
            break;
        case '*':
        case 'x':
            calculer('op', 'x');
            break;
        case '/':
            calculer('op', '/');
            break;
        case 'Enter':
        case '=':
            // Handle Enter key or "=" key for equals
            calculer('eg', '=');
            break;
        case '.':
            calculer('dec', '.');
            break;
        
        case 'Escape':
            // Clear the screen with Backspace or Escape
            calculer('sp', 'C');
            break;
        default:
            // Ignore other keys
            break;
    }
});