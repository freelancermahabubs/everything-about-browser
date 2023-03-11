// alert('How are You');

const showAlert = () =>{
  alert('Dosto, Taka Ase Dhar Dete Parbi, Just 500?')
};

const lendMoney = () =>{
 const result = confirm('Will you lend me 500 Taka?');
 console.log(result);
 if(result === true){
  alert('Tui Amer Jaan Er Dosto!!!')
 }
 else{
  console.log('DGM..... toke ajke block maira dimu.')
 }
};

const getInfo = () =>{
  // alert
  // confirm
  const name =  prompt('Tell Me your Name');
  console.log(name);
  if(name === null){
    alert('Name na dile Kaam Nai!! Ja Fooooot');
  }
  else{
    console.log(name, 'Welcome to this world!!')
  }
}