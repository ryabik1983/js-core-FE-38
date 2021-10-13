// console.log('До вызова setTimeout');
// setTimeout(() => {console.log('Вызов отложенной функции 1000')}, 1000
// );
// setTimeout(() => {console.log('Вызов отложенной функции 2000')}, 2000
// );
// setTimeout(() => {console.log('Вызов отложенной функции 5000')}, 5000
// )
// console.log('После вызова setTimeout');

// const date1 = Date.now();
// console.log(date1);

// const timerId = setTimeout(() => {
//   const date2 = Date.now();
// console.log(date1);
// console.log(date2);
// console.log(date2 - date1);
// }, 3000);


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

const timer = {
    start(){
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();

            // console.log('currentTime', currentTime);
            // console.log('startTime', startTime);
            // console.log('object!');
            const deltaTime = currentTime - startTime;
            const {days, hours, mins, secs} = getTimerComponents(deltaTime);
            // console.log(timeComponents);
            console.log(`${days}:${hours}:${mins}:${secs}`);
        }, 1000);
    },
}
timer.start();
function getTimerComponents (time) {
    const days = pad (Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs};

};

function pad(value) {
    return String(value).padStart(2, "0");
  };
