var hr=0; 
var min=0;
var sec=0;
var count=0;


var timer=false;

function start(){
    
    timer=true;
    stopWatch();
}


function stop(){
timer=false;
}

function reset(){
   timer=false; 
 hr=0; 
 min=0;
 sec=0;
 count=0;

 document.getElementById('count').innerHTML="00";
 document.getElementById('sec').innerHTML="00";
 document.getElementById('min').innerHTML="00";
 document.getElementById('hr').innerHTML="00";


}



function stopWatch(){

if(timer==true)
    {
        count+=1;

        if(count==100)
        {
            sec+=1;
            count=0;
        }

        if(count<=9)
        {
            document.getElementById("count").innerHTML='0'+count;  
        }
        else
        {
            document.getElementById("count").innerHTML=count; 
        }

        
        

        if(sec<=9)
        {
            document.getElementById("sec").innerHTML='0'+sec;  
        }
        else
        {
            document.getElementById("sec").innerHTML=sec; 
        }
        if(min<=9)
        {
            document.getElementById("min").innerHTML='0'+min;  
        }
        else
        {
            document.getElementById("min").innerHTML=min; 
        }
        if(hr<=9)
        {
            document.getElementById("hr").innerHTML='0'+hr;  
        }
        else
        {
            document.getElementById("hr").innerHTML=hr; 
        }

        if(sec==60)
        {
            min+=1;
            sec=0;
        }

        if(min==60)
        {
            hr+=1;
            min=0;
            sec=0;
        }
         

        setTimeout("stopWatch()",10);
    }

}

