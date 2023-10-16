function omikujibutton(){
    <!--　以下、おみくじ結果を指示　-->
    var number=Math.random()
    var number=number*15
    var number=Math.floor(number)

    var omikuji=new Array("大吉", "吉", "吉", "吉", "中吉", "中吉", "中吉", "中吉", "中吉", "小吉", "小吉", "末吉", "末吉", "末吉", "末吉")
    var omikujiview=omikuji[number]

    var object=document.getElementById("omikuji")
    object.innerText=omikujiview
    object.style.fontSize='2.5em';
    document.body.style.backgroundImage="url('miffyopen1.jpg')";
}

    
<!--　以下、日付の表示を指示　-->
var datetime = new Date();
var year = datetime.getFullYear();
var month = datetime.getMonth() + 1;
var day = datetime.getDate();

var datetimeview =year + "年" + month + "月" + day + "日"

var object=document.getElementById("date");
object.innerText=datetimeview;
object.style.fontSize='1.2em';