window.addEventListener('DOMContentLoaded', ()=>{

    

        function updateDateTime() {
            let dat = new Date(),
            hours = dat.getHours(),
            minutes = dat.getMinutes(),
            fullDay = dat.getDay(),
            time = document.querySelectorAll('.time'),
            day = document.querySelector('.day'); 
            body = document.querySelector('body');
            if (hours >= 21 && hours >= 0 && hours <= 6)  {
                body.style.background = "url('./img/night.jpg')"+" "+ "center"+" "+ "center/cover"+" "+"no-repeat"+" "+"fixed";
            }else if (hours > 6 && hours < 10 ){
                body.style.background = "url('./img/moning.jpg')"+" "+ "center"+" "+ "center/cover"+" "+"no-repeat"+" "+"fixed";
            }else if (hours >= 10 && hours < 18 ){
                body.style.background = "url('./img/day.jpg')"+" "+ "center"+" "+ "center/cover"+" "+"no-repeat"+" "+"fixed";
            }else if (hours >=18 && hours < 21 ){
                body.style.background = "url('./img/evening.jpg')"+" "+ "center"+" "+ "center/cover"+" "+"no-repeat"+" "+"fixed";
            };

            
            time[0].textContent = hours;
            if (minutes <=9 ){
                time[2].textContent = '0'+ minutes;
            }else{
                time[2].textContent = minutes;
            };
            
            

                if (fullDay == 0) {
                    day.textContent = 'воскресение';
                }else if (fullDay == 1) {
                    day.textContent = 'понедельник';
                }else if (fullDay == 2) {
                    day.textContent = 'вторник';
                }else if (fullDay == 3) {
                    day.textContent = 'Среда';
                }else if (fullDay == 4) {
                    day.textContent = 'четверг';
                }else if (fullDay == 5) {
                    day.textContent = 'пятница';
                }else if (fullDay == 6) {
                    day.textContent = 'суббота';
                }

                
            
            
        };  

        

    setInterval( updateDateTime , 1000 );
   
 
 
    
        


});