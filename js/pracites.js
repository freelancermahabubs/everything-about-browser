const showAlert = () =>{
  const isSingle = true;
  if(isSingle === true){
    alert('He is a Proper Single')
  }
  else{
    console.log('He is a Married Person')
  }
};

const aryYouStay = () =>{
  const result = confirm('Do you really want to leave?')
  console.log(result);
  if(result === true){
    alert('Tumi Takle Beya Koramo');
  }else{
    console.log('na Takle Beya koramona')
  }

};

const getInfo = () =>{
  const isSingle = prompt('You single Person?');
  console.log(isSingle);
  if(isSingle === null){
    alert('Thor Kopale Byea nai.. !!!')
  }else{
    console.log('Tumi Best Jamai')
  }
};

// Cookie get 
document.cookie.split('; ').map(c =>{
  const parts = c.split('=')
  console.log(`name: ${parts[0]} value: ${parts[1]}}`)
})