/**
 * Created by nineSame on 2018/5/9.
 */

$(function () {
    setFrontLinks();
    setUsersValue();
    toggleItems();

})

function setFrontLinks() {
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"company_info.html");
    $('.guide_list li').eq(1).find('a').attr('href',"leaders.html");
    $('.guide_list li').eq(3).find('a').attr('href',"culture.html");
    $('.guide_list li').eq(4).find('a').attr('href',"contact_us.html");
}


function toggleItems() {
    var aSels = $('.top');
    $('.top').eq(0).parent().addClass('cur')

    for (var i = 0; i < aSels.length; i++){
        aSels[i].onclick =function () {
            $(this).parent().siblings().removeClass('cur');
            $(this).parent().toggleClass('cur');
        }
    }
}

function setUsersValue() {
    $.ajax({
        url: ServerUrl + 'website/json/user.json',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            console.log(1111,json);
            if(json.resCode == 200){


                var leaderGroup1 = [];
                var leaderGroup2 = [];
                var leaderGroup3 = [];

                var data = json.data;
                var liHtml = '';
                for(var i=0;i<data.length;i++){
                    var item = data[i];

                    //数据按照职位阶级分组
                    if (item.jobtitlenum == 1){
                        leaderGroup1.push(item);
                    }else if(item.jobtitlenum == 2){
                        leaderGroup2.push(item);
                    }else {
                        leaderGroup3.push(item);
                    }
                }

                //拼接第一组职位html
                var html1 = '<div class="position">执行董事</div><div class="position_content"><ul>';

                for (var i = 0; i < leaderGroup1.length; i++){
                        html1 += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+leaderGroup1[i].name+'</div><div class="leader_position left el">'+leaderGroup1[i].jobtitle+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+leaderGroup1[i].name+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">,'+leaderGroup1[i].description+'</span></span></p><p><br/></p></div></div></li>'
                }
                html1 += '</ul></div>';

                //拼接第二组职位html
                var html2 = '<div class="position">非执行董事</div><div class="position_content"><ul>';

                for (var i = 0; i < leaderGroup2.length; i++){
                    html2 += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+leaderGroup2[i].name+'</div><div class="leader_position left el">'+leaderGroup2[i].jobtitle+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+leaderGroup2[i].name+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">,'+leaderGroup2[i].description+'</span></span></p><p><br/></p></div></div></li>'
                }

                html2 += '</ul></div>';

                //拼接第三组职位html
                var html3 = '<div class="position">执行董事</div><div class="position_content"><ul>';

                for (var i = 0; i < leaderGroup3.length; i++){
                    html3 += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+leaderGroup3[i].name+'</div><div class="leader_position left el">'+leaderGroup3[i].jobtitle+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+leaderGroup3[i].name+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">,'+leaderGroup3[i].description+'</span></span></p><p><br/></p></div></div></li>'
                }
                html3 += '</ul></div>';

                //插入html
                $('#leaders_list').append(html1,html2,html3);

                //设置toggle样式'cur'
                toggleItems();

            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}

