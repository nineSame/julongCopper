/**
 * Created by nineSame on 2018/5/23.
 */
$(function () {
    setLiMask();
    setScreenMask();
})

//显示图片hover的遮罩
function setLiMask() {

    if(document.body.clientWidth < 480){
        return;
    }

    $('#img_list li').mouseenter(function () {
//        console.log($(this).index());
        $('img',this).css('transform','scale(1.1)');
        $('._title',this).css({
            "background-color":"#bb9205",
            "color":"#fff"
        });
        $('i',this).css('display','block');

    })

    $('#img_list li').mouseleave(function () {
//        console.log($(this).index());
        $('img',this).css('transform','scale(1)');
        $('._title',this).css({
            "background-color":"#f0f0f0",
            "color":""
        });
        $('i',this).css('display','none');

    })
}




//遮罩轮播层
function setScreenMask() {
    $('#mask1').hide();
    $('#mask2').hide();
    $('#img_list li').click(function (ev) {
//       alert(document.body.clientWidth);

        if(document.body.clientWidth < 480){
            $('#mask2').css("visibility", "visible");
            $('#mask2').slideDown();
            ev.preventDefault;
            $(document).bind('mousewheel', function(event, delta) { return false; });
            $('html,body').addClass('ovfHidden');
            return;
        }
        else {
            $('#mask1').css("visibility", "visible");
            $('#mask1').slideDown();
            ev.preventDefault;
            $(document).bind('mousewheel', function(event, delta) { return false; });
        }
    })

    $('.back').click(function () {
        $('#mask1').slideUp();
        $(document).unbind('mousewheel');
    })

    $('.mobile_back').click(function () {
        $('#mask2').slideUp();
        $(document).unbind('mousewheel');
        $('html,body').removeClass('ovfHidden');
        $(".searchbox").hide();
    })
}


