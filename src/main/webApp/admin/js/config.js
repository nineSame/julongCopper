
var LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
//服务器接口地址
var ServerUrl = location.origin;
var FileUrl = 'http://117.78.27.78:8080/';
//左侧菜单
var HomeMenu = [
    {
        name: '公司信息',
        icon: 'icon-home' ,
        page: 'home'
    },
    {
        name: '人员管理',
        icon: 'icon-user' ,
        page: 'user',
    },
    {
        name: '新闻管理',
        icon: 'icon-file-alt' ,
        page:'news'
    },
    {
        name: '轮播管理',
        icon: 'icon-picture' ,
        page:'banner'
    },
    {
        name: '公告信息',
        icon: 'icon-bullhorn' ,
        children:[
            {
                name: '公司公告',
                icon: 'icon-bullhorn' ,
                page:'gonggao',
                type: 1
            },
            {
                name: '财务公告',
                icon: 'icon-bullhorn' ,
                page:'gonggao',
                type: 2
            },
            {
                name: '股票信息',
                icon: 'icon-bullhorn' ,
                page:'gonggao',
                type: 3
            }
        ]
    },
    {
        name: '发展历程',
        icon: 'icon-sitemap' ,
        page:'fzlc'
    },
    {
        name: '全景巨龙',
        icon: 'icon-camera-retro' ,
        children: [
            {
                name: '主营业务',
                icon: 'icon-camera-retro' ,
                page:'qjjl',
                type:'1'
            },
            {
                name: '设备展示',
                icon: 'icon-camera-retro' ,
                page:'qjjl',
                type:'2'
            },
            {
                name: '生产工艺',
                icon: 'icon-camera-retro' ,
                page:'qjjl',
                type:'3'
            },
        ]
    }
];


//字典数据
var DICT = {
    sex:{1:'男',2:'女',3:'未知'},//性别
    //zwjb: {1:'董事长',2:'总经理',3: '普通职员'},//职务级别
    xwlx: {1:'公司信息',2:'一线传真',3:'行业动态',4:'专题活动'},
    gglx: {1:'公司公告',2:'财务公告'},
    zwdj: {1:'高级职位',2:'中级职位',3:'初级职位'}
};
