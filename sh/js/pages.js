
function getJSONData(pn) {
    //var dataUrl = $("#dataUrl").val();
    var detailsUrl = $("#detailsUrl").val();
    var data = dataUrl;
        var totalCount = data.length; // 总记录数  
        var pageSize = 6; // 每页显示几条记录  
        var pageTotal = Math.ceil(totalCount / pageSize); // 总页数  
        var startPage = pageSize * (pn - 1);
        var endPage = startPage + pageSize - 1;
        var $ul = $("#json-list");
        $ul.html("");
        if (pageTotal == 1) {     // 当只有一页时  
            for (var j = 0; j < totalCount; j++) {
                $ul.append('<div class="mainlist3"></div>');

                $(".mainlist3").eq(j).append("<div class='mainlist4'><a href='" + detailsUrl
                    + ".html?id=" + data[j].id
                    + "' title='" + data[j].title
                    + "' target='_blank'><img src='" + data[j].image
                    + "' /></a></div>").append("<div class='mainlist5'><div class='mainlist6'><a href='" + detailsUrl
                    + ".html?id=" + data[j].id
                    + "' title='" + data[j].title
                    + "' target='_blank'>" + funTitle(data[j].title)
                    + "</a></div>").append("<div><strong>时长：</strong>" + data[j].timelength
                    + "分钟</div>").append("<div><strong>制作团队：</strong>" + data[j].team
                    + "</div>").append("<div class='maincontent'><strong>内容介绍：</strong>" + cutString(data[j].content,64,'.....')
                    + "</div></div>");
            }
        } else {
            for (var j = startPage, k = 0; j < endPage, k < pageSize; j++, k++) {
                if (j == totalCount) {
                    break;       // 当遍历到最后一条记录时，跳出循环  
                }
                $ul.append('<div class="mainlist3"></div>');

                $(".mainlist3").eq(k).append("<div class='mainlist4'><a href='" + detailsUrl
                    + ".html?id=" + data[j].id
                    + "' title='" + data[j].title
                    + "' target='_blank'><img src='" + data[j].image
                    + "' /></a></div>").append("<div class='mainlist5'><div class='mainlist6'><a href='" + detailsUrl
                    + ".html?id=" + data[j].id
                    + "' title='" + data[j].title
                    + "' target='_blank'>" + funTitle(data[j].title)
                    + "</a></div>").append("<div><strong>时长：</strong>" + data[j].timelength
                    + "分钟</div>").append("<div><strong>制作团队：</strong>" + data[j].team
                    + "</div>").append("<div class='maincontent'><strong>内容介绍：</strong>" + cutString(data[j].content, 64, '.....')
                    + "</div></div>");
            }
        }


        $("#page-list span").removeClass("pagecurrent");
        $("#pageindex" + pn).addClass("pagecurrent");
  
}
function getPage() {

    //var dataUrl = $("#dataUrl").val();
    var data = dataUrl;
        pn = 1;
        var totalCount = data.length; // 总记录数  
        var pageSize = 6; // 每页显示几条记录  
        var pageTotal = Math.ceil(totalCount / pageSize); // 总页数  
       
        var $page = $("#page-list");
        var pagehtml='<span id="prev">上一页</span>';
        for (var j = 1; j <= pageTotal; j++) {
            pagehtml += '<span class="pagenum" id="pageindex' + j + '" onclick="gotoPage(' + j + ')">' + j + '</span>';
        }
        pagehtml+= '<span class="pagenum" id="next">下一页</span>';
        $page.html(pagehtml);

        $("#next").click(function () {
            if (pn == pageTotal) {
                alert("后面没有了,已经是最后一页了!");
                pn = pageTotal;
            } else {
                pn++;
                gotoPage(pn);
            }
        });
        $("#prev").click(function () {
            if (pn == 1) {
                alert("前面没有了,已经是第一页了!");
                pn = 1;
            } else {
                pn--;
                gotoPage(pn);
            }
        });
        gotoPage(pn);

}
function gotoPage(pn) {
    if (pn == null || pn.length <= 0 || pn <= 0) {
        pn = 1;
    }
    getJSONData(pn)
}
$(function () {
    setTimeout("getPage()", 150);
});

function cutString(str, len, suffix) {
    if (!str) return "";
    if (len <= 0) return "";
    if (!suffix) suffix = "";
    var templen = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            templen += 2;
        } else {
            templen++
        }
        if (templen == len) {
            return str.substring(0, i + 1) + suffix;
        } else if (templen > len) {
            return str.substring(0, i) + suffix;
        }
    }
    return str;
}


function funTitle(strTitle) {
    if (strTitle.indexOf("《") < 0) {
        strTitle = "&nbsp;&nbsp;" + strTitle;
    }
    return strTitle
}