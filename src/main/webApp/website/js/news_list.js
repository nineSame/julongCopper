/**
 * Created by nineSame on 2018/5/9.
 */


$(function() {
    setFrontLinks(); //设置导航链接
    setSearchBox(); //设置模拟搜索框
    $('body').click(function(){bodyClicked();}); //添加点击其他位置收起搜索选项
    initBannerData();
    setBannerHover();//设置banner的hover效果
    setNewsListHover();//设置新闻列表的hover效果
});

/*****************************此部分js模拟sselect下拉列表的实现***************************/
var aSelShow = document.getElementsByClassName('sel-show');
var aSelOption = document.getElementsByClassName('sel-option');
var bd = document.getElementsByTagName('body')[0];
var oI = document.getElementsByClassName('second_search')[0].getElementsByTagName('i');
// var flag = false;  //用于判断是否打开下拉列表

//隐藏所有的下拉选项
function hideAll() {
    for (var i = 0; i < aSelOption.length; i++ ){
        aSelOption[i].style.display = 'none';
    }
}

//将所有下拉指示flag设置为false
function flagFalse() {
    for (var i = 0; i < aSelShow.length; i++){
        aSelShow[i].flag = false;
    }
}

//设置模拟搜索框
function setSearchBox() {
    for (var i = 0; i < aSelShow.length;i++){
        aSelShow[i].index = i;
        this.flag = false;  //true表示显示
        aSelShow[i].onclick = function () {

            hideAll();

            this.flag = !this.flag;

            if (this.flag == true) {
                aSelOption[this.index].style.display = 'block';
                flagFalse();
                this.flag = true;
            } else {
                aSelOption[this.index].style.display = 'none';
            }

            var aItems = aSelOption[this.index].getElementsByTagName('li');

            for (var j = 0; j < aItems.length; j ++){
                aItems[j].onclick = function () {
                    sChoose = this.innerHTML;
                    $(this).parent().prev().html($(this).text() + '<i class="icon-caret-down pull-right"></i>');
                    hideAll();
                    flagFalse();
                }
            }
        };
    }
}

/*点击屏幕其他位置，收器下拉选项*/
function bodyClicked(ev) {
        var e = ev || event;
        var target = e.target || e.srcElement;
        if (target && target.className != 'sel-option' && target.className != 'sel-show' && target.className != 'item') {
            hideAll();
            flagFalse();
            flag = false;
        } else {
            return false;
        }
        if (e && e.stopPropagation) {//阻止冒泡
            e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }
    };


    //设置导航链接
    function setFrontLinks() {
        $('.guide_list li').eq(1).find('a').attr('href',"news_list.html");
        $('.guide_list li').eq(2).find('a').attr('href',"social_responsibility.html");
        $('.guide_list li').eq(3).find('a').attr('href',"activities.html");
    }


/**************************************banner滑动**********************************/
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

//初始化banner数据
function initBannerData(){
    //初始化banner数据
    aLi[0].getElementsByTagName('img')[0].src = arrImg[0];
    aLi[0].getElementsByTagName('h3')[0].innerHTML = arrTitle[0];
    aLi[0].getElementsByClassName('suolue')[0].innerHTML = arrNews[0];
    aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[0];
    aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[0];
    aLi[1].getElementsByTagName('img')[0].src = arrImg[1];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[1];
    aLi[1].getElementsByClassName('suolue')[0].innerHTML = arrNews[1];
    aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[1];
    aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[1];
}

var oWrap = document.getElementsByClassName("banner_wrap")[0],
    oPrev = document.getElementsByClassName('second_banner')[0].getElementsByClassName('prev')[0],
    oNext = document.getElementsByClassName('second_banner')[0].getElementsByClassName('next')[0];
    aLi = $(".banner_wrap li");

    //模拟banner数据
    arrImg = ['img/news1.png', 'img/news2.jpg','img/news3.jpg'];
    arrTitle = ['这是标题1','这是标题2','这是标题3'];
    arrNews = ['这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1这是新闻内容1','这是新闻内容2这是新闻内容2这是新闻内容2这是新闻内容2这是新闻内容2',"这是新闻内容3这是新闻内容3这是新闻内容3这是新闻内容3这是新闻内容3"];
    arrTimes = ['发布时间1','发布时间2','发布时间3'];
    arrRead = ['阅读次数1','阅读次数2','阅读次数3'];
    timer = null;
    num = 0;

    oWrap.moved = true;



