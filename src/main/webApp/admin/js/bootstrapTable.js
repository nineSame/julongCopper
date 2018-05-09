//示例说明:
function initTable(){
    var methodNameSearch=$("#methodNameSearch").val();
    var requestUrl = "/manage/json/validateMethodDefineSearchList.json?methodNameSearch=" + methodNameSearch;

    var $table = $('#table');
    $table.bootstrapTable({
        url: requestUrl,
        method: 'get',      //请求方式（*）
        //toolbar: '#toolbar',    //工具按钮用哪个容器
        striped: true,      //是否显示行间隔色
        cache: false,      //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,     //是否显示分页（*）
        sortable: false,      //是否启用排序
        sortOrder: "asc",     //排序方式
        //queryParams: queryParams,//传递参数（*）
        pageNumber:1,      //初始化加载第一页，默认第一页
        pageSize: 20,      //每页的记录行数（*）
        pageList: [10, 20, 50, 100],  //可供选择的每页的行数（*）
        //search: true,      //是否显示表格搜索，此搜索是客户端搜索，不会进服务端
        //strictSearch: true,
        //showColumns: true,     //是否显示所有的列
        //showRefresh: true,     //是否显示刷新按钮
        minimumCountColumns: 2,    //最少允许的列数
        clickToSelect: true,    //是否启用点击选中行
        uniqueId: "id",      //每一行的唯一标识，一般为主键列
        showToggle:false,     //是否显示详细视图和列表视图的切换按钮

        sidePagination: "server", //服务端处理分页
        queryParamsType : "undefined",
        queryParams: function queryParams(params) {   //设置查询参数
            var param = {
                pageNumber: params.pageNumber,
                pageSize: params.pageSize,
                orderNum : $("#orderNum").val()
            };
            return param;
        },
        onLoadSuccess: function(){  //加载成功时执行
            layer.msg("加载成功");
        },
        onLoadError: function(){  //加载失败时执行
            layer.msg("加载数据失败", {time : 1500, icon : 2});
        },
        columns: [
            {title: 'id',field: 'id', visible: false, align: 'center',valign: 'middle'},
            {title: '名称',field: 'methodName',align: 'center',valign: 'middle'},
            {title: '<span style="font-family:Microsoft YaHei;">类名</span>',field: 'methodCode',align: 'center',valign: 'middle'},
            {title: '组名隐藏',field: 'methodGroup', visible: false, align: 'center',valign: 'middle'},
            {title: '组名',field: 'methodGroupName',align: 'center',valign: 'middle'},
            {title: '操作',field: '#',align: 'center',
                formatter:function(value,row,index){
                    var e = '<a href="#" mce_href="#" onclick="onEditClick(\''+ row.id + '\',\'' +row.methodName+ '\',\'' +row.methodCode+ '\',\'' +row.methodGroup+'\')">编辑</a> ';
                    var d = '<a href="#" mce_href="#" onclick="onDeleteClick(\''+ row.id +'\')">删除</a> ';
                    return e+d;
                }
            }
        ]
    });
}