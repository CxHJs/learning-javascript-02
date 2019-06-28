for (var i=1; i<=30; i+=1){
    if (i%3==0 || i%10==3 ){
        process.stdout.write ('Aho');
        
    }
    else {
        let s = String(i);
        // console.log (i);
        process.stdout.write (s);
    }
}