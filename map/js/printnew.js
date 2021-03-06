/**
 * @name print.js
 * @page print.html
 * @author mingzijian
 */
$(function () {

    // 设定元素相对原点的初始位置
    var init_x = 0;
    var init_y = 0;

    // 设定各元素的初始位置
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

    // 循环添加元素移动事件监听,添加绝对定位,改变鼠标指针样式
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

    // 开始移动元素位置
    function beginmove(e, _this) {
        // 当前元素的位置
        var offset = _this.offset();
        var cx = offset.left;
        var cy = offset.top;
        // 当前鼠标的位置(移动前，鼠标按下)
        var sx = e.pageX;
        var sy = e.pageY;

        // 计算当前鼠标和元素之间位置的偏移量，让移动后的元素以鼠标按下时的位置为坐标。（默认以元素左上点为坐标）
        var px = sx - cx;
        var py = sy - cy;

        // 绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
        $(document).bind("mousemove", function (ev) {
            // 当前鼠标的位置（移动后，鼠标弹起）
            sx = ev.pageX;
            sy = ev.pageY;

            // 当前元素位置
            var _x = sx - px;
            var _y = sy - py;
            // 设定元素位置
            _this.css({
                'left': _x,
                'top': _y
            });
        });
        // 当鼠标按键弹起时，解除元素移动，让元素停留在当前位置
        $(document).mouseup(function () {
            $(this).unbind("mousemove");
            // 记录元素位置
            $.each(ids, function (i, _this) {
                // 当前元素的位置
                var offset = _this.offset();
                var cx = offset.left;
                var cy = offset.top;
                // 保存位置
                ids_x[i] = cx;
                ids_y[i] = cy;

            });

        })
    }
});
