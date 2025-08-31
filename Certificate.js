var arrImg = "";
let arrITImages = ["Graduate.jpg"];
let arrITTile = ["Graduate Certificate"];
let arrJPImages = ["N2Course.jpg", "N3.jpg", "N4.jpg"];
let arrJPTitle = ["N2Course", "JLPT N3", "JLPT N4"];
let arrOthersImages = ["EngVitamin.jpg"];
let arrOthersTitle = ["English Elementary"];
var gradu = "";
var jpCerti = "";
var otherCerti = "";
var idImg = "";
var index = "";
function myFunction(){
    
        funsetEmpty();
        var image = document.createElement("img");
        for(let i = 0; i<arrITImages.length; i++){
            index = arrITImages[i].indexOf(".");
            image.src = "imagePorfolio/imageCertificates/IT/" + arrITImages[i];
            image.title = arrITTile[i];
            idImg = arrITImages[i].substring(0, index);
            console.log(idImg);
            arrImg += "<li>" + "<img src =" +image.src +" +title =" + image.title +">"+"<p>"+ image.title + "</p>"+"</li>";
        }
        
        document.getElementById("showImg").innerHTML = arrImg;
        arrImg = "";
        document.getElementById("btnGraduate").style.backgroundColor = "rgb(151, 122, 85)";       
        document.getElementById("btnJPCerti").style.backgroundColor = "mediumturquoise";
        document.getElementById("btnOthers").style.backgroundColor = "mediumturquoise";
        gradu = "1";
        funMouseOver();
        funMouseOut();
}

function myFunction1(){
    
        funsetEmpty();
        var image = document.createElement("img");
        for(let i = 0; i<arrJPImages.length; i++){
            index = arrJPImages[i].indexOf(".");
            image.src = "imagePorfolio/imageCertificates/JP/" + arrJPImages[i];
            image.title = arrJPTitle[i];
            idImg = arrJPImages[i].substring(0, index);
            console.log(idImg);
            arrImg += "<li>" + "<img src =" +image.src +" +title =" + image.title +">"+"<p>"+ image.title + "</p>"+"</li>";
        }
        
        document.getElementById("showImg").innerHTML = arrImg;
        arrImg = "";
        document.getElementById("btnJPCerti").style.backgroundColor = "rgb(151, 122, 85)";
        document.getElementById("btnGraduate").style.backgroundColor = "mediumturquoise";
        document.getElementById("btnOthers").style.backgroundColor = "mediumturquoise";

        jpCerti = "1";
        funMouseOver();
        funMouseOut();

}

function myFunction2(){
    
        funsetEmpty();
        var image = document.createElement("img");
        for(let i = 0; i<arrOthersImages.length; i++){
            index = arrOthersImages[i].indexOf(".");
            image.src = "imagePorfolio/imageCertificates/Others/" + arrOthersImages[i];
            image.title = arrOthersTitle[i];
            idImg = arrOthersImages[i].substring(0, index);
            console.log(idImg);
            arrImg += "<li>" + "<img src =" +image.src +" +title =" + image.title +">"+"<p>"+ image.title + "</p>"+"</li>";
        }
        
        document.getElementById("showImg").innerHTML = arrImg;
        arrImg = "";
        document.getElementById("btnOthers").style.backgroundColor = "rgb(151, 122, 85)";
        document.getElementById("btnGraduate").style.backgroundColor = "mediumturquoise";
        document.getElementById("btnJPCerti").style.backgroundColor = "mediumturquoise";

        otherCerti = "1";
        funMouseOver();
        funMouseOut();

}

function funMouseOver(){
    
    document.getElementById("btnGraduate").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";
    });

    document.getElementById("btnJPCerti").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";
    });

    document.getElementById("btnOthers").addEventListener("mouseover", function() {
        this.style.backgroundColor = "rgb(163, 111, 32)";   
    });
}

function funMouseOut(){

    document.getElementById("btnGraduate").addEventListener("mouseout", function() {
        if(gradu === "1"){
            this.style.backgroundColor = "rgb(151, 122, 85)";
        }else{
            this.style.backgroundColor = "mediumturquoise";
        }
});

document.getElementById("btnJPCerti").addEventListener("mouseout", function() {
    if(jpCerti === "1"){
        this.style.backgroundColor = "rgb(151, 122, 85)";
    }else{
        this.style.backgroundColor = "mediumturquoise";
    }
});

document.getElementById("btnOthers").addEventListener("mouseout", function() {
    if(otherCerti === "1"){
        this.style.backgroundColor = "rgb(151, 122, 85)";
    }else{
        this.style.backgroundColor = "mediumturquoise";
    }
});
}

function funsetEmpty(){
    gradu = "";
    jpCerti = "";
    otherCerti = "";
}