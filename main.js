// import './style.css'
import axios from 'axios';

const advice_url = "https://api.adviceslip.com/advice"
const quoteBody = document.querySelector(".advice-body")
const quoteCounter = document.querySelector(".advice-number")
const adviceButton = document.querySelector(".advice-btn")
const buttonImg = document.querySelector('.advice-btn img');

const getAdvice = async() => {
  buttonImg.classList.add('btn-img-spin')
  const options = {
    headers: { 
            "Accept" : "application/json",
            "Accept-Encoding": "gzip, deflate, br"
    }
  }

  try {    
    const { data } = await axios.get(advice_url, null, options )
    quoteCounter.textContent = data.slip.id
    quoteBody.textContent = data.slip.advice
    console.log(data.slip)
    // return {access_token: data.access_token}
  }
  catch(error) {
    console.log(error)
    // const {message, name, stack, code, status} = error
    // return {access_token: null, err: {message, name, stack, code, status} };
  }

}

adviceButton.addEventListener("click", (e) => {
  getAdvice()
})

buttonImg.addEventListener('transitionend', e => {
  e.target.classList.remove('btn-img-spin')
})


// getAdvice()
