function pageCommonLink() {
    /************************************底部友情链接***************************************/
    $('.top_right').hover(function (ev) {
        $('.friend_link').stop().slideDown();
    },function (ev) {
        $('.friend_link').stop().slideUp();
    });

    /****************************header、.front添加链接********************/
    $('.logo a').attr("href","./index.html");
    $('.header .nav a.index').attr("href","./index.html");

    //关于我们
    $('.down_ul').eq(0).find('li').eq(0).find('a').attr("href","./company_info.html");
    $('.down_ul').eq(0).find('li').eq(1).find('a').attr("href","./leaders.html");
    $('.down_ul').eq(0).find('li').eq(2).find('a').attr("href","./event.html");
    $('.down_ul').eq(0).find('li').eq(3).find('a').attr("href","./culture.html");
    $('.down_ul').eq(0).find('li').eq(4).find('a').attr("href","./contact_us.html");

    //全景巨龙
    $('.down_ul').eq(1).find('li').eq(0).find('a').attr("href","./pictures.html");

    //资讯中心
    $('.down_ul').eq(2).find('li').eq(0).find('a').attr("href","./news_list.html");
    $('.down_ul').eq(2).find('li').eq(1).find('a').attr("href","./social_responsibility.html");
    $('.down_ul').eq(2).find('li').eq(2).find('a').attr("href","./activities.html");

    //投资者关系
    $('.down_ul').eq(3).find('li').eq(0).find('a').attr("href","./announce_list.html");
    $('.down_ul').eq(3).find('li').eq(1).find('a').attr("href","./financial_report.html");
    $('.down_ul').eq(3).find('li').eq(2).find('a').attr("href","./shares.html");



    //.front的链接处理
    if($('.front')){
        $('.front .path').find('span:first-child').find('a').attr("href","./index.html");

    }
}

//header下拉列表的动画
function headerAnimation() {

    /**************************header*****************************/
    var oHeader = document.getElementsByClassName('header')[0];
    var aNavItems = oHeader.getElementsByClassName('nav_item');
    var aHeaderDowns = oHeader.getElementsByClassName('header_down');


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

        }
    }

}

//top功能
function setTop() {


    //页面滑动top
    var scroolTop = document.documentElement.scrollTop;


    $('body').on('mousewheel',function () {
        var scroolTop = document.documentElement.scrollTop;

        if (scroolTop > 300){
            $('#to_top').show();
        }else {
            $('#to_top').hide();

        }
    })


    $('#to_top').click(function(){


        var page = document.getElementsByClassName('detail_page')[0];

        //处理新闻详情页右侧滑动定位效果
        if(page != null){

            var pageTimer = null;
            setTimeout(function () {
                clearInterval(pageTimer);
            },500);
            pageTimer = setInterval(function () {
                adjustPage();
            },30);
        }

        $('html,body').animate(
            {scrollTop: '0px'}, 500),$('#to_top').hide();
    });




}