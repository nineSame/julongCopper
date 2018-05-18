//对象赋值
function setValueByJson(obj) {
    for(var k in obj){
        $('#'+k).val(obj[k]);
    }
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
//初始化字典选择框
function dictInit(id,dict) {
    var option = '';
    for(var k in dict){
        option += '<option value="'+k+'">'+dict[k]+'</option>'
    }
    $('#'+id).append(option);
}

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
            contentType: 'application/x-www-form-urlencoded',
            url: urlConfig.displayUrl,
            method: 'post',      //请求方式（*）
            cache: false, // 设置为 false 禁用 AJAX 数据缓存， 默认为true
            striped: true,  //表格显示条纹，默认为false
            pagination: true, // 在表格底部显示分页组件，默认false
            pageList: [5,10,20], // 设置页面可以显示的数据条数
            pageSize: 10, // 页面数据条数
            pageNumber: 1, // 首页页码
            sidePagination: 'server', // 设置为服务器端分页
            columns: [],
            undefinedText:'',
            onLoadSuccess: function(){  //加载成功时执行
                //console.info("加载成功");
            },
            onLoadError: function(){  //加载失败时执行
                console.info("加载数据失败");
            },
            queryParamsType : "undefined",
            queryParams: function(params) {   //设置查询参数
                return {
                    page: params.pageNumber,
                    size: params.pageSize
                }
            },
            responseHandler: function(res) {
                return {
                    "total": res.data.totalElements,//总页数
                    "rows": res.data.content,//数据
                };
            }
        };
        var opt = $.extend({},defaultOptions,options);
        this.bootstrapTable(opt);
    }
}

//新增,保存表单数据
//新增,保存表单数据



//表格操作按钮
function tableBtn(dataId,type) {
    //删除
    if(type == 'del'){
        $('#delId').val(dataId);
        $('#delModal').modal('show');
        $('#delConfirm').off('click').on('click',function () {
            $.post(urlConfig.delUrl, {id:dataId},function (res) {
                if(res.resCode == 200){
                    $("#dataTable").bootstrapTable('refresh',{});
                    $('#delModal').modal('hide');
                }else{
                    alert(res.resMsg);
                }
            },'json');
        });
    }
    //编辑
    else if(type == 'edit'){
        $("#dataForm")[0].reset();
        $('#modalTitle').text('编辑');
        $('#editId').val(dataId);
        $('#dataModal').modal('show');
        $.post(urlConfig.show, {id:dataId},function (json) {
            if(json.resCode == 200){
                console.log(json);
                //$("#dataTable").bootstrapTable('refresh',{});
                //$('#delModal').modal('hide');
                var data = json.data;
                for(var k in data){
                    var v = data[k];
                    $('#' + k).val(v);
                }
                //setFormParam("#dataForm",data)
            }else{
                alert(res.resMsg);
            }
        },'json');
    }
}

//表单赋值
function setFormParam(formElement,data) {
    //简便方法
    $(formElement).find('[name]').each(function() {
        var type = $(this)[0].nodeName.toLowerCase();
        var name = $(this).attr('name');
        $(type+"[name='"+name+"']").val(data[''+name+'']);
    });
}

function operateData() {
    imgViewByInput('imgFile','imgView');//选择文件预览图片
    //点击新增
    $('#addDataBtn').off('click').on('click',function () {
        $('#modalTitle').text('新增');
        $("#dataForm")[0].reset();
        $('#dataModal').modal('show');
        $('#editId').val('');
        $('#imgView').prop('src','../images/no_pic.png');
    });
    //点击保存
    $('#saveDataBtn').off('click').on('click',function () {
        var formData = new FormData($("#dataForm")[0]);
        var dataId = $('#editId').val();
        var file = $('#imgFile').val();
        var url = urlConfig.addUrl;
        //编辑保存
        if(dataId){
            url = urlConfig.updateUrl;
            formData.append('id',dataId);
        }
        //新增
        else{
            if(!file){
                alert('请选择图片!');
                return false;
            }
        }
        if(!file){
            formData.delete('tpfile');
        }
        $.ajax({
            cache: false,
            contentType: false,
            processData: false,
            url: url,
            type: 'post',
            data: formData,
            dataType: 'json',
            success: function (json) {
                if(json.resCode == 200){
                    $('#dataModal').modal('hide');
                    $("#dataTable").bootstrapTable('refresh',{});
                }else{
                    alert(json.resMsg);
                }

            },
            error: function () {
                alert('服务器错误');
            }
        });

    });
}
//表单取值
function getFormParam(elem){
    var formObj = {};
    var formData = $(elem).serializeArray();
    $.each(formData, function() {
        formObj[this.name] = this.value;
    });
    return formObj;
}
//点击input预览图片
function imgViewByInput(inputId,imgId) {
    //显示更新图片
    $('#' + inputId).off('change').on('change', function () {
        //检验是否为图像文件
        var file = document.getElementById(inputId).files[0];
        if(!/image\/\w+/.test(file.type)){
            alert("请添加图片格式文件！");
            return false;
        }
        var reader = new FileReader();
        //将文件以Data URL形式读入页面
        reader.readAsDataURL(file);
        reader.onload=function(e){
            var result=document.getElementById(imgId);
            $('#' + imgId).prop('src',this.result);
            //显示文件
            //result.innerHTML='<img src="' + this.result +'" alt="" />';
        }
    });
}

