var snowflake = document.getElementById('snowflakeD');
var arry = ['snowflake','./images/雪花.svg'];
function timing() {
    setTimeout(() => {
        establish()
    }, Math.round(Math.random()*10) * 1000);
}
var establish = () => {
    for (var i = 0; i < 10; i ++) {
        var img = document.createElement('img');
        img.className = arry[0];
        img.src = arry[1];
        img.style.left = Math.ceil(Math.random()*110) + '%';
        img.style.animationDuration = Math.ceil(Math.random()*20) + 's';
        img.addEventListener("animationend", function() {
            this.style.opacity = '0';
        });
        snowflake.appendChild(img);
    }
    timing()
}
setInterval(() => {
    var imgs = document.getElementsByClassName('snowflake');
    for (var b = 0; b < imgs.length; b ++) {
        if (imgs[b].style.opacity == '0') {
            snowflake.removeChild(imgs[b]);
        }
    }     
},2000)
establish()