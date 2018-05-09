//对象赋值
function setValueByJson(obj) {
    for(var k in obj){
        $('#'+k).val(obj[k]);
    }
}

//初始化字典选择框
function dictInit(id,dict) {
    var option = '';
    for(var k in dict){
        option += '<option value="'+k+'">'+dict[k]+'</option>'
    }
    $('#'+id).append(option);
}

//设置子框架容器高度
function setContainerHeight(height) {
    $('#wrapper').height(height + 10);
}
//获取子框架body高度,调用父框架方法执行
function setFrameHeight() {
    var height = $('body').height();        //获取自框架body的高度
    parent.setContainerHeight(height);      //调用父框架方法设置容器高度
}

/*** 工具函数方法 ***/

//获取页面参数
function getUrlParam() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = [];
        if(str.indexOf('&') != -1){
            strs = str.split("&");
        }
        else{
            strs[0] = str;
        }

        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//initTable,初始化table插件
function initDataTable() {
    $.fn.dataTable = function(options) {
        var defaultOptions = {
            url: ServerUrl + '/website/json/test.json',
            method: 'get',      //请求方式（*）
            cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
            striped: true,  //表格显示条纹，默认为false
            pagination: true, // 在表格底部显示分页组件，默认false
            pageList: [5,10,20], // 设置页面可以显示的数据条数
            pageSize: 10, // 页面数据条数
            pageNumber: 1, // 首页页码
            sidePagination: 'server', // 设置为服务器端分页
            columns: [],
            onLoadSuccess: function(){  //加载成功时执行
                console.info("加载成功");
            },
            onLoadError: function(){  //加载失败时执行
                console.info("加载数据失败");
            },
            /*queryParamsType : "undefined",
            queryParams: function queryParams(params) {   //设置查询参数
                return {
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize,
                    orderNum : $("#orderNum").val()
                }
            },*/
        };
        var opt = $.extend({},defaultOptions,options);
        this.bootstrapTable(opt);
    }
}

//新增,保存表单数据
function operateData(opt) {
    //点击新增
    $('#addDataBtn').off('click').on('click',function () {
        $('#modalTitle').text('新增');
        $("#dataForm")[0].reset();
        $('#dataModal').modal('show');
        $('#editId').val('');
    });
    //点击保存
    $('#saveDataBtn').off('click').on('click',function () {
        var formData = new FormData($("#dataForm")[0]);
        var dataId = $('#editId').val();
        //编辑保存
        if(dataId){

        }
        //新增保存
        else{

        }

        $.ajax({
            cache: false,
            contentType: false,
            processData: false,
            url: '1.html',
            type: 'post',
            data: formData,
            dataType: 'json',
            success: function (json) {
                console.log(json);
                $('#dataModal').modal('hide');
            },
            error: function () {
                alert('err');
            }
        });

    });
}

//表格操作按钮
function tableBtn(id,type) {
    $('#dataTable').dataTable('refresh');
    //删除
    if(type == 'del'){
        $('#delId').val(id);
        $('#delModal').modal('show');
        $('#delConfirm').off('click').on('click',function () {
            var delId = $('#delId').val();
            alert(delId);
            $('#delModal').modal('hide');
        });
    }
    //编辑
    else if(type == 'edit'){
        $("#dataForm")[0].reset();
        $('#modalTitle').text('编辑');
        $('#editId').val('id');
        $('#dataModal').modal('show');
    }
}

//表单赋值
function setFormParam() {
    //简便方法
    $('#info_form').find('[name]').each(function() {
        var type = $(this)[0].nodeName.toLowerCase();
        var name = $(this).attr('name');
        $(type+"[name='"+name+"']").val(data[''+name+'']);
    });
}
//表单取值
function getFormParam(){
    var param = {};
    //简便方法
    $('#info_form').find('[name]').each(function() {
        param[$(this).attr('name')] = $(this).val();
    });
}