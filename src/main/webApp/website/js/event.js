/**
 * Created by nineSame on 2018/5/25.
 */
$(function () {
    setFrontLinks();
    // operateEvent();
    getEventData();
})


function getEventData() {
    $.ajax({
        // 获取数据
        url: ServerUrl + 'development/display',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            console.log("testdata",json);
            if(json.resCode == 200){

                var data = json.data;

                //数据按年分组
                var hash = {};
                var groupedArr = [];
                var n = -1;
                for(var i = 0;i<data.length;i++){
                    if(!hash[data[i].fzlcsj.substring(0,4)]){
                        n++;
                        hash[data[i].fzlcsj.substring(0,4)]=true;
                        groupedArr[n]=[];
                    }
                    groupedArr[n].push(data[i]);
                }
                console.log(groupedArr);     //[[],[],[]]

                //创建事件控件的html
                var eventHtml = '<h1 class="title">巨龙发展历程</h1>';

                for (var i = 0; i < groupedArr.length; i++){


                    eventHtml += '<div class="year"><h2><a href="#">'+groupedArr[i][0].fzlcsj.substring(0,4)+'年<i></i></a></h2><div class="list"><ul>';

                    for (var j = 0; j < groupedArr[i].length;j++){

                        //获取月，处理月份前面的0
                        var month = groupedArr[i][j].fzlcsj.substring(5,7);
                        if (month.substring(0,1) == '0'){
                            month = month.substring(1,2);
                        }
                        //获取日，处理月份前面的0
                        var date = groupedArr[i][j].fzlcsj.substring(8,10);
                        if (date.substring(0,1) == '0'){
                            date = date.substring(1,2);
                        }
                        //拼接ul内容
                        eventHtml +=  '<li class="cls"><p class="date">'+month+'月'+date+'日</p><p class="intro">'+groupedArr[i][j].fzlcbt+'</p><p class="version">&nbsp;</p><div class="more"><p>'+groupedArr[i][j].fzlcnr+'</p></div></li>';
                    }

                    eventHtml += '</ul></div></div>';

                    console.log(groupedArr[1][0].fzlcsj.substring(8,10));
                }


                // console.log(eventHtml);



                $('#event_container').append(eventHtml);
                operateEvent();




            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}

function setFrontLinks() {
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"company_info.html");
    $('.guide_list li').eq(1).find('a').attr('href',"leaders.html");
    $('.guide_list li').eq(2).find('a').attr('href',"event.html");
    $('.guide_list li').eq(3).find('a').attr('href',"culture.html");
    $('.guide_list li').eq(4).find('a').attr('href',"contact_us.html");
}


function operateEvent() {
    $(".main .year .list").each(function(e, target){
        var $target=  $(target),
            $ul = $target.find("ul");
        $target.height($ul.outerHeight()), $ul.css("position", "absolute");
    });
    $(".main .year>h2>a").click(function(e){
        e.preventDefault();
        $(this).parents(".year").toggleClass("close");
    });
}

