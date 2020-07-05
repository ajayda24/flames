function loveFinder(){
    var namefirst=document.form.firstname.value;
    var namesecond=document.form.secondname.value;
    var vowel_list = "aeiouAEIOU";
    var vcountfirst = 0;
    var vcountsecond = 0;
    for(var x = 0; x < namefirst.length ; x++){
        if (vowel_list.indexOf(namefirst[x]) !== -1){
            vcountfirst += 1;
        }
  
    }
    for(var y = 0; y < namesecond.length ; y++){
        if (vowel_list.indexOf(namesecond[y]) !== -1){
            vcountsecond += 1;
        }

    }
    
    if(namefirst==0){
        alert("Enter your Name");
    }
    else if(namesecond==0){
        alert("Enter your Friend Name");
    }
    else{
        var namefirstvowel=vcountfirst;
        var namesecondvowel=vcountsecond;
        var namefirstlen=namefirst.length;
        var namesecondlen=namesecond.length;
        var loveScore=namefirstlen*namesecondlen;
        var vowelmultiply=namefirstvowel*namesecondvowel;
        var loveScoreVowel=(loveScore+vowelmultiply);
        var loveScoreVowel=loveScoreVowel*3;
        var digit = loveScoreVowel.toString();
        var digitunder=digit.slice(0,2);
       if(digitunder<20){
        var quote="Your Friend is Angry with you 🤬";
       }
       else if(digitunder<40){
        var quote="Your Friend is not at all happy with you 😒";
       }
       else if(digitunder<60){
        var quote="Your Friend is happy with you 👌";
       }
       else if(digitunder<80){
        var quote="Nice Friends 👍";
       }
       else if(digitunder<90){
        var quote="Good Friends 😊";
       }
       else if(digitunder<=100){
        var quote="Best Friends ❤";
       }
    
        alert("Your Name : "+namefirst+"\nYour Friend Name : "+namesecond +"\n\nYour Friend Score : " +digitunder +"% \n" +quote +"\n---------------------------------------------\nDeveloped by Ajay Daniel Trevor");
    }
}