/**************************************banner**********************************/
function getStyle(obj, attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};
//简易的运动方法
function move(obj, attr, distance, step, frequency, endFn) {
    //参数  运动物体、变化属性、目标点值、步长（运动速度）、调用频率、回调函数
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

function setBannerData() {
    $.ajax({
        url: ServerUrl + 'website/json/news_list.json',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            // console.log(1111,json);
            if(json.resCode == 200){

                var data = json.data;
                var liHtml = '';
                for(var i=0;i<data.length;i++){
                    var item = data[i];
                    arrImg.push('img/' + item.src);
                    arrTitle.push(item.title);
//                        arrRead.push(item.click);
                }

                initBannerData();
            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}

//初始化banner数据
function initBannerData(){
    //初始化banner数据
    aLi[0].getElementsByTagName('img')[0].src = arrImg[0];
    aLi[0].getElementsByTagName('h3')[0].innerHTML = arrTitle[0];
    $('.num .now').html(1);
    $('.num .all').html(arrTitle.length);
    $('#mobile_mask_title').html(arrTitle[0]);
//        aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[0];
//        aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[0];
    aLi[1].getElementsByTagName('img')[0].src = arrImg[1];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[1];
//        aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[1];
//        aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[1];
}

var oWrap = document.getElementsByClassName("banner_wrap")[0],
    oPrev = document.getElementById('mask2').getElementsByClassName('prev')[0],
    oNext = document.getElementById('mask2').getElementsByClassName('next')[0];
aLi = $(".banner_wrap li");

//模拟banner数据
arrImg = [];
arrTitle = [];
timer = null;
num = 0;

oWrap.moved = true;



//设置下一页点击
oNext.onclick = function(liWidth){

    if(!oWrap.moved){
        return;
    }
    aLi[1].style.position = 'absolute';
    aLi[1].style.top = '0';
    liWidth = parseInt(window.getComputedStyle(aLi[1]).width);
    // console.log(liWidth);
    aLi[1].style.left = liWidth + 'px';

    num++;
    if(num == arrImg.length){
        num = 0;
    }
    // aImg[1].src = arrImg[num];
    aLi[1].getElementsByTagName('img')[0].src = arrImg[num];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[num];
    $('#mobile_mask_title').html(arrTitle[num]);
    $('.num .now').html(num + 1);
    $('.num .all').html(arrTitle.length);

//        aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[num];
//        aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[num];
    move(oWrap, 'left', -liWidth, 20, 20, function(){
        // aImg[0].src = aImg[1].src;
        aLi[0].getElementsByTagName('img')[0].src = aLi[1].getElementsByTagName('img')[0].src;
        aLi[0].getElementsByTagName('h3')[0].innerHTML = aLi[1].getElementsByTagName('h3')[0].innerHTML;
//            aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML;
//            aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML;
        oWrap.style.left = '0';
    });
};

//设置上一页点击
oPrev.onclick = function(liWidth){
    if(!oWrap.moved){
        return;
    }
    aLi[1].style.position = 'absolute';
    aLi[1].style.top = '0';
    liWidth = parseInt(window.getComputedStyle(aLi[1]).width);
    aLi[1].style.left = -liWidth + 'px';

    num--;
    if(num < 0) {
        num = arrImg.length - 1;
    }
    // aLi[1].src = arrImg[num];
    aLi[1].getElementsByTagName('img')[0].src = arrImg[num];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[num];
    $('#mobile_mask_title').html(arrTitle[num]);
//        aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[num];
//        aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[num];
    move(oWrap, 'left', liWidth, 20, 20, function(){
        // aLi[0].src = aLi[1].src;
        aLi[0].getElementsByTagName('img')[0].src = aLi[1].getElementsByTagName('img')[0].src;
        aLi[0].getElementsByTagName('h3')[0].innerHTML = aLi[1].getElementsByTagName('h3')[0].innerHTML;
//            aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML;
//            aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML;
        oWrap.style.left = '0';
    })
};

setBannerData();


$('#mask2 .second_banner').css("margin-top",$(window).height()/2 - 150 + 'px')

/**************************************banner的hover**********************************/
var aBannerItem = oWrap.getElementsByTagName('li');

function setBannerHover() {
    for (var i = 0; i < aBannerItem.length; i++){

        aBannerItem[i].onmouseover = function () {
            var oTitle = this.getElementsByTagName('h3')[0];
            var oImg = this.getElementsByTagName('img')[0];

            this.style.background = "rgb(243,237,227)";
            oTitle.style.color = "rgb(186,145,33)";
            oImg.style.transform = "scale(1.1)";
        };

        aBannerItem[i].onmouseout = function () {
            var oTitle = this.getElementsByTagName('h3')[0];
            var oImg = this.getElementsByTagName('img')[0];

            this.style.background = "#f9f7f0";
            oTitle.style.color = "#000";
            oImg.style.transform = "scale(1)"
        }
    }
}

/**************************************手机端遮罩的拖拽滑动**********************************/
//var mask2 = document.getElementById('mask2');
//    mask2.addEventListener('touchstart',touch, false);
//    mask2.addEventListener('touchmove',touch, false);
//    mask2.addEventListener('touchend',touch, false);
//    var downX = null;
//    var upX = null;
//    function touch (event) {
//
//            downX = null;
//            upX = null;
//            var event = event || window.event;
//
//
//            switch (event.type) {
//                case "touchstart":
////                oInp.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
//                    downX = event.touches[0].clientX;
//                    console.log(downX);
//                    break;
//                case "touchend":
////                oInp.innerHTML = "<br>Touch end (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
//                    upX = event.changedTouches[0].clientX;
//                    console.log(upX);
//                    break;
//                case "touchmove":
//                    event.preventDefault();
////                oInp.innerHTML = "<br>Touch moved (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
//                    console.log('touchmove');
//            }
//
//            console.log('DOWN'+downX);
//
//    }





//


//    function slideMask2(event) {
//        var downX = null;
//        var upX = null;
//        $('#mask2').on('mousedown',function () {
////            console.log(ev.clientX);
//            if(event.touches.length == 1){
//                console.log(ev.touches[0].clientX);
//                downX = ev.clientX;
//            }
//
//        })
//                .on('mouseup',function () {
////                    console.log(ev.clientX);
//                    if (event.touches.length == 1){
//                        console.log(ev.touches[0].clientX);
//                        upX = ev.clientX;
//                    }
//
//                    if (downX < upX){
//                        //上一张
//                        oPrev.click();
//                    }else if(downX > upX) {
//                        //下一张
//                        oNext.click();
//                    }
//                })
//
//
//
//    }
//
//    slideMask2();


