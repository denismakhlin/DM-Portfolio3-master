//My jQuery Code

//Below is what puts all my functions into my website or "document"

$('document').ready(function(){
    
//    Below is the code that changes my class that I mad for the first thumbnail
//    to change it's background color to yellow

//I did this by linking it to css by putting .css
    
    $('.yeah').css('background-color', 'yellow');
    
//    Below is the code that links to my css to put a solid border around my 
//    first paragraph

    $('p:first').css('border-style', 'solid');
    
//    Below is the code that binds the ability to have a function occur on my 
//    header when it has a mouse over it and to change into something else 
//    when the mouse goes off it
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
//    Below is the code that is linked to css that change my body to the color 
//    black
    
    $('#body').css('background-color', 'black');
    
//    This turned the thumbnail I made under the class to turn yellow
    
    $('.yeah').css('background-color', 'yellow');
    
//    This sets up the accordian with my header threes that I made in my index
    
    $('#superHumans').accordion({header:"h3"});
    
//    This changes the width of my accordian under its class to 400 pixils
    
    $('#superHumans').css('width', '400px');
    
//    This changes the color of all my h3's to a backround color of cyan
    
    $('h3').css('background', 'cyan');
    
//    Below is what allows the button I made to be hiddent before the webpage 
//    disappears 
    
    $('#show').css('visibility', 'hidden');
    
//   Below is what lets my whole page hide or disappear when you click on the 
//   certain words which is linked by an id 
    
    $('#hide').bind('click', hideThePage);
    
//    This allows the button I made to show all the elements that recently 
//    disappeared to reappear
    
    $('#show').bind('click', showThePage);
    
//    This lets my class yeah to be draggable to any place i want by clicking, 
//    holding, then moving the box
    
    $('.yeah').draggable();
    
//    This lets my id superHumans to be draggable to any place I want by clicking, 
//    holding, then moving the object "accordion" 
    
    $('#superHumans').draggable();
    
});


function mouseOverMe() {
    
//    The function below makes my original h1 words to turn into Amazing with 
//    the mouse is over it
    
    $("h1").html('Amazing!');
    
//    The function below makes my original id whole div to turn the color aqua 
//    with the mouse is over it
    
    $("#wholediv").css('background-color', 'aqua');
}

function mouseOutMe() {
    
//    The function below makes my original h1 words to turn back into the 
//    original words when the mose is out of it
    
    $('h1').html('Hover Over Me');
}
function hideThePage() {
    
//    Below is the code that pops up my button with an animation when the
//    webpage is hiding
    
    $('#show').css('visibility', 'visible');
    
//    The two lines of code below add an animation to both my thumbnail and 
//    accordian under their own class and id names when they disappear
    
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}
function showThePage () {
    
//    The two lines of code below add an animation to both my thumbnail and 
//    accordian under their own class and id names when they appear
    
    $('div').show('fold', {}, 2500);
    $('#show').hide('puff', {}, 2500);
}
