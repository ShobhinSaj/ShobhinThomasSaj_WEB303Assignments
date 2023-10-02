// WEB303 Assignment 2
//Shobhinn Thomas Saj #0819372
$(document).ready(function() {
    $("a#prospect").click(function() {
        $("#content").fadeOut("slow");
        var xhr = new XMLHttpRequest;
        xhr.open('GET','prospect.html',true);
        xhr.onload = function()
        {
        if(this.status=== 200)
        {
            
        let el = document.getElementById("content");
        el.innerHTML=xhr.responseText;
        $("#content").fadeIn("slow");
        }
        }   
        xhr.send();

        
    });
    $("a#convert").click(function() {
        $("#content").fadeOut("slow");
        var xhr = new XMLHttpRequest;
        xhr.open('GET','convert.html',true);
        xhr.onload = function()
        {
        if(this.status=== 200)
        {
            
        let el = document.getElementById("content");
        el.innerHTML=xhr.responseText;
        $("#content").fadeIn("slow");
        }
        }   
        xhr.send();

        
    });
    $("a#retain").click(function() {
        $("#content").fadeOut("slow");
        var xhr = new XMLHttpRequest;
        xhr.open('GET','retain.html',true);
        xhr.onload = function()
        {
        if(this.status=== 200)
        {
            
        let el = document.getElementById("content");
        el.innerHTML=xhr.responseText;
        $("#content").fadeIn("slow");
        }
        }   
        xhr.send();

        
    });
});

