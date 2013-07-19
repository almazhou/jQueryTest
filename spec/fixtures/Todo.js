

$(document).ready(function(){
 loadPage();
});
function loadPage(){
	listenToAddBtn();
	listenToRemoveBtn();
}
function addBtn(){
		var addVal = $('<li>TO DO:'+$("input").val()+'</li>');
		var rmbtn = $('<button>-</button>');
		addVal.addClass('liArea');
		rmbtn.addClass("removeButton");
		$(this).closest("div").append(addVal.append(rmbtn));
	}
function rmBtn(){
	$(this).parent().remove();
	// $(".removeButton").closest(".liArea").empty();
	}
function listenToRemoveBtn(){
	$('.removeButton').live('click',rmBtn);
}
function listenToAddBtn(){
	$('.addButton').on('click',addBtn);

}
