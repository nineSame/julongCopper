
var LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
//服务器接口地址
var ServerUrl = location.origin;
//左侧菜单
var HomeMenu = [
    {
        name: '首页管理',
        icon: 'fa-home' ,
        children: [
            {name: '首页信息',type: 'home'},
            {name: '首页banner',type: 'banner'}
        ]
    },
    {
        name: '新闻管理',
        icon: 'fa-home' ,
        children: [
            {name: '公司信息',type: 'debug'},
            {name: '社会责任',type: 'debug'},
            {name: '大事记',type: 'debug'},
            {name: '专题活动',type: 'debug'}
        ]
    },
    {
        name: '投资者关系',
        icon: 'fa-home' ,
        children: [
            {name: '公司公告',type: 'debug'},
            {name: '章程制度',type: 'debug'},
            {name: '发展理念',type: 'debug'},
            {name: '企业文化',type: 'debug'},
            {name: '财务报告',type: 'debug'},
        ]
    },
    {
        name: '关于我们',
        icon: 'fa-home' ,
        children: [
            {name: '公司简介',type: 'debug'},
            {name: '组织机构',type: 'debug'},
            {name: '发展理念',type: 'debug'},
            {name: '企业文化',type: 'debug'},
            {name: '联系方式',type: 'debug'},
        ]
    },
    {
        name: '人员管理',
        icon: 'fa-home' ,
        type: 'user',
        children: []
    },{
        name: '网站首页',
        icon: 'fa-home' ,
        type: 'index'
    }

];


//字典数据
var DICT = {
    sex:{1:'男',2:'女',3:'未知'},
    xl: {1:'小学',2:'初中',3:'高中',4:'大专',5:'本科',6:'硕士',7:'博士'},
    zwjb: {1:'董事长',2:'总经理',3: '普通职员'}
};
