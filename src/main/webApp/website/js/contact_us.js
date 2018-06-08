/**
 * Created by nineSame on 2018/5/9.
 */

$(function(){
    setFrontLinks();
    setBaiduMap();
    setPageValue();
})

function setFrontLinks(){
    //设置导航条链接
    $('.guide_list li').eq(0).find('a').attr('href',"company_info.html");
    $('.guide_list li').eq(1).find('a').attr('href',"leaders.html");
    $('.guide_list li').eq(2).find('a').attr('href',"event.html");
    $('.guide_list li').eq(3).find('a').attr('href',"culture.html");
    $('.guide_list li').eq(4).find('a').attr('href',"contact_us.html");
}



function setBaiduMap() {
    var map = new BMap.Map("map_container");  // 创建地图实例


// 创建地址解析器实例
    var myGeo = new BMap.Geocoder();

    JL_point = myGeo.getPoint("拉萨市金珠中路22号西藏巨龙铜业",
        function(point){
            if (point) {
                map.centerAndZoom(point, 18);

                var myIcon = new BMap.Icon("img/julong_logo.png", new BMap.Size(23, 25), {
                    // 指定定位位置。
                    // 当标注显示在地图上时，其所指向的地理位置距离图标左上
                    // 角各偏移10像素和35像素。您可以看到在本例中该位置即是
                    // 图标中央下端的尖角位置。
                    anchor: new BMap.Size(10, 35),
                    // 设置图片偏移。
                    // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
                    // 需要指定大图的偏移位置，此做法与css sprites技术类似。
                    imageOffset: new BMap.Size(0, 0 - 0 * 25)   // 设置图片偏移
                })

                marker = new BMap.Marker(point,{icon : myIcon});
                map.addOverlay(marker);

                var opts = {
                    width : 256,     // 信息窗口宽度
                    height: 120,     // 信息窗口高度
                    title : "西藏巨龙铜业"  // 信息窗口标题
                }

                var info = " 地址：拉萨市金珠中路22号西藏巨龙铜业  <br/> 邮编： ******* <br/> 电话：0891-6819288 <br/> 联系人：杜卓运"

                var infoWindow = new BMap.InfoWindow(info, opts);  // 创建信息窗口对象

                marker.addEventListener("click", function(){
                    map.openInfoWindow(infoWindow, point);      // 打开信息窗口
                });
            }
        },
        "拉萨市");

//        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

//添加缩放平移控件
    var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE};
    map.addControl(new BMap.NavigationControl(opts));

}

function setPageValue() {
    $.ajax({
        //后台正式数据接口
        url: ServerUrl + 'company/display',
        type: 'get',
        dataType: 'json',
        success: function (json) {
            //var data = json.data;
            console.log("server",json);
            if(json.resCode == 200){

                var data = json.data[0];
                console.log(data)

                $('.company_addr').html(data.gsdz);
                $('.company_postcode').html(data.gsyb);
                $('.company_rp').html(data.gslxr);
                $('.company_tel').html(data.gsdh);

                $('#hr').html(data.rllxr);
                $('#hr_tel').html(data.rllxdh);
                $('#hr_email').html(data.rlzpyx);

                $('#email_x').html(': ' + data.xyx);
                $('#email_y').html(': ' + data.yyx);
                $('#email_z').html(': ' + data.zyx);

                $('#tenders_addr').html(data.zbdz);
                $('#tenders_tel').html(data.zbdh);
                $('#tech_tel').html(data.dh);


            }else{
                alert(json.resMsg);
            }
        },
        error: function () {
            alert('err')
        }
    });
}

