function showLoading () {
	showLoading("");
}

function showLoading (loadingText) {
	var theme = "b";
	var msgText = loadingText
	var textonly = false;
	var textVisible = true;
	var html = "";
	
	$.mobile.loading( "show", {
			text: msgText,
			textVisible: textVisible,
			theme: theme,
			textonly: textonly,
			html: html
	});
	//$("body").append('<div class="overlay" style="width:100%;height:100%;position:absolute;background:#000;opacity:0.3;-webkit-opacity:0.3;z-index:99999;"></div>');
}

function hideLoading () {
	$.mobile.loading( "hide" );
	//$("div.overlay").remove();
}

try {
window.AG_onLoad = function(func) { if (window.addEventListener) { window.addEventListener('DOMContentLoaded', func); } };
window.AG_removeElementById = function(id) { var element = document.getElementById(id); if (element && element.parentNode) { element.parentNode.removeChild(element); }};
window.AG_removeElementBySelector = function(selector) { if (!document.querySelectorAll) { return; } var nodes = document.querySelectorAll(selector); if (nodes) { for (var i = 0; i < nodes.length; i++) { if (nodes[i] && nodes[i].parentNode) { nodes[i].parentNode.removeChild(nodes[i]); } } } };
window.AG_each = function(selector, fn) { if (!document.querySelectorAll) return; var elements = document.querySelectorAll(selector); for (var i = 0; i < elements.length; i++) { fn(elements[i]); }; };
var AG_removeParent = function(el, fn) { while (el && el.parentNode) { if (fn(el)) { el.parentNode.removeChild(el); return; } el = el.parentNode; } };
} catch (ex) { console.error('Error executing AG js: ' + ex); }