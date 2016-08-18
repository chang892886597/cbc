function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getJSONDataDetails(id) {
    var dataUrl = $("#dataUrl").val();
    $.getJSON(dataUrl, function (data) {
        var totalCount = data.length; // 总记录数  
        for (var j = 0; j < totalCount; j++) {
            if (data[j].id == id) {
                $("#title").html(data[j].title);
                $("#timelength").html(data[j].timelength);
                $("#team").html(data[j].team);
                $(".msdescribe").html(data[j].content);
                document.title = data[j].title;
                break;
            }
        }
    })
}

$(function () {
    var id = GetQueryString("id");
    if (id == null || id.length <= 0 || id <= 0) {
        id = 0;
    }
    getJSONDataDetails(id);
});
