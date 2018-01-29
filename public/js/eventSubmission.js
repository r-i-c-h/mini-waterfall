const inputForm = document.getElementById('the_form');

inputForm.addEventListener('submit', (e) =>  {
  e.stopImmediatePropagation();
  e.preventDefault();
  let inputStr = document.getElementById('wallHeightsStr');
  const formData = inputStr.value;
  if ( ( isValid(formData)  && ( formData!=='') ) ) {
    sendData(formData);
  } else {
    if ( !(document.getElementById('bad')) ){
      const bad = document.createElement('text');
      bad.classList.add('uh-oh');
      bad.setAttribute('id','bad');
      bad.textContent =
        'I\'m sorry Dave. I\'m afraid I can\'t do that. Your input is invalid. Please try again.';
      inputForm.appendChild(bad);
    } else {
      document.getElementById('bad').style.color = 'red';
    }
  }
}, false);

const sendData = (data) => {
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  };
};

const isValid = (str) => {
  const threeDigitValidation = /^\d+[\s,]+\d+[\s,]+\d+/;
  return threeDigitValidation.test(str);
};
