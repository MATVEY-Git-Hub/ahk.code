var inputField = document.getElementById("myInput2");

  inputField.addEventListener("input", function() {
    var inputValue = inputField.value;
    if (inputValue.length >= 1 && inputValue.charAt(0) !== "/") {
      inputField.value = "/" + inputValue;
    }
    if (inputValue.includes("/") && inputValue.lastIndexOf("/") > 0) {
      inputField.value = inputValue.substr(0, inputValue.lastIndexOf("/")) + inputValue.substr(inputValue.lastIndexOf("/") + 1);
    }
  });

const inputField1 = document.getElementById('myInput');
const saveButton1 = document.getElementById('saveBtn');

const inputField2 = document.getElementById('myInput2');
const saveButton2 = document.getElementById('saveBtn2');

const savedC = document.getElementById('savedC');
const savedZ = document.getElementById('savedZ');

// При клике на первую кнопку сохранения...
saveButton1.addEventListener('click', function() {
  // Получаем значение из первого поля ввода
  const inputValue1 = inputField1.value;
  // Сохраняем значение в локальном хранилище
  localStorage.setItem('myInputValue1', inputValue1);
  Toastify({
    text: "Задержка сохранена!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #2ecc71, #2ecc71",
    },
    onClick: function(){} // Callback after click
  }).showToast();
});

// При клике на вторую кнопку сохранения...
saveButton2.addEventListener('click', function() {
  // Получаем значение из второго поля ввода
  const inputValue2 = inputField2.value;
  // Сохраняем значение в локальном хранилище
  localStorage.setItem('myInputValue2', inputValue2);
  Toastify({
  text: "Команда сохранена!",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #2ecc71, #2ecc71",
  },
  onClick: function(){} // Callback after click
}).showToast();
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

const buttons = document.querySelectorAll('.clipboard-btn');
const copyToast = document.getElementById('copy-toast');
      
for (const button of buttons) {
   button.addEventListener('click', () => {
      const textToCopy = `%${button.id}%`;
      navigator.clipboard.writeText(textToCopy).then(() => {
         console.log('Text copied to clipboard');
         Toastify({
          text: "Текст скопирован в буфер обмена!",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #2ecc71, #2ecc71",
          },
          onClick: function(){} // Callback after click
        }).showToast();
      }).catch((err) => {
         console.error('Failed to copy text: ', err);
      });
   });
}

function copy(){
    let inputValue2 = inputField2.value;
    if (!inputValue2.startsWith('/')) {
      Toastify({
        text: 'Команда должна начинаться со знака "/"',
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #cc2e55, #cc2e55)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
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
    Toastify({
      text: "Код скопирован!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #2ecc71, #2ecc71",
      },
      onClick: function(){} // Callback after click
    }).showToast();
}
