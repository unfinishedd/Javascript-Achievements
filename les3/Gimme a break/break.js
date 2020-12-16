//via het DOM document object model wordt er een link gemaakt naar elementen uit je HTML file
i = document.getElementById("break_img")//verwijzing naar je <img id='break_img'>
p = document.getElementById("clock")//verwijzing naar je <p id='clock'>

breakStart = new Date()
breakEnd = new Date(breakStart.getTime()+ 1*1000*60 ) ;
//stel de begin en eindtijd van je break hier in

e = setInterval(updateTime,1000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd



function updateTime(){
    d = new Date();
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
   console.log(breakStart - breakEnd);
   //check hier hoe laat het is en of je wel of geen break moet hebben
}
function breakNow(){
    //pas hier de source van je image aan voor als je een break hebt
    i.src = "https://dropnerblog.files.wordpress.com/2019/08/break.jpg"
   
}
function endBreak(){
   //Pas hier de source van je image aan voor als je aan het werk bent
   i.src = "https://www.kansascity.com/latest-news/8cpos0/picture242706866/alternates/FREE_1140/Return%20to%20work%20illustration.jpg"
}

