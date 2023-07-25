let dic=document.getElementById("dice")
let advice=document.getElementById("advice")
let number=document.getElementById("number")
let adviceArray=[]
let index=number.innerHTML
let flag=true
function Quote(){
    let url='https://api.adviceslip.com/advice'
     fetch(url)
     .then(response=>{
        if(response.ok){
            return response.json()
        }
        else{
            console.log(response.status)
        }
     })
     .then(data=>{
        adviceArray[index] = data.slip.advice
})
}
function addingQuote(){

    if(flag){
        Quote()
        adviceArray[index] += ''
        flag = false
    }
    else{
        if(adviceArray[index]==='undefined'){
            adviceArray[index] = 'Be Happy'
        }
    advice.innerHTML='"'+adviceArray[index]+'"'
    index++
    number.innerHTML = index
    flag=true
    }
}
dic.addEventListener('click', addingQuote)