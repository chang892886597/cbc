/**
 * @name print.js
 * @page print.html
 * @author mingzijian
 */
$(function () {

    // �趨Ԫ�����ԭ��ĳ�ʼλ��
    var init_x = 0;
    var init_y = 0;

    // �趨��Ԫ�صĳ�ʼλ��
    var _stuname = $("#stuname");
    var stuname_x = 10;
    var stuname_y = 10;
    var _feeacount = $("#feeacount");
    var feeacount_x = 10;
    var feeacount_y = 70;
    var _schoolname = $("#schoolname");
    var schoolname_x = 10;
    var schoolname_y = 40;

    var ids = [_stuname, _feeacount, _schoolname];
    var ids_x = [stuname_x, feeacount_x, schoolname_x];
    var ids_y = [stuname_y, feeacount_y, schoolname_y];

    // ѭ�����Ԫ���ƶ��¼�����,��Ӿ��Զ�λ,�ı����ָ����ʽ
    $.each(ids, function (i, _this) {
        _this.css({
            'position': 'absolute',
            'cursor': 'crosshair',
            'left': ids_x[i],
            'top': ids_y[i]
        });

        _this.mousedown(function (e) {
            beginmove(e, _this);
        });
    });

    // ��ʼ�ƶ�Ԫ��λ��
    function beginmove(e, _this) {
        // ��ǰԪ�ص�λ��
        var offset = _this.offset();
        var cx = offset.left;
        var cy = offset.top;
        // ��ǰ����λ��(�ƶ�ǰ����갴��)
        var sx = e.pageX;
        var sy = e.pageY;

        // ���㵱ǰ����Ԫ��֮��λ�õ�ƫ���������ƶ����Ԫ������갴��ʱ��λ��Ϊ���ꡣ��Ĭ����Ԫ�����ϵ�Ϊ���꣩
        var px = sx - cx;
        var py = sy - cy;

        // �������ƶ��¼�����Ϊ�����DIVԪ������ҲҪ��Ч��������Ҫ��doucment���¼���������DIVԪ�ص��¼�
        $(document).bind("mousemove", function (ev) {
            // ��ǰ����λ�ã��ƶ�����굯��
            sx = ev.pageX;
            sy = ev.pageY;

            // ��ǰԪ��λ��
            var _x = sx - px;
            var _y = sy - py;
            // �趨Ԫ��λ��
            _this.css({
                'left': _x,
                'top': _y
            });
        });
        // ����갴������ʱ�����Ԫ���ƶ�����Ԫ��ͣ���ڵ�ǰλ��
        $(document).mouseup(function () {
            $(this).unbind("mousemove");
            // ��¼Ԫ��λ��
            $.each(ids, function (i, _this) {
                // ��ǰԪ�ص�λ��
                var offset = _this.offset();
                var cx = offset.left;
                var cy = offset.top;
                // ����λ��
                ids_x[i] = cx;
                ids_y[i] = cy;

            });

        })
    }
});
