
var LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
//服务器接口地址
var ServerUrl = location.origin;
//左侧菜单
var HomeMenu = [
    {
        name: '公司人员管理',
        icon: 'icon-th-list' ,
        type: 'user',
        children: []
    },
    {
        name: '公司新闻管理',
        icon: 'icon-th-list' ,
        type:'news'
    },
    {
        name: '轮播图片管理',
        icon: 'icon-th-list' ,
        type:'banner'
    },
    {
        name: '公告信息管理',
        icon: 'icon-th-list' ,
        type:'gonggao'
    },
    {
        name: '公告信息管理',
        icon: 'icon-th-list' ,
        type:'gonggao'
    }
];


//字典数据
var DICT = {
    sex:{1:'男',2:'女',3:'未知'},//性别
    zwjb: {1:'董事长',2:'总经理',3: '普通职员'},//职务级别
    xwlx: {1:'公司信息',2:'一线传真',3:'行业动态',4:'专题活动'}
};
