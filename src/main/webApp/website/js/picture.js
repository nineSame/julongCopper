/**
 * Created by nineSame on 2018/5/23.
 */
$(function () {
    setLiMask();
    setScreenMask();
    setBannerData();
})

var mask1_ready = false;

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

            setMask1();
            mask1_ready = true;

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

function setMask1() {
    if (mask1_ready == false){
        $('.pgwSlideshow').pgwSlideshow({
            transitionEffect:'sliding',
            autoSlide:false
        });
    }
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

    aLi[1].getElementsByTagName('img')[0].src = arrImg[1];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[1];

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

    move(oWrap, 'left', -liWidth, 20, 20, function(){
        // aImg[0].src = aImg[1].src;
        aLi[0].getElementsByTagName('img')[0].src = aLi[1].getElementsByTagName('img')[0].src;
        aLi[0].getElementsByTagName('h3')[0].innerHTML = aLi[1].getElementsByTagName('h3')[0].innerHTML;

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
    $('.num .now').html(num + 1);   //此处用+1表示当前编号，本身序号在上面的的递减中处理过了，易混淆，所以备注一下
    $('.num .all').html(arrTitle.length);

    move(oWrap, 'left', liWidth, 20, 20, function(){
        // aLi[0].src = aLi[1].src;
        aLi[0].getElementsByTagName('img')[0].src = aLi[1].getElementsByTagName('img')[0].src;
        aLi[0].getElementsByTagName('h3')[0].innerHTML = aLi[1].getElementsByTagName('h3')[0].innerHTML;

        oWrap.style.left = '0';
    })
};

// setBannerData();


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

var oMask2 = document.getElementById('mask2');

var downX,upX;
oMask2.addEventListener('touchstart',function (event) {
    if (event.touches.length == 1){
        // alert(event.touches[0].clientX);
        downX = event.touches[0].clientX;
    }
},false);

oMask2.addEventListener('touchend',function (event) {
        // alert(event.changedTouches[0].clientX);
        upX = event.changedTouches[0].clientX;

    if (downX < upX){
        oPrev.click();
    }else if(downX > upX){
        oNext.click();
    }
},false);




