let expression = "";
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      expression += button.textContent;
    } else if (button.classList.contains('operator')) {
      expression += ' ' + button.textContent + ' ';
    } else if (button.classList.contains('equal')) {
      try {
        expression = eval(expression).toString();
      } catch (error) {
        expression = 'Error';
      }
    } else if (button.classList.contains('clear')) {
      expression = '';
    } else if (button.classList.contains('delete')) {
      expression = expression.slice(0, -1);
    } else if (button.classList.contains('percentage')) {
      expression = (eval(expression) / 100).toString();
    }
    display.value = expression;
  });
});
