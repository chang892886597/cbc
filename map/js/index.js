$(function () {
      function setRedBall(r) {
        var $wrap = $('.wrap');
        var radius = r;
        var w = radius * 2;
        var h = radius * 2;
        var x, y, offset;

        return function (e) {
          offset = $(this).offset();
          x = e.pageX - offset.left;
          y = e.pageY - offset.top;

          var left=x - radius;
          var top=y - radius;


          $(".red-ball").remove();

          $('<span class="red-ball">').css({
              left:left ,
              top: top,
            width: w,
            height: h
          }).appendTo(this);

          var addDouCss = " left: " + left + ",top:" + top + ",width: " + w + ",height: " + h;
          console.log(addDouCss);




            // �趨Ԫ�����ԭ��ĳ�ʼλ��
          var init_x = 0;
          var init_y = 0;

            // �趨��Ԫ�صĳ�ʼλ��
          var _stuname = $(".red-ball");
          var stuname_x = left;
          var stuname_y = top;


          var ids = [_stuname];
          var ids_x = [stuname_x];
          var ids_y = [stuname_y];

            // ѭ�����Ԫ���ƶ��¼�����,��Ӿ��Զ�λ,�ı����ָ����ʽ
          $.each(ids, function (i, _this) {
              _this.css({
                  'position': 'absolute',
                  'cursor': 'crosshair',
                  'left': ids_x[i],
                  'top': ids_y[i]
              });

              // ��ʼ�ƶ�Ԫ��λ��
              _this.mousedown(function (e) {
                  
                  // ��ǰԪ�ص�λ��
                  ////var offset = _this.offset();
                  ////var cx = offset.left;
                  ////var cy = offset.top;


                  var cx = ids_x[0];
                  var cy = ids_y[0];




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
              });
          });
        }
      }

      $('.wrap').on('click', setRedBall(10));


    })