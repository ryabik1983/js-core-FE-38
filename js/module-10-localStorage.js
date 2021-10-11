console.log(localStorage)
const form = document.querySelector('.form')
console.dir(form)

form.addEventListener('input', (e) => {
  //   console.log(e.target.name)
  if (e.target.name === 'firstInput') {
    localStorage.setItem('firstInput-data', e.target.value)
  } else if (e.target.name === 'secondInput') {
    localStorage.setItem('secondInput-data', e.target.value)
  } else {
    alert(`Что-то пошло не так!`)
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const { firstInput, secondInput } = e.target.elements
  const obj = {
    firstInput: firstInput.value,
    secondInput: secondInput.value,
  }
  localStorage.setItem('obj', JSON.stringify(obj)) // тут отправляемна бек
  localStorage.removeItem('firstInput-data')
  localStorage.removeItem('secondInput-data')
  firstInput.value = ''
  secondInput.value = ''
})

form.elements.firstInput.value = localStorage.getItem('firstInput-data')
form.elements.secondInput.value = localStorage.getItem('secondInput-data')

console.log('До вызова setTimeout');
setTimeout(() => {console.log('Вызов отложенной функции 1000')}, 1000
);
setTimeout(() => {console.log('Вызов отложенной функции 2000')}, 2000
);
setTimeout(() => {console.log('Вызов отложенной функции 5000')}, 5000
)
console.log('После вызова setTimeout');

// const logger = time => {
//   console.log(`Лог каждые ${time} ms, потому что не отменили таймаут - ${Date.now()}`);

// }
// setInterval(logger, 2000, 2000);
// const intervalId = setInterval(logger, 2000, 2000);
// console.log(intervalId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearInterval(intervalId);
// }


