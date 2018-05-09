/**
 * Created by nineSame on 2018/5/9.
 */

$(function () {
    setFrontLinks();
    toggleItems();
    setUsersValue();
})

function setFrontLinks() {
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"company_info.html");
    $('.guide_list li').eq(1).find('a').attr('href',"leaders.html");
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

                var data = json.data;
                var liHtml = '';
                for(var i=0;i<data.length;i++){
                    var item = data[i];
                }
            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}

