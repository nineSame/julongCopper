
var LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
//服务器接口地址
var ServerUrl = location.origin;
//左侧菜单
var HomeMenu = [
    {
        name: '公司信息',
        icon: 'icon-home' ,
        //type: 'home',
        children: [
            {
                name: '公司简介',
                icon: 'icon-home' ,
                type: 'home',
            },
            {
                name: '企业文化',
                icon: 'icon-home' ,
                type: 'qywh',
            },
            {
                name: '联系方式',
                icon: 'icon-home' ,
                type: 'contact',
            }
        ]
    },
    {
        name: '人员管理',
        icon: 'icon-user' ,
        type: 'user',
    },
    {
        name: '资讯管理',
        icon: 'icon-file-alt' ,
        type:'news'
    },
    {
        name: '轮播管理',
        icon: 'icon-picture' ,
        type:'banner'
    },
    {
        name: '公告信息',
        icon: 'icon-bullhorn' ,
        children:[
            {
                name: '公司公告',
                icon: 'icon-bullhorn' ,
                type:'gonggao',
            },
            {
                name: '财务公告',
                icon: 'icon-bullhorn' ,
                type:'caiwu',
            },
            {
                name: '股票信息',
                icon: 'icon-bullhorn' ,
                type:'gupiao',
            }
        ]
    },
    {
        name: '发展历程',
        icon: 'icon-sitemap' ,
        type:'fzlc'
    },
    {
        name: '全景巨龙',
        icon: 'icon-camera-retro' ,
        type:'fzlc'
    }
];


//字典数据
var DICT = {
    sex:{1:'男',2:'女',3:'未知'},//性别
    //zwjb: {1:'董事长',2:'总经理',3: '普通职员'},//职务级别
    xwlx: {1:'公司信息',2:'一线传真',3:'行业动态',4:'专题活动'},
    gglx: {1:'公司公告',2:'财务公告'},
};
