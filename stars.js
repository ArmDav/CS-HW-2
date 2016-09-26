
const stars =function(n){
     if (n===0) {
        return ""
}
        return "*" + stars(n-1) ; 
}


const spaces = function(k) {
        if (k===0) {
		  return ""
		}
          return " " + spaces(k-1)
}

const maintain = function(h,n,k) {
       if(h===0) { 
          return ""
		  }
console.log( spaces(k) + stars(n));
 maintain ( h-1, n+2, k-1);
}

const triangle = function (f){
     maintain (f, 1, f-1);
}

    triangle(15);
