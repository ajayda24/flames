function loveFinder(){
    var namefirst=document.form.firstname.value;
    var namesecond=document.form.secondname.value;
    
    if(namefirst==0){
        alert("Enter your Name");
    }
    else if(namesecond==0){
        alert("Enter your Friend Name");
    }
    else{
    var loveScore=Math.random()*100;
    loveScore=Math.floor(loveScore)+1
    if(loveScore<20){
        var quote="Your Friend is Angry with you 🤬";
    }
    else if(loveScore<40){
        var quote="Your Friend is not at all happy with you 😒";
    }
    else if(loveScore<60){
        var quote="Your Friend is happy with you 👌";
    }
    else if(loveScore<80){
        var quote="Nice Friend 👍";
    }
    else if(loveScore<90){
        var quote="Good Friend 😊";
    }
    else if(loveScore<100){
        var quote="Best Friend ❤";
    }

    alert("Your Love Score : " +loveScore +"% \n\n" +quote +"\n-----------------------------------------------\nDeveloped by Ajay Daniel Trevor");
    }
}