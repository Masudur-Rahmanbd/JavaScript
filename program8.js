function highestscore(scores) {
    let max = scores[0];         
    for (let x = 1; x < scores.length; x++) {
        if (max < scores[x]) {     
            max = scores[x];      
        }
    }
    return max;                    
}

let score = [23, 45, 56, 76, 89];
let highest = highestscore(score);  
console.log(highest);              
