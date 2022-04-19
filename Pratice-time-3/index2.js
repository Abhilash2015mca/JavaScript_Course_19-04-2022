function generateSentence(desc,arr){
    let baseString=`The ${arr.length} ${desc} are `;
    const lastIndex=arr.length-1;
    for(let index=0;index<arr.length;index++){
        if(index===lastIndex){
            baseString+=arr[index];
        }
        else{
            baseString+=arr[index]+", "; 
        }
    }
    return baseString;
}
const sentence=generateSentence("highest mountains",["Mount Everest","K2"])
console.log(sentence)