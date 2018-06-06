//接口地址
var urlConfig = {
    displayUrl : ServerUrl + '/user/page',
    addUrl : ServerUrl + '/user/create',
    show : ServerUrl + '/user/seaarchById',
    updateUrl: ServerUrl + '/user/update',
    delUrl: ServerUrl + '/user/del'
};
$(function(){
    getData();
    operateDataUser();//操作数据
    dictInit('xb',DICT.sex);
    dictInit('zwdjpx',DICT.zwdj);
});

function operateDataUser(type) {
    imgViewByInput('imgFile','imgView');//选择文件预览图片

    //点击编辑图片
    $('#imgEditBtn').off('click').on('click',function () {
        $('#imgFile').click();
    });

    //点击新增
    $('#addDataBtn').off('click').on('click',function () {
        $('#modalTitle').text('新增');
        //$("#dataForm")[0].reset();
        $('#dataModal').modal('show');
        $('#editId').val('');
        $('#imgView').prop('src','../images/no_pic.png');
    });
    //点击保存
    $('#saveDataBtn').off('click').on('click',function () {
        var formData = new FormData($("#dataForm")[0]);
        var dataId = $('#editId').val();
        var password = $('#password').val();
        var file = $('#imgFile').val();
        var url = urlConfig.addUrl;
        //编辑保存
        if(dataId){
            url = urlConfig.updateUrl;
            formData.append('id',dataId);
            if(password){
                formData.append('mm',password);
            }
        }
        //新增
        else{
            password = password || '123456';
            formData.append('mm',password);
        }
        if(!file){
            formData.delete('zpfile');
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
                console.log(json);
                if(json.resCode == 200){
                    $('#dataModal').modal('hide');
                    $("#dataTable").bootstrapTable('refresh',{});
                }else{
                    alert(json.resMsg);
                }

            },
            error: function () {
                alert('err');
            }
        });

    });
}

function getData() {
    $("#dataTable").dataTable({ // 对应table标签的id
        //表头信息添加
        columns: [
            {
                field: 'xm',
                title: '姓名',
                align: 'center'
            },
            {
                field: 'zh',
                title: '账号',
                align: 'center'
            },

            {
                field: 'xb',
                title: '性别',
                align: 'center',
                formatter: function (value, row, index) {
                    return DICT.sex[value];
                }
            },
            {
                field: 'sfzh',
                title: '身份证号',
                align: 'center'
            },
            {
                field: 'zw',
                title: '公司职务',
                align: 'center'
            },
            {
                field: 'zwdjpx',
                title: '职务等级',
                align: 'center',
                formatter: function (value, row, index) {
                    return DICT.zwdj[value];
                }
            },
            {
                title: "操作",
                align: 'center',
                width: 160, // 定义列的宽度，单位为像素px
                formatter: function (value, row, index) {
                    var btn = '<button class="btn btn-primary btn-xs" onclick="tableBtn(\'' + row.id + '\',\'edit\')">编辑</button> ';
                    btn += '<button class="btn btn-danger btn-xs" onclick="tableBtn(\'' + row.id + '\',\'del\')">删除</button>';
                    if(row.zh == 'admin'){
                        btn = '';
                    }
                    return btn;
                }
            }
        ]
    });
}