document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input');

    const clearDisplay = () => {
        display.value = '';
    };

    const deleteLast = () => {
        display.value = display.value.slice(0, -1);
    };

    const appendCharacter = (char) => {
        display.value += char;
    };

    const calculateResult = () => {
        try {
            display.value = eval(display.value.replace('%', '/100'));
        } catch (error) {
            display.value = 'Error';
        }
    };

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            switch (buttonText) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DEL':
                    deleteLast();
                    break;
                case '=':
                    calculateResult();
                    break;
                default:
                    appendCharacter(buttonText);
                    break;
            }
        });
    });
});
