

$(function () {
    banner();   //banner处理
    //news();     //新闻处理
});
/*****/

//banner处理
function banner() {
    // //本地数据
    // $.ajax({
    //     url: ServerUrl + 'website/json/banner.json',
    //     type: 'get',
    //     dataType: 'json',
    //     success: function (json) {
    //         //var data = json.data;
    //         console.log(1111,json);
    //         if(json.resCode == 200){
    //
    //             var data = json.data;
    //             var liHtml = '';
    //             for(var i=0;i<data.length;i++){
    //                 var item = data[i];
    //                 liHtml += '<li><img src="'+ ServerUrl +'website/img/' +item.src+'"></li>'
    //             }
    //             console.log(liHtml);
    //             $('#animation>ul').append(liHtml);
    //             $('#animation').terseBanner({btn:true});
    //         }else{
    //             alert(json.resMsg);
    //         }
    //     },
    //     error: function () {
    //         alert('err')
    //     }
    // });

    $.ajax({
        url: ServerUrl + 'banner/display',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            console.log(1111,json);
            if(json.resCode == 200){

                var data = json.data;
                var liHtml = '';
                for(var i=0;i<data.length;i++){
                    var item = data[i];
                    liHtml += '<li><img src="'+'http://'+ remoteUrl +item.tplj+'"></li>'
                }
                console.log(liHtml);
                $('#animation>ul').append(liHtml);
                $('#animation').terseBanner({btn:true});
            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}

//新闻处理
//function news() {
    /****************新闻选项卡切换****************************/
    var oPart1Left = document.getElementsByClassName('part1_left')[0];
    var aTabSels = oPart1Left.getElementsByClassName('sel');
    var aTabs = oPart1Left.getElementsByClassName('part1_tab');

    for (var i = 0; i  < aTabSels.length; i++) {
        aTabSels[i].index = i;

        aTabSels[i].onmouseover = function () {
            unActive();
            $(this).addClass('active');
            hideTabs();
            aTabs[this.index].style.display = 'block';
        }
    }

//}




function hideTabs() {
    for (var i = 0; i < aTabs.length; i++){
        aTabs[i].style.display = 'none';
    }
}

function unActive() {
    for (var i = 0; i < aTabSels.length; i++){
        aTabSels[i].className = 'sel';
    }
}


/**********************新闻选项卡的hover事件********************************/

var aFTW = oPart1Left.getElementsByClassName('first_tab_wrap');
for (var i = 0; i < aFTW.length; i++){

    function FTW_active(obj) {
        var oImg = obj.getElementsByTagName('img')[0];
        var oTextBox = obj.getElementsByClassName('text_box')[0];
        var oH = oTextBox.getElementsByTagName('h3')[0];
        var oTime = oTextBox.getElementsByTagName('span')[0];
        var oP = oTextBox.getElementsByTagName('p')[0];
        oTextBox.style.background = '#f2eee3';
        oImg.style.transform = "scale(1.1)";
        oH.style.color = "#bb9205";
        oTime.style.color = "#bb9205";
        oP.style.color = "#bb9205";

    }

    function FTW_unactive(obj) {
        var oImg = obj.getElementsByTagName('img')[0];
        var oTextBox = obj.getElementsByClassName('text_box')[0];
        var oH = oTextBox.getElementsByTagName('h3')[0];
        var oTime = oTextBox.getElementsByTagName('span')[0];
        var oP = oTextBox.getElementsByTagName('p')[0];
        oTextBox.style.background = '#f9f7f0';
        oImg.style.transform = "scale(1)";
        oH.style.color = "#3b3b3b";
        oTime.style.color = "#3b3b3b";
        oP.style.color = "#3b3b3b";
    }

    aFTW[i].onmouseover = function () {
        FTW_active(this);

    }

    aFTW[i].onmouseout = function () {
        FTW_unactive(this);
    }
}

var aListBox = oPart1Left.getElementsByClassName('list_box');


for (var i = 0; i < aListBox.length; i++){
    aListBox[i].onmouseover = function () {
        var oListText = this.getElementsByClassName('list_text')[0];
        oListText.style.color = "#bb9205";
    }

    aListBox[i].onmouseout = function () {
        var oListText = this.getElementsByClassName('list_text')[0];
        oListText.style.color = "#3b3b3b";
    }
}

/*****************************股票模块**********************************************/
//
// var oRealTimeInfo = document.getElementById('real_time_info');
// var aGP_list = oRealTimeInfo.getElementsByTagName('li');
// var oMainLeft = document.getElementsByClassName('main_left')[0];
// var aPics = oMainLeft.getElementsByTagName('li');
//
//
//
// function hidePics() {
//     for (var i =0 ; i < aPics.length; i++){
//         aPics[i].style.display = 'none';
//     }
// }
//
// for (var i = 0; i < aGP_list.length; i++){
//     aGP_list[i].index = i;
//
//     aGP_list[i].onmouseover = function () {
//         this.style.background = "#bb9205"
//
//         $(this).find('span').css({"color":"#fff","font-weight":"bold"});
//         hidePics();
//         aPics[this.index].style.display = 'block';
//         // alert($(this).attr("class"))
//         if ($(this).attr("class") == "stock_up"){
//             $(this).find('span:last-child').css("background-position","-40px 0")
//         }
//         if ($(this).attr("class") == "stock_down"){
//             $(this).find('span:last-child').css("background-position","-60px 0")
//         }
//     }
//
//     aGP_list[i].onmouseout = function () {
//         this.style.backgroundColor = "rgba(255,255,255,0.8)";
//         $(this).find('span').css({"color":"#7c7c7c","font-weight":"normal"});
//         hidePics();
//         if ($(this).attr("class") == "stock_up"){
//             $(this).find('span:last-child').css("background-position","0 0")
//         }
//         if ($(this).attr("class") == "stock_down"){
//             $(this).find('span:last-child').css("background-position","-20px 0")
//         }
//     }
// }


/**************************************banner滑动**********************************/
function getStyle(obj, attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

function move(obj, attr, distance, step, frequency, endFn) {
    if(!obj.moved) return;
    var startVal = parseInt(getStyle(obj, attr));
    var times = 0;
    obj.moved = false;
    step = distance > 0 ? step : -step;
    clearInterval(obj.move);
    obj.move = setInterval(function(){
        obj.style[attr] = parseInt(getStyle(obj, attr)) + step + 'px';
        times ++;
        if(Math.abs(step * times) > Math.abs(distance)) {
            clearInterval(obj.move);
            obj.style[attr] = startVal + distance + 'px';
            obj.moved = true;
            endFn && endFn();
        }

    }, frequency)
}


// oBanner = $(".banner_wrap"),
var oWrap = document.getElementsByClassName("ul1")[0],
    oPrev = document.getElementsByClassName('news_box')[0].getElementsByClassName('prev')[0],
    oNext = document.getElementsByClassName('news_box')[0].getElementsByClassName('next')[0],
    aBannerLi = $(".ul1_li"),
    timer = null,
    num = 0;

//假数据
var li_1_img  = ["./img/e70414051f1447e482e390a9e6bd6050.jpg","./img/building-2762319_640.jpg","./img/garzweiler-2515791_640.jpg"];
var li_2_img = ["./img/smelter-597529_640.jpg","./img/structure-353006_640.jpg","./img/work-1000618_640.jpg"];

var IMGARR = [li_1_img,li_2_img];
oWrap.moved = true;




function setImg(obj,arr) {
    var aLi = obj.getElementsByTagName('ul')[0].getElementsByTagName('li');
    for (var i = 0; i < aLi.length; i++){
        aLi[i].index = i;
        var oImg = aLi[i].getElementsByTagName('img')[0];
        oImg.src = arr[i];
    }
}

function exchangeImg(obj1,obj2) {
    var aLi1 = obj1.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var aLi2 = obj2.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var temp = [];
    for (var i = 0; i < aLi1.length; i++){
        temp.push(aLi1[i].getElementsByTagName('img')[0].src);
    }
    for (var i = 0; i < aLi2.length; i++){
        aLi2[i].getElementsByTagName('img')[0].src = temp[i];
    }
}


//初始化数据
setImg(aBannerLi[0],IMGARR[0]);
setImg(aBannerLi[1],IMGARR[1]);


function nextNews() {
    // alert(1)
    if(!oWrap.moved){
        return;
    }
    aBannerLi[1].style.position = 'absolute';
    aBannerLi[1].style.top = '0';
    aBannerLi[1].style.left = '454px';

    num++;

    if(num == aBannerLi.length){
        num = 0;
    }
    // aImg[1].src = arrImg[num];

    setImg(aBannerLi[1],IMGARR[num]);
    move(oWrap, 'left', -454, 40, 20, function(){
        // aImg[0].src = aImg[1].src;
        exchangeImg(aBannerLi[1],aBannerLi[0]);
        oWrap.style.left = '0';
    });
}

oNext.onclick = nextNews;

oPrev.onclick = function(){


    if(!oWrap.moved){
        return;
    }
    aBannerLi[1].style.position = 'absolute';
    aBannerLi[1].style.top = '0';
    aBannerLi[1].style.left = '-454px';

    num--;
    if(num < 0) {
        num = aBannerLi.length - 1;
    }
    // aLi[1].src = arrImg[num];
    setImg(aBannerLi[1],IMGARR[num]);

    move(oWrap, 'left', 454, 40, 20, function(){
        // aLi[0].src = aLi[1].src;
        exchangeImg(aBannerLi[1],aBannerLi[0]);
        oWrap.style.left = '0';
    })
}

oPrev.onmouseover = function () {
    this.style.backgroundPosition = '0 -27px';
}
oPrev.onmouseout = function () {
    this.style.backgroundPosition = '0 0';
}
oNext.onmouseover = function () {
    this.style.backgroundPosition = '-27px -27px';
}
oNext.onmouseout = function () {
    this.style.backgroundPosition = '-27px 0';
}


var aLi2 = document.getElementsByClassName('ul2_li');
$('.ul2_li').find('a').attr("href","activities.html")

for (var i = 0; i < aLi2.length; i++){
    aLi2[i].onmouseover = function () {
        var oImg = this.getElementsByTagName('img')[0];
        var oRight = this.getElementsByClassName('box_right')[0];
        var oTitle = oRight.getElementsByClassName('dec')[0];
        var oDate = oRight.getElementsByClassName('date')[0];


        oImg.style.transform = 'scale(1.1)';
        oRight.style.backgroundColor = "#bb9205";
        oTitle.style.color = "#fff";
        oDate.style.color = "#fff";
    }

    aLi2[i].onmouseout = function () {
        var oImg = this.getElementsByTagName('img')[0];
        var oRight = this.getElementsByClassName('box_right')[0];
        var oTitle = oRight.getElementsByClassName('dec')[0];
        var oDate = oRight.getElementsByClassName('date')[0];


        oImg.style.transform = 'scale(1)';
        oRight.style.backgroundColor = "#fff";
        oTitle.style.color = "#414141";
        oDate.style.color = "#414141";
    }
}


var ZTtimer = null;

function setZTtimer() {
    ZTtimer = setInterval(
        function () {
            nextNews();
        },5000
    )
}

setZTtimer();

oWrap.onmouseover = function () {
    clearInterval(ZTtimer);
}
oWrap.onmouseout = function () {
    setZTtimer();
}

/************************part3交互*****************************************/
var aPart3Items = document.getElementsByClassName('part3')[0].getElementsByTagName('li');
for (var i = 0; i < aPart3Items.length; i++){
    aPart3Items[i].onmouseover = function () {
        var oIcon = this.getElementsByTagName('i')[0];
        var oTitle = this.getElementsByClassName('title')[0];

        oIcon.style.transform = 'rotateY(180deg)';
        oTitle.style.color = "#bb9205";
    }

    aPart3Items[i].onmouseout = function () {
        var oIcon = this.getElementsByTagName('i')[0];
        var oTitle = this.getElementsByClassName('title')[0];

        oIcon.style.transform = 'rotateY(0deg)';
        oTitle.style.color = "#000";
    }
}
