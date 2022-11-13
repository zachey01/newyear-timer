function timer() {
    let nowDate = new Date();
    let year = nowDate.getFullYear() + 1
    let achiveDate = new Date(year,0,0,0,0,0);
    let result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        let elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    let days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let elmnt = document.getElementById('timer');
    elmnt.innerHTML = '<h2>' + 'Days: ' + days + '<br>' + 'Hours: ' + hours + '<br>' + 'Minutes: ' + minutes + '<br>' + 'Seconds: ' + seconds + '</h2>';
    setTimeout(timer, 1000);
}
window.onload = function() {
    timer();
}