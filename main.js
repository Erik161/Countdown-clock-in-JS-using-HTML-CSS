$(function(){
 var note = $ ('#note'),
    ts = new Date(2012,0,1),
    newYear = true;

    if( (new Date()) > ts){

        ts=(new Date ()).getTime() + 10*24*60*60*1000;
        newYear = false;    
    }

    $('#countdown')




});