function check()
{
    var c=0;
    var q1=document.kviz.prasanje1.value;
    var q2=document.kviz.prasanje2.value;
    var q3=document.kviz.prasanje3.value;
    var q4=document.kviz.prasanje4.value;
    var q5=document.kviz.prasanje5.value;
    var q6=document.kviz.prasanje6.value;
    var q7=document.kviz.prasanje7.value;
    var q8=document.kviz.prasanje8.value;
    var rezultat=document.getElementById('rezultat');
    var kviz=document.getElementById("kviz");
    if (q1=="Merkur") {c++}
    if (q2=="Saturn") {c++}
    if (q3=="Osum") {c++}
    if (q4=="pet") {c++}
    if (q5=="Stoo") {c++}
    if (q6=="aDvanaeset") {c++}
    if (q7=="Kometa") {c++}
    if (q8=="Stela") {c++}
    kviz.style.display="none";
    if (c==0)
    {
        rezultat.textContent=`Pogodivte ${c} Ne go trosete vremeto zaludno pocnete da ucite za vselenata!!! `
    }
    else if (c<=5){
        rezultat.textContent=`Pogodivte ${c} Se gleda deka ve interesira vselenata no ne znaete dovolno sepak prodolzete da istrazuvate `
    }
    else{
        rezultat.textContent=`Pogodivte ${c} Se gleda deka imate ogromno poznavanje za vselenata BRAVO!!!`
    }

}