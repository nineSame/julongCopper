var ServerUrl = location.origin + '/';


$(function () {
    pageLink();
});


/**************************header*****************************/
var oHeader = document.getElementsByClassName('header')[0];
var aNavItems = oHeader.getElementsByClassName('nav_item');
var aHeaderDowns = oHeader.getElementsByClassName('header_down');


// $('.nav').mouseenter(function () {
//
//     $('.header_down').slideUp('normal');
//
// })
//
// $('.nav').mouseleave(function () {
//     $('.header_down').slideDown('normal');
// })

// alert(aNavItems.length) 取的到

//共用部分添加链接
$('.logo a').attr("href","./index.html");
$('.header .nav a.index').attr("href","./index.html");


$('.down_ul').eq(0).find('li').eq(0).find('a').attr("href","./company_info.html");
$('.down_ul').eq(0).find('li').eq(1).find('a').attr("href","./leaders.html");
$('.down_ul').eq(0).find('li').eq(4).find('a').attr("href","./contact_us.html");

$('.down_ul').eq(2).find('li').eq(1).find('a').attr("href","./news_list.html");
$('.down_ul').eq(2).find('li').eq(2).find('a').attr("href","./social_responsibility.html");
$('.down_ul').eq(2).find('li').eq(3).find('a').attr("href","./activities.html");

$('.down_ul').eq(3).find('li').eq(0).find('a').attr("href","./announce_list.html");

if($('.front')){
    $('.front .path').find('span:first-child').find('a').attr("href","./index.html");

}






for (var i = 0; i < aNavItems.length; i++){

    aNavItems[i].index = i;


    aNavItems[i].onmouseover = function () {

        $('.header_down').eq(this.index).stop().slideDown('normal');
        // cur_header_nav = this.index;



    }

    aNavItems[i].onmouseout = function () {

        $('.header_down').eq(this.index).stop().slideUp('normal');
    }

}


for (var i = 0; i < aHeaderDowns.length; i++){
    aHeaderDowns[i].index = i;
    aHeaderDowns[i].onmouseover = function (ev) {
        // cur_header_down = this.index;
        $(this).stop().slideDown('normal');
    }

    aHeaderDowns[i].onmouseout = function (ev) {

        $(this).stop().slideUp('normal');
        // ev.preventDefault();

    }
}


