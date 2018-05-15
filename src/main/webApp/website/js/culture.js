/**Created by nineSame on 2018/5/15.**/

$(function () {
    setFrontLinks();   //设置导航链接
    setPart1();        //设置part1交互
    setPart2();        //设置part2交互
})


function setFrontLinks() {
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"company_info.html");
    $('.guide_list li').eq(1).find('a').attr('href',"leaders.html");
    $('.guide_list li').eq(3).find('a').attr('href',"culture.html");
    $('.guide_list li').eq(4).find('a').attr('href',"contact_us.html");
}


function setPart1() {
    //part1的事件交互

    $('.part1 li').mouseenter(function (ev) {

        $(this).find('.cont').css('padding-left','0');
        $(this).find('img').css('transform','scale(1.1)');
        $(this).find('.text_box').css({
            'background':'rgba(222,186,40,0.3)',  //??????????
            'height':'100%'
        });
        $(this).find('.title').css({
            'text-align':'center'
        })
        $(this).find('.dec1').css('display','none');
        $(this).find('.dec2').css({
            'display':'block',
            'padding':'20px 30px'
        })
//        ev.stopPropagation();
    })

        .mouseleave(function (ev) {

            $(this).find('.cont').css('padding-left','20px');
            $(this).find('img').css('transform','scale(1)');
            $(this).find('.text_box').css({
                'background':'url(./img/culture_pt1_bg.png)',  //??????????
                'height':'144px'
            });
            $(this).find('.title').css({
                'text-align':''
            })
            $(this).find('.dec1').css('display','block');
            $(this).find('.dec2').css({
                'display':'none',
                'padding':'20px 30px'
            })
//        ev.stopPropagation();
        })

}


function setPart2() {

    //part2的事件交互

    $('.part2 li').mouseenter(function () {
        $(this).css("background","#bb9205");
        $(this).find('img').css('transform','scale(1.1)');
        $('.title',this).add('.dec',this).css('color','#fff');
    })

        .mouseleave(function () {
            $(this).css("background","#f9f7f0");
            $(this).find('img').css('transform','scale(1)');
            $('.title',this).css("color","#000");
            $('.dec',this).css('color',"#8a8a8a");
        })



}
