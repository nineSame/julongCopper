var ServerUrl = location.origin + '/';

$(function () {
    pageCommonLink();   //添加公共的链接
    headerAnimation();  //设置header下拉动画
    setTop();           //设置top按钮
    setSideNav();       //添加手机侧边栏
    autoHideSideNav();  //自动隐藏侧边功能
    addFooter();        //添加footer
});



