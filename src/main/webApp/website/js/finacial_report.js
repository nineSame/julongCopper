/**
 * Created by nineSame on 2018/6/6.
 */

$(function () {
    setFrontLinks();
    // setDownloadList();
    setListHover();
})


function setFrontLinks() {
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"announce_list.html");
    $('.guide_list li').eq(1).find('a').attr('href',"financial_report.html");
    $('.guide_list li').eq(2).find('a').attr('href',"shares.html");
}


function setDownloadList() {
    $.ajax({
        //后台正式数据接口
        url: ServerUrl + 'ann/page?lx=2&page=1&size=1000',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            console.log("server",json);
            if(json.resCode == 200){

                var data = json.data.content;
                console.log(data)

                var liHtml = '';

                for (var i = 0 ; i < data.length; i++){
                    var  item = data[i];

                    var year = item.cjsj.substring(0,4);
                    var month_and_date = item.cjsj.substring(5,10);

                    liHtml += '<li class="download_item"><a class="download_btn left" title="下载"></a><a href="'+item.ggdz+'" class="download_title left" title="" target="_blank"><h3 class="el">'+item.ggbt+'</h3></a><a href="#" class="download_date left"><div class="center_box"><span>'+year+'</span><strong>'+month_and_date+'</strong></div></a></li>';
                }

                // console.log(liHtml)

                //插入html
                $('#announce_list').append(liHtml);


            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}


function setListHover() {
    /******************************下载列表的hover*******************************/

    var oContentList = document.getElementsByClassName('content_list')[0];
    var aDownloadItems = oContentList.getElementsByTagName('li');

    for (var i = 0; i < aDownloadItems.length; i ++){

        aDownloadItems[i].index = i;

        aDownloadItems[i].onmouseover = function () {
            var oTitle = this.getElementsByTagName('h3')[0];
            var oYear = this.getElementsByTagName('span')[0];
            var oDate = this.getElementsByTagName('strong')[0];
            oTitle.style.color = "#bb9205";
            oYear.style.color = "#bb9205";
            oDate.style.color = "#bb9205";
        };

        aDownloadItems[i].onmouseout = function () {
            var oTitle = this.getElementsByTagName('h3')[0];
            var oYear = this.getElementsByTagName('span')[0];
            var oDate = this.getElementsByTagName('strong')[0];
            oTitle.style.color = "#555";
            oYear.style.color = "#555";
            oDate.style.color = "#555";
        };
    }
}


//设置跳转至PDF文件
$("li.download_item").first().find('a').attr({"href":"./announcement_for_test.pdf","target":"_blank"});
