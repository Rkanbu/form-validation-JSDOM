function fun(){
    var val = document.getElementsByTagName("input");
    var to = document.getElementsByTagName("p");
    to[0].innerHTML="Hey🙋‍♂️,"+" "+val[0].value+" "+ "CHECK YOUR DEATILS PLEASE😇";
    // for(var i=1;i<4;i++){
    //      to[i].innerHTML=val[i].value;
    // }
    to[1].innerHTML="Name :" +val[0].value;
    to[2].innerHTML="Age :"+"  " +val[1].value;
    to[3].innerHTML="Degree :"+"  " +val[2].value;
    to[4].innerHTML="Date Of Birth :"+"  " +val[3].value;
    to[5].innerHTML="Gender :"+"  " +val[4].value;
    to[5].innerHTML="Mail Id :"+"  " +val[5].value;
    }
function Sub(){
    var val = document.getElementsByTagName("input");
    var name = "Hello ";
    alert(name+val[0].value+",Your Information has Submitted Successfully👍Thank you.Have a Great Day 😇 ");
}   