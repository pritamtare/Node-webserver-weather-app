
const weatherForm = document.querySelector('form')
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault(); 

    const location = search.value;
  
    messageOne.textContent ='Loading...'
    messageTwo.textContent =''
    messageThree.textContent =''
    messageFour.textContent =''
    messageFive.textContent =''

    window.fetch(`/weather?address=${location}`).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                message1.textContent = (data.error)
            }
            else{
                messageOne.textContent = `Location   : ${data.address}`
                messageTwo.textContent = `Longitutde :${data.longitude}`
                messageThree.textContent =`Latitude :${data.latitude}`
                messageFour.textContent = `Wind Sped: ${data.windSpeed} km/h`
                messageFive.textContent = `Forecast: ${data.forecast}`
            }
        })
    }) 
})