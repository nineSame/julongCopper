/**
 * Created by nineSame on 2018/5/9.
 */

$(function () {
    adjustPage();   //调整页面右边新闻选项框

    //设置滚轮事件
    document.body.onmousewheel = function () {
        adjustPage();
    }

    $('body').scroll(function () {
        adjustPage();
    })

    setPageTitleHover();  //设置新闻选项hover效果
});

var oPage = document.getElementsByClassName('detail_right')[0];
var oContent = document.getElementById('main_content');

oPage.style.position = 'fixed';
oPage.style.top = oPage.offsetTop + 'px';
var origin_top = oPage.offsetTop;
oPage.style.left = oContent.offsetLeft + oContent.offsetWidth - oPage.offsetWidth + 'px';


//调整页面右边新闻选项框
function adjustPage() {
    var scroolTop = document.documentElement.scrollTop;


    if (scroolTop < origin_top) {
        oPage.style.position = 'absolute';
        oPage.style.top = 0;
        oPage.style.bottom = '';
        oPage.style.left = oContent.offsetWidth - oPage.offsetWidth + 'px';
    }else if (scroolTop > origin_top && scroolTop < oContent.offsetHeight + oContent.offsetTop - oPage.offsetHeight){
        console.log(2222);
        oPage.style.position = 'fixed';
        oPage.style.top =  0;
        oPage.style.bottom = '';
        oPage.style.left = oContent.offsetLeft + oContent.offsetWidth - oPage.offsetWidth + 'px';

    }
    else {
        oPage.style.position = 'absolute';
        oPage.style.top = '';
        oPage.style.left = oContent.offsetWidth - oPage.offsetWidth + 'px';
        oPage.style.bottom = 0;
        oPage.style.right = 0;
    }
}

function setPageTitleHover() {
    var aPageLi = oPage.getElementsByTagName('li');

    for (var i = 0; i < aPageLi.length; i++){

        aPageLi[i].onmouseover = function () {
            var oLink = this.getElementsByTagName('a')[0];
            oLink.style.color = '#bb9205'
        }
        aPageLi[i].onmouseout = function () {
            var oLink = this.getElementsByTagName('a')[0];
            oLink.style.color = '#5c5c5c';
        }
    }
}




