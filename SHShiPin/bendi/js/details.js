function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

function getJSONDataDetails(id) {
    //var dataUrl = $("#dataUrl").val();
    var data = dataUrl;
    var totalCount = data.length; // 总记录数  
    for (var j = 0; j < totalCount; j++) {
        //if (data[j].id == id) {
        //    $("#title").html(data[j].title);
        //    $("#timelength").html(data[j].timelength);
        //    $("#team").html(data[j].team);
        //    $(".msdescribe").html(data[j].content);
        //    document.title = data[j].title;
        //    $("#url").html("<script src='http://p.bokecc.com/player?vid=" + data[j].urlid + "&siteid=9D3BB32E53DC188E&autoStart=true&width=600&height=490&playerid=4E4E29988263EAB3&playertype=1' type='text/javascript'></script>");
        //    break;
        //}


        if (data[j].id == id) {
            document.getElementById("title").innerHTML = data[j].title;
            document.getElementById("timelength").innerHTML = data[j].timelength;
            document.getElementById("team").innerHTML = data[j].team;
            document.getElementById("msdescribe").innerHTML = data[j].content;
            document.title = data[j].title;
            document.getElementById("url").innerHTML = "<iframe id='cciframe_5935C0297D3C378C9C33DC5901307461' src='http://p.bokecc.com/playhtml.bo?vid=" + data[j].urlid + "&siteid=9D3BB32E53DC188E&autoStart=true&width=600&height=490&playerid=4E4E29988263EAB3&playertype=1' frameborder='0' height='490' width='600'></iframe>";
            break;
        }
    }
}

function Initdetail(){
    var id = GetQueryString("id");
    if (id == null || id.length <= 0 || id <= 0) {
        id = 0;
    }

    setTimeout("getJSONDataDetails(" + id + ")", 800);

};

window.onload = Initdetail;