var program = "Hello,\nWorld!";
var arrLanguage = ["Data Structure and Algorithm","HTML","CSS","JavaScript","C#","Java","PHP"];
var arrDatabase = ["MySQL","Oracle","MS SQL Server","MongoDB"];
var arrManagement = ["Time Management","Conflict Resolution Skills","Coaching and Mentoring","Active Listening", "Flexibility", "Motivation", "Interpersonal Skills*", "Conceptual Skills*"];
var arrMachineLearning = ["Python","Maths"];
var arrTesting = ["Unit Tesing","Integration Testing", "System Testing", "Acceptance Testing*"];
var liValue = "";
var trLanguage = "<tr>" + "<th>Language</th>" + "</tr>";
var trDatabase ="<tr>" + "<th>Database</th>" + "</tr>";
var trManagement ="<tr>" + "<th>Management</th>" + "</tr>";
var trMachineLearning ="<tr>" + "<th>Machine Learning</th>" + "</tr>";
var trTesting ="<tr>" + "<th>Software Testing</th>" + "</tr>";

var lang = "";
var database ="";
var manage = "";
var projectCode = "";
var machineLearn = "";
var testing = "";

var gitHubimg = "";
var gitHubLink = "";
function myFunction(){
    funSetEmpty();
   for(let i=0; i<arrLanguage.length; i++){
         liValue +="<tr><td>" + arrLanguage[i] + "</td></tr>";
   } 

    document.getElementById("tblLanguage").innerHTML =  "<table>" + trLanguage + liValue + "</table>";
    liValue = "";
    lang ="1";
    document.getElementById("btnLang").style.backgroundColor = "rgb(151, 122, 85)";
    document.getElementById("btnDatabase").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnManage").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnMachine").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnTesting").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnProject").style.backgroundColor = "mediumturquoise";
    funMouseOver();
    funMouseOut();
}

function myFunction1(){
    funSetEmpty();
      for(let i=0; i<arrDatabase.length; i++){
         liValue +="<tr><td>" + arrDatabase[i] + "</td></tr>";
     } 

    document.getElementById("tblLanguage").innerHTML =  "<table>" + trDatabase + liValue + "</table>";
    liValue = "";
    database = "1";
    document.getElementById("btnDatabase").style.backgroundColor = "rgb(151, 122, 85)";
    document.getElementById("btnLang").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnMachine").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnManage").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnTesting").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnProject").style.backgroundColor = "mediumturquoise";
    funMouseOver();
    funMouseOut();
}

function myFunction2(){
    funSetEmpty();
      for(let i=0; i<arrManagement.length; i++){
         liValue +="<tr><td>" + arrManagement[i] + "</td></tr>";
     } 

    document.getElementById("tblLanguage").innerHTML =  "<table>" + trManagement + liValue + "</table>";
    liValue = "";
    manage = "1";
    document.getElementById("btnManage").style.backgroundColor = "rgb(151, 122, 85)";
    document.getElementById("btnLang").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnMachine").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnDatabase").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnTesting").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnProject").style.backgroundColor = "mediumturquoise";
    funMouseOver();
    funMouseOut();
}

function myFunction3(){
    funSetEmpty();
      for(let i=0; i<arrMachineLearning.length; i++){
         liValue +="<tr><td>" + arrMachineLearning[i] + "</td></tr>";
     } 

    document.getElementById("tblLanguage").innerHTML =  "<table>" + trMachineLearning + liValue + "</table>";
    liValue = "";
    machineLearn = "1"
    document.getElementById("btnMachine").style.backgroundColor = "rgb(151, 122, 85)";
    document.getElementById("btnLang").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnDatabase").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnManage").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnTesting").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnProject").style.backgroundColor = "mediumturquoise";
    funMouseOver();
    funMouseOut();
}

function myFunction4(){
    funSetEmpty();
      for(let i=0; i<arrTesting.length; i++){
         liValue +="<tr><td>" + arrTesting[i] + "</td></tr>";
     } 

    document.getElementById("tblLanguage").innerHTML =  "<table>" + trTesting + liValue + "</table>";
    liValue = "";
    testing = "1";
    document.getElementById("btnTesting").style.backgroundColor = "rgb(151, 122, 85)";
    document.getElementById("btnLang").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnMachine").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnManage").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnDatabase").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnProject").style.backgroundColor = "mediumturquoise";
    funMouseOver();
    funMouseOut();

}

function myFunction5(){
    funSetEmpty();
    var image = document.createElement("img");
    var link = document.createElement("a");
    link.href="https://github.com/PhyuPh-yu";
    link.target="_blank";
    image.src = "imagePorfolio/GitHub.png";
    liValue = "<ol><label>GitHub</label>" + "<li>"+ "<a href="+ link.href+" "+"target=" + link.target + ">" + "<img src =" + image.src +">"+"</a></li></ol>";
    document.getElementById("tblLanguage").innerHTML = liValue;
    liValue = "";
    projectCode = "1";
    document.getElementById("btnProject").style.backgroundColor = "rgb(151, 122, 85)";
    document.getElementById("btnLang").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnMachine").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnManage").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnDatabase").style.backgroundColor = "mediumturquoise";
    document.getElementById("btnTesting").style.backgroundColor = "mediumturquoise";
    funMouseOver();
    funMouseOut();
}

function funMouseOver(){
    
    document.getElementById("btnLang").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";
    });

    document.getElementById("btnDatabase").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";
    });

    document.getElementById("btnManage").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";   
    });

    document.getElementById("btnProject").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";
    });

    document.getElementById("btnMachine").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";
    });

    document.getElementById("btnTesting").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";   
    });

}

function funMouseOut(){

    document.getElementById("btnLang").addEventListener("mouseout", function() {
        if(lang === "1"){
            this.style.backgroundColor = "rgb(151, 122, 85)";
        }else{
            this.style.backgroundColor = "mediumturquoise";
        }
});

document.getElementById("btnDatabase").addEventListener("mouseout", function() {
    if(database === "1"){
        this.style.backgroundColor = "rgb(151, 122, 85)";
    }else{
        this.style.backgroundColor = "mediumturquoise";
    }
});

document.getElementById("btnManage").addEventListener("mouseout", function() {
    if(manage === "1"){
        this.style.backgroundColor = "rgb(151, 122, 85)";
    }else{
        this.style.backgroundColor = "mediumturquoise";
    }
});

document.getElementById("btnProject").addEventListener("mouseout", function() {
        if(projectCode === "1"){
            this.style.backgroundColor = "rgb(151, 122, 85)";
        }else{
            this.style.backgroundColor = "mediumturquoise";
        }
});

document.getElementById("btnMachine").addEventListener("mouseout", function() {
    if(machineLearn === "1"){
        this.style.backgroundColor = "rgb(151, 122, 85)";
    }else{
        this.style.backgroundColor = "mediumturquoise";
    }
});

document.getElementById("btnTesting").addEventListener("mouseout", function() {
    if(testing === "1"){
        this.style.backgroundColor = "rgb(151, 122, 85)";
    }else{
        this.style.backgroundColor = "mediumturquoise";
    }
});

}

function funSetEmpty(){
    
    lang = "";
    database = "";
    manage = "";
    projectCode = "";
    machineLearn = "";
    testing = "";
}