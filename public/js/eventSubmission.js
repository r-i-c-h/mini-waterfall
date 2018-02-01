const inputForm = document.getElementById('the_form');

inputForm.addEventListener('submit', e =>  {
  e.stopImmediatePropagation();
  e.preventDefault();
  const pageData = document.getElementById('wallHeightsStr').value;
  isValid(pageData) ? sendData(pageData) : displayError();
}, false);

const displayError = () => {
  if (!document.getElementById('bad')) {
    const bad = document.createElement('text');
    bad.classList.add('uh-oh');
    bad.setAttribute('id', 'bad');
    bad.textContent = `I'm sorry Dave. I'm afraid I can't do that. Your input is invalid. Please try again.`;
    inputForm.appendChild(bad);
  } else {
    document.getElementById('bad').style.color = 'red';
  }
};

const isValid = str => {
  if ( str.length === 0 || /.*[^0-9,\s].*/.test(str) ) {
    return false;
  }
  const threeDigitValidation = /^\d+[\s,]+\d+[\s,]+\d+/;
  return threeDigitValidation.test(str);
};

const sendData = data => {
  const url = 'http://localhost:1337/';
  const options = {
    method: 'POST',
    headers: new Headers( {'Content-Type': 'application/json'} ),
    body: JSON.stringify( {'walls':data} )
  };

  fetch(url,options)
  .then( res => res.json() )
  .then( resArr => { drawGrid(resArr); })
  .catch((err) => { console.error('Uh-OH: ',err); });
};
