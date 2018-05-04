$(function () {
    getDyInfo();
});

//获取党员信息
function getDyInfo() {
    $.post(ServerUrl + 'admin/user/list',{pageno:1,pagesize:100,lx:$('#dylxType').val()},function (json) {
        var trHtml = '';
        var data = json.data;
        for(var i=0;i<data.length;i++){
            var item = data[i];
            trHtml += '<tr>\n' +
                '<td>'+item.username+'</td>\n' +
                '<td>'+DICT.sex[item.sex]+'</td>\n' +
                '<td>'+DICT.xl[item.xl]+'</td>\n' +
                '<td>'+DICT.dylx[item.lx]+'</td>\n' +
                '<td>'+item.phone+'</td>\n' +
                '<td userid="'+item.userid+'">\n' +
                '<button class="btn btn-default btn-xs edit">编辑</button>\n' +
                '</td>\n' +
                '</tr>';
        }
        $('#dyInfoTbdy').empty().append(trHtml);
    }, 'json');

    //点击编辑
    $('#dyInfoTbdy').off('click.edit').on('click.edit', '.edit', function () {
        $('#addInfoModal form')[0].reset();
        var userid = $(this).parent().attr('userid');
        $.post(ServerUrl + 'admin/user/show',{userid: userid},function (json) {
            console.log('edit:', json);
            var data = json.data;
            for(var k in data){
                $('#'+k).val(data[k]);
            }
        },'json');
        $('#addInfoModal').modal('show');
    });
    //点击新增
    $('#addDyInfoBtn').off('click').on('click', function () {
        $('#addInfoModal form')[0].reset();
        $('#userid').val('');
        $('#addInfoModal').modal('show');
    });
    //点击保存
    $('#saveDyInfo').off('click').on('click', function () {
        //新增接口地址
        var saveUrl = ServerUrl + 'admin/user/save';
        var formObj = {};
        var formData = $('#addInfoModal form').serializeArray();
        $.each(formData, function() {
            formObj[this.name] = this.value;
        });
        //编辑保存
        if(formObj.userid){
            saveUrl = ServerUrl + 'admin/user/modify';
        }
        $.post(saveUrl,formData,function (json) {
            if(json.success){
                getDyInfo();
                $('#addInfoModal').modal('hide');
            }
            else{
                alert(json.msg);
                console.log(33,json);
            }
        }, 'json');
    });
}