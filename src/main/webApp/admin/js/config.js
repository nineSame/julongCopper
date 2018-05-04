//左侧菜单
var HomeMenu = [
    {
        name: '首页',                //名称
        type: 'home',
        icon: 'fa-home' ,           //图标样式
        children: []                //子目录
    },
    {
        name: '统计分析',
        type: 'tjfx',
        icon: 'fa-bar-chart-o' ,
        children: []
    },
    {
        name: '组织机构',
        icon: 'fa-sitemap',
        children: [
            {name: '机构设置',type: 'jgsz'},
            {name: '机构统计',type: 'sjtj'}
        ]
    },
    {
        name: '党员管理',
        icon: 'fa-users',
        children: [
            {name: '领导机构(单独)',type: 'ldjg'},
            {name: '党员发展管理',type: 'dyfzgl'},
            {name: '正式党员管理',type: 'zsdygl'},
            {name: '流动党员管理',type: 'lddygl'},
            {name: '党员注销管理',type: 'dyzxgl'},
            {name: '党费收缴管理',type: 'dfsjgl'},
            {name: '党员评议管理',type: 'dypygl'}
        ]
    },
    {
        name: '党员服务',
        icon: 'fa-tasks',
        children: [
            {name: '党员服务管理',type: 'dyfw'},
            {name: '志愿者服务',type: 'zyzfw'},
        ]
    },
    {
        name: '党员活动',
        icon: 'fa-th-large',
        children: [
            {name: '党组工作开展',type: 'hdkz'},
            {name: '党组工作统计',type: 'hdqktj'}
        ]
    },
    {
        name: '社区营造管理',
        icon: 'fa-th-large',
        children: [
            {name: '社区宣传管理',type: 'sqyz1'},
            {name: '社区活动管理',type: 'sqyz2'}
        ]
    },
    {
        name: '院落自治管理',
        icon: 'fa-th-large',
        children: [
            {name: '社区治理',type: 'sqzl'},
            {name: '楼栋自治',type: 'ldzz'}
        ]
    },
    {
        name: '党员积分管理',
        icon: 'fa-th-large',
        children: [
            {name: '志愿者积分',type: 'zyzjf'},
            {name: '党员义工积分',type: 'dyygjf'}
        ]
    },
    {
        name: '居民议事管理',
        icon: 'fa-comments-o',
        children: [
            {name: '议题受理情况',type: 'ytslqk'},
            {name: '议题审查情况',type: 'ytscqk'},
            {name: '会议公告信息',type: 'hyggxx'},
            {name: '会议通知信息',type: 'hytzxx'},
            {name: '表决决议公告',type: 'bjjygg'},
            {name: '实施结果公告',type: 'ssjggg'},
            {name: '实施结果季度公告',type: 'ssjgjdgg'}
        ]
    },
    {
        name: '信息要闻',
        icon: 'fa-list-alt',
        children: [
            {name: '党建要闻',type: 'djyw'},
            {name: '党务公开',type: 'dwgk'},
            {name: '街道动态',type: 'jddt'}
        ]
    },
    {
        name: '党员e家',
        icon: 'fa-compass',
        children: [
            {name: '党务知识',type: 'dwzs'},
            {name: '党建视频',type: 'djsp'},
            {name: '爱心救助',type: 'axjz'},
            {name: '志愿活动',type: 'zyhd'}
        ]
    },
    {
        name: '用户管理',
        icon: 'fa-user',
        type: 'user',
        children: []
    }
];

var LoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo'));
//服务器接口地址
var ServerUrl = location.origin + '/djxt/';
//字典数据
var DICT = {
    dylx: {
        1: '入党积极分子',
        2: '党员发展对象',
        3: '预备党员',
        4: '预备转正党员',
        5: '正式党员',
        6: '流动党员',
        7: '注销党员'
    },
    sex:{1:'男',2:'女',3:'未知'},
    xl: {1:'小学',2:'初中',3:'高中',4:'大专',5:'本科',6:'硕士',7:'博士'}
};
