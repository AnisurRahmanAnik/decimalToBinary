const submit = document.getElementById('submit')
const result = document.getElementById('result')
let binary = function(i){
    i.preventDefault()
    const number = document.getElementById('number').value
    if(number ===''){
        alert('Please fill out input feild')
    }else if(number <0){
        alert('Please type a positive value')
    }else{
        result.style.visibility = 'visible'
    }
     binaryNum = Number(number).toString(2)
     result.innerText = binaryNum
}
submit.addEventListener('click',binary)












