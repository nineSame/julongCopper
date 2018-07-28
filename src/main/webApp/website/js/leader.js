/**
 * Created by nineSame on 2018/5/9.
 */

$(function () {
    setFrontLinks();
    // setUsersValue();
    toggleItems();

})

function setFrontLinks() {
    //设置导航条链接
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"company_info.html");
    $('.guide_list li').eq(1).find('a').attr('href',"leaders.html");
    $('.guide_list li').eq(2).find('a').attr('href',"structure.html");
    $('.guide_list li').eq(3).find('a').attr('href',"event3.html");
    $('.guide_list li').eq(4).find('a').attr('href',"declaration.html");
    $('.guide_list li').eq(5).find('a').attr('href',"worker.html");
    $('.guide_list li').eq(6).find('a').attr('href',"contact_us.html");
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
    // $.ajax({
    //     // 测试数据
    //     url: ServerUrl + 'website/json/user.json',
    //     type: 'get',
    //     dataType: 'json',
    //     success: function (json) {
    //         //var data = json.data;
    //         console.log("testdata",json);
    //         if(json.resCode == 200){
    //
    //
    //             var leaderGroup1 = [];
    //             var leaderGroup2 = [];
    //             var leaderGroup3 = [];
    //
    //             var data = json.data;
    //             var liHtml = '';
    //             for(var i=0;i<data.length;i++){
    //                 var item = data[i];
    //
    //                 //数据按照职位阶级分组
    //                 if (item.jobtitlenum == 1){
    //                     leaderGroup1.push(item);
    //                 }else if(item.jobtitlenum == 2){
    //                     leaderGroup2.push(item);
    //                 }else {
    //                     leaderGroup3.push(item);
    //                 }
    //             }
    //
    //             //拼接第一组职位html
    //             var html1 = '<div class="position">执行董事</div><div class="position_content"><ul>';
    //
    //             for (var i = 0; i < leaderGroup1.length; i++){
    //                     html1 += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+leaderGroup1[i].name+'</div><div class="leader_position left el">'+leaderGroup1[i].jobtitle+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+leaderGroup1[i].name+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">,'+leaderGroup1[i].description+'</span></span></p><p><br/></p></div></div></li>'
    //             }
    //             html1 += '</ul></div>';
    //
    //             //拼接第二组职位html
    //             var html2 = '<div class="position">非执行董事</div><div class="position_content"><ul>';
    //
    //             for (var i = 0; i < leaderGroup2.length; i++){
    //                 html2 += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+leaderGroup2[i].name+'</div><div class="leader_position left el">'+leaderGroup2[i].jobtitle+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+leaderGroup2[i].name+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">,'+leaderGroup2[i].description+'</span></span></p><p><br/></p></div></div></li>'
    //             }
    //
    //             html2 += '</ul></div>';
    //
    //             //拼接第三组职位html
    //             var html3 = '<div class="position">执行董事</div><div class="position_content"><ul>';
    //
    //             for (var i = 0; i < leaderGroup3.length; i++){
    //                 html3 += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+leaderGroup3[i].name+'</div><div class="leader_position left el">'+leaderGroup3[i].jobtitle+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+leaderGroup3[i].name+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">,'+leaderGroup3[i].description+'</span></span></p><p><br/></p></div></div></li>'
    //             }
    //             html3 += '</ul></div>';
    //
    //             //插入html
    //             $('#leaders_list').append(html1,html2,html3);
    //
    //             //设置toggle样式'cur'
    //             toggleItems();
    //
    //         }else{
    //             alert(json.resMsg);
    //         }
    //     },
    //     error: function () {
    //         alert('err')
    //     }
    // });


    $.ajax({
        //后台正式数据接口
        url: ServerUrl + '/user/page?page=1&size=1000',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            console.log("server",json);
            if(json.resCode == 200){

                var treatedArr = [];

                var data = json.data;
                console.log(data)

                var liHtml = '';
                for(var i=0;i<data.content.length;i++){
                    var item = data[i];

                    //姓名为空或admin不显示在页面上
                    if (data.content[i].xm == null||data.content[i].zh == "admin"){
                        continue;
                    }

                    treatedArr.push(data.content[i]);
                }

                // console.log(233,treatedArr);

                //创建各组html
                var html1 = createHtml(treatedArr);

                //插入html
                $('#leaders_list').append(html1);

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



    //后台正式数据接口  接口待更改，数据加了一层，此部分按照职位分组展示
//     url: ServerUrl + '/user/page?page=1&size=1000',
//         type: 'get',
//         dataType: 'json',
//         success: function (json) {
//         //var data = json.data;
//         console.log("server",json);
//         if(json.resCode == 200){
//
//
//             var leaderGroup1 = [];  //执行董事
//             var leaderGroup2 = [];  //非执行董事
//             var leaderGroup3 = [];  //股东
//
//             var data = json.data;
//             var liHtml = '';
//             for(var i=0;i<data.length;i++){
//                 var item = data[i];
//
//                 //姓名为空不显示在页面上
//                 if (data[i].xm == null){
//                     continue;
//                 }
//
//                 //数据按照职位阶级分组
//                 if (item.zwdjpx == 0){
//                     leaderGroup1.push(item);
//                 }else if(item.zwdjpx == 1){
//                     leaderGroup2.push(item);
//                 }else {
//                     leaderGroup3.push(item);
//                 }
//             }
//
//             //创建各组html
//             var html1 = createHtml(leaderGroup1);
//             var html2 = createHtml(leaderGroup2);
//             var html3 = createHtml(leaderGroup3);
//
//             //插入html
//             $('#leaders_list').append(html1,html2,html3);
//
//             //设置toggle样式'cur'
//             toggleItems();
//
//         }else{
//             alert(json.resMsg);
//         }
//     },
//     error: function () {
//         alert('err')
//     }
// });

}


//动态创建单组的html
function createHtml(dataArr) {
    if (dataArr.length > 0){

        var job_group_name = '';

        //判断职位分组  暂时
        // if(dataArr[0].zwdjpx == 0){
        //     job_group_name = "执行董事";
        // }else  if (dataArr[0].zwdjpx == 1){
        //     job_group_name = "非执行董事";
        // }else {
        //     job_group_name = "股东";
        // }

        //拼接html
         var html = '<div class="position">'+"职位信息"+'</div><div class="position_content"><ul>';

        for (var i = 0; i < dataArr.length; i++){
            html += '<li><div class="top"><div class="top_con clearfix"><div class="leader_name left">'+dataArr[i].xm+'</div><div class="leader_position left el">'+dataArr[i].zw+'</div><div class="school left el"></div><div class="ico left"></div></div></div><div class="bottom"><div class="bottom_con"><p><span style="font-family: Arial, Helvetica, sans-serif"><b><span style="font-size: 19px; font-family: '+'宋体'+'">'+dataArr[i].xm+'</span></b><span style="font-size:19px;font-family: '+'宋体'+'">:'+dataArr[i].ms+'</span></span></p><p><br/></p></div></div></li>'
        }
        html += '</ul></div>';
    }else {
        html = '';
    }
    return html;
}

