/**
 * Created by nineSame on 2018/5/9.
 */

$(function () {
    setFrontLinks(); //设置导航链接
    setPart1Animation(oLeft); //设置part1的交互效果PC
    setPart1Animation(oLeftMobile)//设置part1的交互效果mobile
    createAccordion('show1');//添加手风琴效果
})

function setFrontLinks() {
    //设置导航链接
    $('.guide_list li').eq(0).find('a').attr('href',"news_list.html");
    $('.guide_list li').eq(1).find('a').attr('href',"social_responsibility.html");
    $('.guide_list li').eq(2).find('a').attr('href',"activities.html");
}


var oPart1 = document.getElementsByClassName('part1')[0];
var oLeft = oPart1.getElementsByClassName('part1_left')[0];
var oLeftMobile = oPart1.getElementsByClassName('part1_left_mobile')[0];


var oRight = document.getElementsByClassName('part1_right')[0];
var aImg = oRight.getElementsByTagName('div');


function hideImg() {
    for (var i = 0 ; i < aImg.length ; i++){
        aImg[i].style.display = 'none';
    }
}


function setPart1Animation(obj) {

    var aLeftLi = obj.getElementsByTagName('li');
    for (var i = 0 ; i  < aLeftLi.length; i++){

        aLeftLi[i].index = i;

        aLeftLi[i].onmouseover = function () {
            var oContent = this.getElementsByClassName('list_con')[0];
            var oTitle = oContent.getElementsByClassName('list_title')[0];
            var oDec = oContent.getElementsByClassName('dec')[0];

            if ($(this).parent().parent().attr('class') == 'part1_left_mobile left'){
                oContent.style.background = "#bb9205";
                oTitle.style.color = "#fff";
                // oTitle.style.background = "#fff";
                oDec.style.color = "#fff";
                hideImg();
                aImg[this.index].style.display = "block";
            }else {
                oContent.style.background = "#bb9205";
                oTitle.style.color = "#bb9205";
                oTitle.style.background = "#fff";
                oDec.style.color = "#fff";
                hideImg();
                aImg[this.index].style.display = "block";
            }


            // alert($(this).parent().parent().attr('class'))

        }

        aLeftLi[i].onmouseout = function () {
            var oContent = this.getElementsByClassName('list_con')[0];
            var oTitle = oContent.getElementsByClassName('list_title')[0];
            var oDec = oContent.getElementsByClassName('dec')[0];

            if ($(this).parent().parent().attr('class') == 'part1_left_mobile left'){
                oContent.style.background = "#f9f7f0";                oTitle.style.color = "#222";
                oDec.style.color = "#757575";
                hideImg();
                aImg[this.index].style.display = "block";
            }else {
                oContent.style.background = "#f9f7f0";
                oTitle.style.color = "#fff";
                oTitle.style.background = "#bb9205";
                oDec.style.color = "#757575";
            }

        }

    }
}



/************************************手风琴效果******************************************/

//创建手风琴
function createAccordion(id)
{
    var oDiv=document.getElementById(id);
    var iMinWidth=9999999;
    var aLi=oDiv.getElementsByTagName('li');
    var aSpan=oDiv.getElementsByTagName('span');
    var i=0;
    oDiv.timer=null;

    for(i=0;i<aSpan.length;i++)
    {
        aSpan[i].index=i;
        aSpan[i].onmouseover=function ()
        {
            gotoImg(oDiv, this.index, iMinWidth);
        };

        iMinWidth=Math.min(iMinWidth, aLi[i].offsetWidth);
    }

    setAccordionColor();  //设置手风琴单元渐变色
};

//手风琴图片切换
function gotoImg(oDiv, iIndex, iMinWidth)
{
    if(oDiv.timer)
    {
        clearInterval(oDiv.timer);
    }
    oDiv.timer=setInterval
    (
        function ()
        {
            changeWidthInner(oDiv, iIndex, iMinWidth);
        }, 30
    );
}

//切换手风琴单元width
function changeWidthInner(oDiv, iIndex, iMinWidth)
{
    var aLi=oDiv.getElementsByTagName('li');
    var aSpan=oDiv.getElementsByTagName('span');
    var iWidth=oDiv.offsetWidth;
    var w=0;
    var bEnd=true;
    var i=0;

    for(i=0;i<aLi.length;i++)
    {
        if(i==iIndex)
        {
            continue;
        }

        if(iMinWidth==aLi[i].offsetWidth)
        {
            iWidth-=iMinWidth;
            continue;
        }

        bEnd=false;

        speed=Math.ceil((aLi[i].offsetWidth-iMinWidth)/5);

        w=aLi[i].offsetWidth-speed;

        if(w<=iMinWidth)
        {
            w=iMinWidth;
        }

        aLi[i].style.width=w+'px';

        iWidth-=w;
    }

    aLi[iIndex].style.width=iWidth+'px';

    if(bEnd)
    {
        clearInterval(oDiv.timer);
        oDiv.timer=null;
    }
}

//设置手风琴单元渐变色
function setAccordionColor() {
    var aSpans = $("#show1").find('span');

    aSpans.eq(0).css("background","#ddc58c");
    aSpans.eq(1).css("background","#caa860");
    aSpans.eq(2).css("background","#b98923");
}




