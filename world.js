window.onload=function()
{
    var httpRequest;
    var lookupb=document.querySelector("#lookup");
    
    
    lookupb.addEventListener("click",function()
    {
        
        httpRequest = new XMLHttpRequest();
        //alert("hey");
        var place=document.querySelector("#country").value;
        var url = "https://info2180-lab7-04-cami-cee.c9users.io/world.php?country=";
        httpRequest.onreadystatechange = Req;
        //alert(place);
         httpRequest.open('GET', url + encodeURIComponent(place));
        httpRequest.send();
    });
    
    function Req() 
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            if (httpRequest.status === 200) 
            {
                alert(httpRequest.responseText);
               /*var result = document.getElementById('result');
               var response = httpRequest.responseText;
               result.innerHTML=response;*/
               //alert("o");
            } 
            else 
            {
                alert('There was a problem with the request.');
            }
        }
    }
}