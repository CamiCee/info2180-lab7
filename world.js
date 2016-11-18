window.onload=function()
{
    var httpRequest;
    var lookupb=document.querySelector("#lookup");
    var ch=document.querySelector("#checkAll");
    var check=false;
    
    ch.addEventListener("change",function()
    {
        check=!check;
    });
    
    lookupb.addEventListener("click",function()
    {
        
        httpRequest = new XMLHttpRequest();
        
        var place=document.querySelector("#country").value;
        var url = "https://info2180-lab7-04-cami-cee.c9users.io/world.php?all=";
        httpRequest.onreadystatechange = Req;
        
        
        if(!check)
        {
            httpRequest.open('GET', url + encodeURIComponent(place));
            httpRequest.send();
        }
        else
        {
            httpRequest.open('GET', url + encodeURIComponent("true"));
            httpRequest.send();
        }
    });
    
    function Req() 
    {
        if (httpRequest.readyState === XMLHttpRequest.DONE) 
        {
            if (httpRequest.status === 200) 
            {
                
               var result = document.getElementById('result');
               var response = httpRequest.responseText;
               result.innerHTML=response;
               
            } 
            else 
            {
                alert('There was a problem with the request.');
            }
        }
    }
}