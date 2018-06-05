/** 本文件存放需要所有页面执行的方法 **/

$(function () {
    createHomeMenu();   //创建左边菜单
    leftMenuClass();    //左边菜单样式
    initDataTable();//初始化Table插件
});

function setUserInfo() {
    var userInfo =  JSON.parse(localStorage.getItem('loginUserInfo'));
    if(userInfo.username){
        $('#loginUserName').text(userInfo.username);
    }
}


//创建左边菜单
function createHomeMenu() {
    $('#commonHeader').load('header.html',function () {
        setUserInfo();
    });
    $('#footer').load('footer.html?v='+Math.random());
    var menuHtml = '';
    for (var i = 0; i < HomeMenu.length; i++) {
        var menuItem = HomeMenu[i];
        var page = menuItem.page;
        var type = menuItem.type || page;
        var activeClass = '';
        var href = 'javascript:;';
        if(page && page != 'undefined'){
            href = page + '.html?page=' + page + '&type=' + type;
        }
        var subMenu = menuItem.children;
        menuHtml += '<li title="' + menuItem.name + '" class="sub-menu" type="' + page + '">';
        menuHtml += '<a class="dcjq-parent menu-' + page + type + '" href="' + href + '">' +
                        '<i class="fa ' + menuItem.icon + '"></i><span>' + menuItem.name + '</span>' +
                    '</a>';
        if (subMenu && subMenu.length) {
            menuHtml += '<ul class="sub">';
            for (var j = 0; j < subMenu.length; j++) {
                var subMenuItem = subMenu[j];
                var subPage = subMenuItem.page;
                var subType = subMenuItem.type || subPage;
                var url = subPage + '.html?page=' + subPage + '&type=' + subType;
                menuHtml += '<li title="' + subMenuItem.name + '" url="' + subMenuItem.url + '">' +
                    '<a class="menu-' + subPage + subType + '" menuType="sunMenu" href="' + url + '">' + subMenuItem.name + '</a>' +
                    '</li>';
            }
            menuHtml += '</ul>';
        }
        menuHtml += '</li>';
    }
    $('#nav-accordion').append(menuHtml);
}

//处理左边菜单显示状态
function leftMenuClass() {
    var urlParam = getUrlParam();
    var page = urlParam.page;
    var type = urlParam.type;
    if(!page){
        page = 'home';
    }
    var $menu = $('a.menu-' + page + type);
    var menuType = $menu.attr('menuType');
    if(menuType == 'sunMenu'){
        $menu.parent().parent().show();
        $menu.parent().parent().prev().addClass('active');
    }
    $menu.addClass('active');
}

//时间控件处理
function dateTime() {
    $('.form_date').datetimepicker({
        format: 'yyyy-mm-dd',
        language:  'zh-CN',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
}