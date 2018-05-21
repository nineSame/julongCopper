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


function setSideNav() {
    var navHtml = '<nav class="sidenav" data-sidenav data-sidenav-toggle="#sidenav-toggle"><ul class="sidenav-menu"><li><a href="javascript:;" data-sidenav-dropdown-toggle class="active"><span class="sidenav-link-icon"><i class="icon-home"></i></span><span class="sidenav-link-title" onclick="location='+'&#39;index.html&#39;'+'">首页</span></a></li><li><a href="javascript:;" data-sidenav-dropdown-toggle class="active"><span class="sidenav-link-icon"><i class="icon-group"></i></span><span class="sidenav-link-title">关于我们</span><span class="sidenav-dropdown-icon show" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_down</i></span><span class="sidenav-dropdown-icon" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_up</i></span></a><ul class="sidenav-dropdown" data-sidenav-dropdown><li><a href="company_info.html">公司简介</a></li><li><a href="leaders.html">结构组织</a></li><li><a href="event.html">发展历程</a></li><li><a href="culture.html">企业文化</a></li><li><a href="contact_us.html">联系我们</a></li></ul></li><li><a href="javascript:;" data-sidenav-dropdown-toggle class="active"><span class="sidenav-link-icon"><i class="icon-eye-open"></i></span><span class="sidenav-link-title">全景巨龙</span><span class="sidenav-dropdown-icon show" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_down</i></span><span class="sidenav-dropdown-icon" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_up</i></span></a><ul class="sidenav-dropdown" data-sidenav-dropdown><li><a href="pictures.html">主营业务</a></li><li><a href="pictures.html">设备展示</a></li><li><a href="pictures.html">生产工艺</a></li></ul></li><li><a href="javascript:;" data-sidenav-dropdown-toggle class="active"><span class="sidenav-link-icon"><i class="icon-comment"></i></span><span class="sidenav-link-title">资讯中心</span><span class="sidenav-dropdown-icon show" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_down</i></span><span class="sidenav-dropdown-icon" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_up</i></span></a><ul class="sidenav-dropdown" data-sidenav-dropdown><li><a href="news_list.html">公司信息</a></li><li><a href="social_responsibility.html">社会责任</a></li><li><a href="activities.html">专题活动</a></li></ul></li><li><a href="javascript:;" data-sidenav-dropdown-toggle class="active"><span class="sidenav-link-icon"><i class="icon-bullhorn"></i></span><span class="sidenav-link-title">公告信息</span><span class="sidenav-dropdown-icon show" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_down</i></span><span class="sidenav-dropdown-icon" data-sidenav-dropdown-icon><i class="material-icons">arrow_drop_up</i></span></a><ul class="sidenav-dropdown" data-sidenav-dropdown><li><a href="announce_list.html">公司公告</a></li><li><a href="financial_report.html">财务报告</a></li><li><a href="shares.html">股票信息</a></li></ul></li></ul></nav><a href="javascript:;" class="toggle" id="sidenav-toggle" style="z-index: 100;position: fixed; top: 20px;right: 20px"><i class="material-icons">menu</i></a>';

    $('body').prepend(navHtml);
    $('[data-sidenav]').sidenav();
}
