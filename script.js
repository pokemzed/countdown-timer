//Находим элементы страницы
const paragraph = document.querySelector('.timer')
const input = document.querySelector('.input')
const button = document.querySelector('.button')
const timerWrap = document.querySelector('.time__wrap')
const reload = document.querySelector('.reload')


button.addEventListener('click', (event) => {
    //Отключаем нажатие на кнопку
    event.target.style.display = 'none'
    reload.style.display = 'block'

    //Включаем вернхюю плашку
    timerWrap.style.display = 'flex'
    
    //Задержка для проигрывания анимации (можно отключить)
    setTimeout(goStartTimer, 970)

    function goStartTimer() {

        //Создаем переменную, в которой получаем значение в секундах
        let secondsInput = Number(input.value) * 60
        
        //Делаем проверку, чтобы ничего не наебнулось
        if(secondsInput){
            //Создаем интервал в 1 секунду
            let interval = setInterval(updateSeconds, 1000)
            //Создаем функцию с обновлением секунд
            function updateSeconds(){
                let minuts = Math.floor(secondsInput/60)
                let seconds = secondsInput % 60
                //Добавляем к секундам 0 для баланса и эстетики
                seconds = seconds < 10 ? '0' + seconds : seconds
                //Отключаем анимацию загрузки
                document.querySelector('.loaders').style.display = 'none'
                paragraph.innerHTML = `
                    ${minuts}:${seconds}
                `
                //Делаем проверку, если значение подошло к концу
                if(secondsInput == 0){
                    clearInterval(interval)
                    alert('Время вышло!')
                }
                secondsInput--
            }
        } else {
            //Если наебнулось
            location.reload()
            alert('Введите правильное значение в МИНУТАХ!')
        }

    }
})

reload.onclick = () => location.reload()