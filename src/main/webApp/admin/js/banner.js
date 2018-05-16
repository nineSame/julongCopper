//接口地址
var urlConfig = {
    displayUrl : ServerUrl + '/banner/display',
    show : ServerUrl + '/banner/display',
    addUrl : ServerUrl + '/banner/create',
    delUrl : ServerUrl + '/banner/del',
    updateUrl : ServerUrl + '/banner/update'
};
$(function(){
    getData();//获取数据
    operateDataBanner();//操作数据

});

//新增,保存表单数据
function operateDataBanner() {
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


function getData() {
    $("#dataTable").dataTable({ // 对应table标签的id
        //表头信息添加
        columns: [
            {
                field: 'tpbt',
                title: '名称',
                align: 'center'
            },
            {
                field: 'tpms',
                title: '图片描述',
                align: 'center',
                maxWidth: 200
            },
            {
                field: 'tplj',
                title: '文件路径',
            },
            {
                title: "操作",
                align: 'center',
                valign: 'middle',
                width: 160, // 定义列的宽度，单位为像素px
                formatter: function (value, row, index) {
                    var btn = '<button class="btn btn-primary btn-xs" onclick="tableBtn(\'' + row.id + '\',\'edit\')">编辑</button> ';
                    btn += '<button class="btn btn-danger btn-xs" onclick="tableBtn(\'' + row.id + '\',\'del\')">删除</button>';
                    return btn;
                }
            }
        ],
        pagination: false,
        responseHandler: function(res) {
            return {
                "rows": res.data
            };
        }
    });
}
