

describe("should add to do list when click add button", function() {
it("calls the click() function", function() {
    $('.addButton').click();
    addBtn();
    expect($(".unorderedList").text()).toMatch('Add');
    expect($('.liArea').text()).toMatch("TO DO");
   });
});

describe("should remove to do list when click remove button", function() {
it("calls the click() function", function() {
     $(".removeButton").parent().remove();
    expect($('.unorderedList').text()).not.toMatch("TO DO");
   });
});