//设置下一页点击
oNext.onclick = function(){

    if(!oWrap.moved){
        return;
    }
    aLi[1].style.position = 'absolute';
    aLi[1].style.top = '0';
    aLi[1].style.left = '840px';

    num++;
    if(num == arrImg.length){
        num = 0;
    }
    // aImg[1].src = arrImg[num];
    aLi[1].getElementsByTagName('img')[0].src = arrImg[num];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[num];
    aLi[1].getElementsByClassName('suolue')[0].innerHTML = arrNews[num];
    aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[num];
    aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[num];
    move(oWrap, 'left', -840, 20, 20, function(){
        // aImg[0].src = aImg[1].src;
        aLi[0].getElementsByTagName('img')[0].src = aLi[1].getElementsByTagName('img')[0].src;
        aLi[0].getElementsByTagName('h3')[0].innerHTML = aLi[1].getElementsByTagName('h3')[0].innerHTML;
        aLi[0].getElementsByClassName('suolue')[0].innerHTML = aLi[1].getElementsByClassName('suolue')[0].innerHTML;
        aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML;
        aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML;
        oWrap.style.left = '0';
    });
};

//设置上一页点击
oPrev.onclick = function(){
    if(!oWrap.moved){
        return;
    }
    aLi[1].style.position = 'absolute';
    aLi[1].style.top = '0';
    aLi[1].style.left = '-840px';

    num--;
    if(num < 0) {
        num = arrImg.length - 1;
    }
    // aLi[1].src = arrImg[num];
    aLi[1].getElementsByTagName('img')[0].src = arrImg[num];
    aLi[1].getElementsByTagName('h3')[0].innerHTML = arrTitle[num];
    aLi[1].getElementsByClassName('suolue')[0].innerHTML = arrNews[num];
    aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = arrTimes[num];
    aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = arrRead[num];
    move(oWrap, 'left', 840, 20, 20, function(){
        // aLi[0].src = aLi[1].src;
        aLi[0].getElementsByTagName('img')[0].src = aLi[1].getElementsByTagName('img')[0].src;
        aLi[0].getElementsByTagName('h3')[0].innerHTML = aLi[1].getElementsByTagName('h3')[0].innerHTML;
        aLi[0].getElementsByClassName('suolue')[0].innerHTML = aLi[1].getElementsByClassName('suolue')[0].innerHTML;
        aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[0].innerHTML;
        aLi[0].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML = aLi[1].getElementsByClassName('article_info')[0].getElementsByTagName('p')[1].innerHTML;
        oWrap.style.left = '0';
    })
};

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







/******************************新闻列表的hover*******************************/

function setNewsListHover() {
    var oNews_ul = document.getElementsByClassName('news_list')[0];
    var aNewsLi = oNews_ul.getElementsByTagName('li');

    for (var i = 0; i < aNewsLi.length; i ++){

        aNewsLi[i].index = i;

        aNewsLi[i].onmouseover = function () {
            var oTitle = this.getElementsByTagName('h3')[0];
            var oNews = this.getElementsByTagName('p')[0].getElementsByTagName('a')[0];
            var oImg = this.getElementsByTagName('img')[0];


            oTitle.style.color = "#bb9205";
            oNews.style.color = "#bb9205";

            oImg.style.transform = "scale(1.1)";


        };

        aNewsLi[i].onmouseout = function () {
            var oTitle = this.getElementsByTagName('h3')[0];
            var oNews = this.getElementsByTagName('p')[0].getElementsByTagName('a')[0];
            var oImg = this.getElementsByTagName('img')[0];

            oTitle.style.color = "#000";
            oNews.style.color = "#464646";
            oImg.style.transform = "scale(1)";
        }
    }
}


