/**
 * Created by nineSame on 2018/6/11.
 */


$(function () {
    setFrontLinks();
    setListHover();
})

function setFrontLinks() {

    $('.guide_list li').eq(0).find('a').attr('href',"news_list.html");
    $('.guide_list li').eq(1).find('a').attr('href',"social_responsibility.html");
    $('.guide_list li').eq(2).find('a').attr('href',"activities.html");
}

function setListHover() {
    /******************************活动列表的hover*******************************/

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

