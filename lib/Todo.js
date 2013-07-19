

$(document).ready(function(){
 loadPage();
});
function loadPage(){
	listenToAddBtn();
	listenToRemoveBtn();
}
function listenToRemoveBtn(){
	$('ul').on('click','button',rmBtn);
}
function listenToAddBtn(){
	$('.addButton').on('click',rmbtn);
function rmBtn(){
	$(this).closest("li").empty();
	}
function addBtn(){
		var addVal = $('<li>TO DO:'+$("input").val()+'</li>');
		var rmbtn = $("<button>-</button>");
		addVal.addClass('liArea');
		$(this).closest("div").append(addVal.append(rmbtn));
	}
}
