/** 本文件存放需要所有页面执行的方法 **/

$(function () {
    createHomeMenu();   //创建左边菜单
    leftMenuClass();    //左边菜单样式
    dateTime();         //时间控件初始化
    dictInit('lx',DICT.dylx);
    dictInit('sex',DICT.sex);
    dictInit('xl',DICT.xl);
    initDataTable();//初始化Table插件


});


function sexInit() {
    var op = '<option value="1">男</option>' +
        '<option value="2">女</option>' +
        '<option value="3">未知</option>';
    $('#sex').append(op);
}

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
    $('#footer').load('footer.html');
    var menuHtml = '';
    for (var i = 0; i < HomeMenu.length; i++) {
        var menuItem = HomeMenu[i];
        var type = menuItem.type;
        var activeClass = '';
        var href = 'javascript:;';
        if(type && type != 'undefined'){
            href = type + '.html?pageType=' + type;
        }
        var subMenu = menuItem.children;
        menuHtml += '<li title="' + menuItem.name + '" class="sub-menu" type="' + type + '">';
        menuHtml += '<a class="dcjq-parent menu-' + type + '" href="' + href + '">' +
                        '<i class="fa ' + menuItem.icon + '"></i><span>' + menuItem.name + '</span>' +
                    '</a>';
        if (subMenu && subMenu.length) {
            menuHtml += '<ul class="sub">';
            for (var j = 0; j < subMenu.length; j++) {
                var subMenuItem = subMenu[j];
                var subType = subMenuItem.type;
                var url = subType + '.html?pageType=' + subType;
                menuHtml += '<li title="' + subMenuItem.name + '" url="' + subMenuItem.url + '">' +
                    '<a class="menu-' + subType + '" menuType="sunMenu" href="' + url + '">' + subMenuItem.name + '</a>' +
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
    var pageType = urlParam.pageType;
    if(!pageType){
        pageType = 'home';
    }
    var $menu = $('a.menu-' + pageType);
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