function ajax(){

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(this.readyState==4&&this.status==200){
            var response=JSON.parse(this.responseText);
            console.log(response);
            var gro=response.grocery;
            console.log(gro);
            var out="";
             out+="<table>"+"<tr>"+
             "<th>"+"SLNO"+"</th>"+
             "<th>"+"NAME"+"</th>"+
             "<th>"+"QUANTITY"+"</th>"+
             "<th>"+"UNIT"+"</th>"+
             "<th>"+"DEPARTMENT"+"</th>"+
             "<th>"+"NOTES"+"</th>"+"</tr>"+"</table>";
            
            
            
             var output="";
            for(var i=0;i<gro.length;i++){
             output+="<table>"+"<tr>"+"<td>"+gro[i].SLNO+"</td>"+
             "<td>"+gro[i].NAME+"</td>"+
             "<td>"+gro[i].QUANTITY+"</td>"+
             "<td>"+gro[i].UNIT+"</td>"+
             "<td>"+gro[i].DEPARTMENT+"</td>"+
             "<td>"+gro[i].NOTES+"</td>"+
             "</tr>"+"</table";
        

             }
         document.getElementById("list").innerHTML=output;
        }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}