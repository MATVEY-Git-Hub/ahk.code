const inputField1 = document.getElementById('myInput');
const saveButton1 = document.getElementById('saveBtn');

const inputField2 = document.getElementById('myInput2');
const saveButton2 = document.getElementById('saveBtn2');


// При клике на первую кнопку сохранения...
saveButton1.addEventListener('click', function() {
  // Получаем значение из первого поля ввода
  const inputValue1 = inputField1.value;
  // Сохраняем значение в локальном хранилище
  localStorage.setItem('myInputValue1', inputValue1);
});

// При клике на вторую кнопку сохранения...
saveButton2.addEventListener('click', function() {
  // Получаем значение из второго поля ввода
  const inputValue2 = inputField2.value;
  // Сохраняем значение в локальном хранилище
  localStorage.setItem('myInputValue2', inputValue2);
});

// Проверяем, есть ли сохраненное значение для первого поля ввода в локальном хранилище...
const savedValue1 = localStorage.getItem('myInputValue1');
if (savedValue1) {
  // ...если есть, устанавливаем его в качестве значения первого поля ввода
  inputField1.value = savedValue1;
}

// Проверяем, есть ли сохраненное значение для второго поля ввода в локальном хранилище...
const savedValue2 = localStorage.getItem('myInputValue2');
if (savedValue2) {
  // ...если есть, устанавливаем его в качестве значения второго поля ввода
  inputField2.value = savedValue2;
}

function copy(){
    let inputValue2 = inputField2.value;
    if (!inputValue2.startsWith('/')) {
      alert('Команда должна начинаться со знака "/"');
      return;
    }
    const inputField = document.getElementById('myInput');
    let script = document.querySelector('#script')
    let comand = `:?:${inputField2.value}::`
    let sleep = `Sleep ${inputField.value}`
    let stroke = `${comand}\nSendMessage, 0x50,, 0x4190419,, A\n`;
    for (item of script.value.split('\n')){
        stroke += `SendInput, {F6}\n${sleep}\nSendInput, /${item} {enter}\n`
    }
    stroke += 'Return';
    console.log(stroke)

    navigator.clipboard.writeText(stroke);
}
