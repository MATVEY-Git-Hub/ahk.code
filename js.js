const inputField = document.getElementById('myInput');
const saveButton = document.getElementById('saveBtn');
// При клике на кнопку сохранения...
saveButton.addEventListener('click', function() {
    // Получаем значение из поля ввода
    const inputValue = inputField.value;
    // Сохраняем значение в локальном хранилище
    localStorage.setItem('myInputValue', inputValue);
  });
  // Проверяем, есть ли сохраненное значение в локальном хранилище...
const savedValue = localStorage.getItem('myInputValue');
if (savedValue) {
  // ...если есть, устанавливаем его в качестве значения поля ввода
  inputField.value = savedValue;
}


let script = document.querySelector('#script')
let sleep = `Sleep ${inputField.value}`

function copy(){
    let stroke = 'SendMessage, 0x50,, 0x4190419,, A\n';
    for (item of script.value.split('\n')){
        stroke += `SendInput, {F6}\n${sleep}\nSendInput, /${item} {enter}\n`
    }
    stroke += 'Return';
    console.log(stroke)

navigator.clipboard.writeText(stroke);
}
