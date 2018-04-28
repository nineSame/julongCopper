/************************************底部友情链接***************************************/
var oTopRignt = document.getElementsByClassName('top_right')[0];
var oFreindList = document.getElementsByClassName('friend_link')[0];
var friend_list_timer = null;

oTopRignt.onmouseover = function () {
    oFreindList.style.display = 'block';
}

oTopRignt.onmouseout = function () {

    friend_list_timer = setTimeout(function () {
        oFreindList.style.display = 'none';
    },100);
}

oFreindList.onmouseover = function () {
    clearTimeout(friend_list_timer);
    this.style.display = 'block';

}

oFreindList.onmouseout = function () {
    this.style.display = 'none';
}

/**************************header*****************************/
var oHeader = document.getElementsByClassName('header')[0];
var aNavItems = oHeader.getElementsByClassName('nav_item');
var aHeaderDowns = oHeader.getElementsByClassName('header_down');
var cur_header_nav = null;
var cur_header_down = null;

// $('.nav').mouseenter(function () {
//
//     $('.header_down').slideUp('normal');
//
// })
//
// $('.nav').mouseleave(function () {
//     $('.header_down').slideDown('normal');
// })

// alert(aNavItems.length) 取的到




for (var i = 0; i < aNavItems.length; i++){

    aNavItems[i].index = i;


    aNavItems[i].onmouseover = function () {

        $('.header_down').eq(this.index).stop().slideDown('normal');
        // cur_header_nav = this.index;



    }

    aNavItems[i].onmouseout = function () {

        $('.header_down').eq(this.index).stop().slideUp('normal');
    }

}


for (var i = 0; i < aHeaderDowns.length; i++){
    aHeaderDowns[i].index = i;
    aHeaderDowns[i].onmouseover = function (ev) {
        // cur_header_down = this.index;
        $(this).stop().slideDown('normal');
    }

    aHeaderDowns[i].onmouseout = function (ev) {

        $(this).stop().slideUp('normal');
        // ev.preventDefault();

    }
}