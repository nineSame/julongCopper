$(function () {
    getUserInfo(1, 100)
});

function getUserInfo(pageno, pagesize) {
    $.post(ServerUrl + 'admin/account/list', {pageno: pageno, pagesize: pagesize}, function (json) {
        if(json.success){
            var data = json.data;
            var trHtml = '';
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                trHtml += '<tr>\n' +
                    '<td>' + item.userid + '</td>\n' +
                    '<td>' + item.loginname + '</td>\n' +
                    '<td>' + item.username + '</td>\n' +
                    '<td>' + item.sex + '</td>\n' +
                    '<td>' + item.idnumber + '</td>\n' +
                    '<td dataid="' + item.id + '">\n' +
                    '    <button btn-type="edit" class="btn btn-default btn-xs edit-user">编辑</button>\n' +
                    '    <button btn-type="del" class="btn btn-danger btn-xs edit-user">删除</button>\n' +
                    '</td>\n' +
                    '</tr>'
            }
            $('#userTbody').empty().append(trHtml);
            //点击编辑
            $('#userTbody .edit-user').off('click').on('click', function () {
                var $this = $(this);
                var btnType = $this.attr('btn-type');
                var dataId = $this.parent().attr('dataid');
                if(btnType == 'del'){
                    $('#accountDelModal').modal('show');
                    $('#accountDelConfirm').click(function () {
                        $.post(ServerUrl + 'admin/account/remove',{id: dataId},function (json) {
                            getUserInfo(1, 100);
                        });
                    })
                }else{
                    $.post(ServerUrl + 'admin/account/show',{accountId: dataId},function (json) {
                        var data = json.data;
                        $('#loginname').val(data.loginname);
                        $('#username').val(data.username);
                    },'json');
                    $('#userInfoModal').modal('show');
                    $('#saveUserInfo').click(function () {
                        var formObj = {};
                        var formData = $('#userInfoModal form').serializeArray();
                        $.each(formData, function() {
                            formObj[this.name] = this.value;
                        });
                        formObj.id = dataId;
                        console.log(formObj);
                        $.post(ServerUrl + 'admin/account/modify',formObj,function (json) {
                            console.log(json);
                            getUserInfo(1, 100);
                        });
                    });
                }
            });
        }
        else if(json.code == 110){
            alert(json.msg);
            location.href = 'login.html';
        }
    }, 'json')
}