$(function () {
    getDfInfo();//获取党费信息
    getDyInfoByIdNumber();
    saveDfInfo();
});

function getDfInfo() {
    $.post(ServerUrl + 'admin/dfjn/list', {pageno:1,pagesize:100},function (json) {
        var data = json.data;
        var trHtml = '';
        for(var i=0;i<data.length;i++){
            var item = data[i];
            var userinfo = item.userinfo;
            trHtml += '<tr>\n' +
                '<td>'+userinfo.username+'</td>\n' +
                '<td>'+DICT.sex[userinfo.sex]+'</td>\n' +
                '<td>'+userinfo.mz+'</td>\n' +
                '<td>'+userinfo.idnumber+'</td>\n' +
                '<td>'+item.jkje+' 元</td>\n' +
                '<td>'+item.jksj+'</td>\n' +
                '<td dataid="'+item.id+'">\n' +
                '    <button class="btn btn-default btn-xs edit">编辑</button>\n' +
                '</td>\n' +
            '</tr>';
        }
        $('#dfjnTbody').empty().append(trHtml);
    },'json');
    //编辑
    $('#dfjnTbody').off('click.edit').on('click.edit','.edit',function (json) {
         var dataid = $(this).parent().attr('dataid');
        $('#addInfoModal form')[0].reset();
        $.post(ServerUrl + 'admin/dfjn/show',{id: dataid},function (json) {
            console.log('edit:', json);
            var data = json.data;
            for(var k in data){
                var item = data[k];
                if(k == 'userinfo'){
                    setValueByJson(item);
                }
                else if(k == 'id'){
                    $('#dataid').val(item);
                }
                else{
                    $('#'+k).val(item);
                }

            }
        },'json');
        $('#addInfoModal').modal('show');
    });
    //点击新增
    $('#addDyInfoBtn').off('click').on('click', function () {
        $('#addInfoModal form')[0].reset();
        $('#dataid').val('');
        $('#addInfoModal').modal('show');
    });
}

function getDyInfoByIdNumber() {
    $('#idnumber').off('blur').on('blur',function () {
        var idnumber = $(this).val();
        if(idnumber){
            $.post(ServerUrl + 'admin/user/getbysfz',{idnumber: idnumber},function (json) {
                if(json.success){
                    var data = json.data;
                    setValueByJson(data);
                }else{
                    alert(json.msg);
                }
                console.log(json);
            }, 'json');
        }
    });
}

function saveDfInfo() {
    $('#saveDfInfo').off('click').on('click',function () {
        //新增接口地址
        var saveUrl = ServerUrl + 'admin/dfjn/save';
        var formObj = {};
        var formData = $('#addInfoModal form').serializeArray();
        $.each(formData, function() {
            formObj[this.name] = this.value;
        });
        formObj.id = formObj.dataid;
        console.log(formObj);
        //编辑保存
        if(formObj.dataid){
            saveUrl = ServerUrl + 'admin/dfjn/modify';
        }
        $.post(saveUrl,formObj,function (json) {
            if(json.success){
                getDfInfo();
                $('#addInfoModal').modal('hide');
            }
            else{
                alert(json.msg);
                console.log(33,json);
            }
        }, 'json');
    });
}