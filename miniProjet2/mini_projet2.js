var arabic = document.getElementById("bnt_ar");
var english = document.getElementById("bnt_en");
var french = document.getElementById("bnt_fr");
var chinois = document.getElementById("bnt_ch");
var catalan = document.getElementById("bnt_ca");
var coréen = document.getElementById("bnt_co");
var espagnol = document.getElementById("bnt_es");
var italien = document.getElementById("bnt_it");
var hindi = document.getElementById("bnt_hi");
var love = document.getElementById("love");

arabic.onclick = () =>{
    setLanguages("arabic");
};
english.onclick = () =>{
    setLanguages("english");
};  
french.onclick = () =>{
    setLanguages("french");
};     
catalan.onclick = () =>{
    setLanguages("catalan");
};
chinois.onclick = () =>{
    setLanguages("chinois");
};
coréen.onclick = () =>{
    setLanguages("coréen");
};
espagnol.onclick = () =>{
    setLanguages("espagnol");
};
hindi.onclick = () =>{
    setLanguages("hindi");
};
italien.onclick = () =>{
    setLanguages("italien");
};
function setLanguages(getLanguages) {
    if (getLanguages === "arabic") {
        love.innerHTML = "احبك";
        love.style.color = "blue";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "english"){
        love.innerHTML = "I Love You";
        love.style.color = "grey";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "french"){
        love.innerHTML = "Je T'aime";
        love.style.color = "green";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "catalan"){
        love.innerHTML = "T'estimo";
        love.style.color = "red";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "chinois"){
        love.innerHTML = "我爱你";
        love.style.color = "yellow";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "coréen"){
        love.innerHTML = "사랑해요";
        love.style.color = "rgb(66, 191, 208)";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "espagnol"){
        love.innerHTML = "Te Amo";
        love.style.color = "rgb(234, 231, 231)";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "hindi"){
        love.innerHTML = "मैं आपसे प्यार करती हूँ";
        love.style.color = "black";
        love.style.textAlign = "center";
    }
    else if (getLanguages === "italien"){
        love.innerHTML = "Io Amo";
        love.style.color = "blue";
        love.style.textAlign = "center";
    }

}







