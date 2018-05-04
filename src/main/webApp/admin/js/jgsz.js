var nodeData = '';
$(function () {
    zzjgInfo();
    getData();
});

function getData() {
    $.post(ServerUrl + 'admin/zzjg/listall', {},function (json) {
        console.log(11,json);
        var treeData = json.data;
        zzjgTree(treeData);
    },'json');
}

function zzjgTree(zzjgData) {
    console.log(zzjgData);
    var setting = {
        view: {
            showIcon: showIconForTree
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true,
                txtSelectedEnable: false,
                idKey: "id",
                pIdKey: "pid",
                rootPId: null
            }
        },

        callback: {
            onClick: function (event, treeId, treeNode) {
                nodeData = treeNode;
                var name = treeNode.name;
                $('#zzjgTable').empty();
                $('#zzjgTableName').text(name);
                var tableData = treeNode.children;
                nodeId = treeNode.id;
                if(tableData && tableData.length){
                    $('#zzjgTable').empty();
                    for (var i = 0; i < tableData.length; i++) {
                        var tRow = tableData[i];
                        var html = '<tr data-expanded="true">' +
                            '<td>' + (i + 1) + '</td>' +
                            '<td>' + tRow.name + '</td>' +
                            '<td>' + tRow.dzblx + '</td>' +
                            '<td>' + tRow.ssgs + '</td>' +
                            '<td>' + tRow.jlsj + '</td>' +
                            '<td  dataid="'+tRow.id+'">' +
                            '<button class="btn btn-danger btn-xs del">删除</button>' +
                            '</td>' +
                            '</tr>';
                        $('#zzjgTable').append(html);
                    }
                }
            }
        }
    };

    function showIconForTree(treeId, treeNode) {
        //return !treeNode.isParent;
    };
    //初始化
    var treeObj = $.fn.zTree.init($("#zzjgTree"), setting, zzjgData);
    treeObj.expandAll(true);
    $('#zzjgTree_1_a').click(); //选中第一个节点

}
//添加组织机构
function zzjgInfo() {

    //添加组织机构
    $('#addZzjg').click(function () {
        $('#zzjgModal').find('.module-name').text('添加');
        $('#zzjgModal').modal('show');
        $('#zzjgForm')[0].reset();
    });

    //编辑组织机构
    $('#editZzjg').click(function () {
        $('#zzjgModal').find('.module-name').text('修改');
        $('#dzbmc').val(nodeData.name);
        $('#dzblx').val(nodeData.dzblx);
        $('#ssgs').val(nodeData.ssgs);
        $('#jlsj').val(nodeData.jlsj);
        $('#dataid').val(nodeData.id);
        $('#zzjgModal').modal('show');
    });
    //删除
    $('#zzjgTable').off('click.del').on('click.del', '.del', function () {
        var id = $(this).parent().attr('dataid');
        $('#accountDelModal').modal('show');
        $('#accountDelConfirm').click(function () {
            $.post(ServerUrl + 'admin/zzjg/remove',{id: id},function (json) {
                getData();
            });
        })
    });

    //确认添加,编辑
    $('#saveAddzzjg').off('click').on('click',function () {
        var parma = {};
        var t = $('#zzjgForm').serializeArray();
        $.each(t, function() {
            parma[this.name] = this.value;
        });
        parma.name = parma.dzbmc;
        //编辑保存
        if(parma.id){
            $.post(ServerUrl + 'admin/zzjg/modify', parma, function (json) {
                if(json.success){
                    $('#zzjgModal').modal('hide');
                    getData();
                }
            },'json');
        }
        //新增保存
        else{
            delete parma.id;
            parma.pid = nodeData.id;
            $.post(ServerUrl + 'admin/zzjg/save', parma, function (json) {
                if(json.success){
                    $('#zzjgModal').modal('hide');
                    getData();
                }
            },'json');
        }


        console.log(parma);

    });
}