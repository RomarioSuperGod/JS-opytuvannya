        /**
         * Created by admin on 20.12.2016.
         */

        alert('Hello my little friend!!!');
        var b=confirm('Do you want some educational adventure?');
        if (b==true){
            alert('So lets start our knowledge journey!!!');
        }
        else{
            alert('Nu to sperdalaj v dupie!!!');
        }
        var c;
        var a=+prompt('Question №1: How many labors did Hercules?');
        if (a==12){
            c=1;
        }
        else{
            c=0;
        }
        alert('Correct answer: 12');

        var a=+prompt('Question №2: What number of our native planet in solar system?');
        if (a==3){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: 3');

        var a=+prompt('Question №3: How many of the countries bordering with Ukraine?');
        if (a==7){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: 7');

        var a=prompt('Question №4: What is the best football club in the world?(first letter must be in uppercase)');
        if (a=='Liverpool'){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: Liverpool');

        var a=+prompt('Question №5: In what year Ukraine get an independence?');
        if (a==1991){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: 1991');

        var a=prompt('Question №6: What legendary rock-group has a song "Highway to hell"?(give answer in uppercase)');
        if (a=='ACDC'){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: ACDC');

        var a=+prompt('Question №7: How many simple colours in the rainbow?');
        if (a==7){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: 7');

        var a=prompt('Question №8: Who the only animal in the world who cant jump?');
        if (a=='elephant'){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: elephant');

        var a=+prompt('Question №9: How many figures in chess?');
        if (a==32){
            c=c+1;
        }
        else{
            c=c;
        }
        alert('Correct answer: 32');

        var a=prompt('Question №10: What name of aborigines of New Zealand?');
        if (a=='maori'){
            c=c+1;
        }
        else{
            c=c;
        }

        if(c==10){
            alert('You are the best!!! You have '+c+' correct answers. You are like Romario!!! Coungradulations!!! ');
        }
        else if(c>=6 && c<10){
            alert(' Not bad! You have '+c+' correct answers.');
        }
        else if(c>=1 && c<6) {
            alert('Not bad but not good!You have '+c+' correct answers. Go make your home work!!!');
        }
        else if(c==0){
            alert('What a shame!!! Dont be so DUMB!!! You have '+c+' correct answers!!! Read books!!!');
        }

        alert('Thanks for passing this poll!!!))) ');