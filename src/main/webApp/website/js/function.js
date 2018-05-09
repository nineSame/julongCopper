function pageLink() {
    /************************************底部友情链接***************************************/
    var oTopRignt = document.getElementsByClassName('top_right')[0];
    var oFreindList = document.getElementsByClassName('friend_link')[0];
    var friend_list_timer = null;
    oTopRignt.onmouseover = function () {
        oFreindList.style.display = 'block';
    };

    oTopRignt.onmouseout = function () {

        friend_list_timer = setTimeout(function () {
            oFreindList.style.display = 'none';
        },100);
    };

    oFreindList.onmouseover = function () {
        clearTimeout(friend_list_timer);
        this.style.display = 'block';

    };

    oFreindList.onmouseout = function () {
        this.style.display = 'none';
    }
}