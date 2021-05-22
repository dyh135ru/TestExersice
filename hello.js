function Greet(name){

    //console.log(typeof(name));
    
    if(name === undefined){
        
        return("Hello there!");
    }

    if(typeof(name) === 'object'){
        let names = "Hello, ";
        for(let i=0; i<name.length; i++){
            
            if(i === name.length-1){
                names += name[i];
            }else{
                names += name[i] + ', ';
            }
            
        }
        return(names);
    }

    if(name === name.toUpperCase()){
        
        return("HELLO " + name);
    
    }else{
       
        return("Hello, " + name);

    }

}

module.exports = Greet;