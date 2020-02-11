// 程式碼寫在這裡

let chi = 0;

$(document).ready(() =>{  //要用JavaScript操縱網頁的DOM元素時，必須等網頁完全載入後才可安全地進行操作，而要確保網頁載入，可使用jQuery的$( document ).ready()。
    $('#hitButton').click(evt =>{
        evt.preventDefault();
        chi ++;
        // $('#hitButton').html(`集氣(${chi})`);
        $('#hitButton').text(`集氣(${chi})`);
    })
})

let 大絕招 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(chi >= 5) {
            resolve('元氣玉');
        }else{
            reject('一個屁');
        }
    }, 3000)
});

大絕招.then(招式 => {
    $('#result').html(`使用了:${招式}`)
}).catch(err => {
    $('#result').html(`使用了:${err}`)
})