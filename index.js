let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;                                                                                                                                                                           
   
  const input    = document.getElementById('guess');                                                                                                                                          
  const btnGuess = document.getElementById('btn-guess');
  const btnReset = document.getElementById('btn-reset');                                                                                                                                      
  const message  = document.getElementById('message');
  const attemptsEl = document.getElementById('attempts');
                                                                                                                                                                                              
  function checkGuess() {
    const guess = parseInt(input.value);                                                                                                                                                      
                  
    if (!guess || guess < 1 || guess > 100) {
      showMessage('Ingresa un número entre 1 y 100', '');
      return;                                                                                                                                                                                 
    }
                                                                                                                                                                                              
    attempts++;
    
    if (guess > secretNumber) {
      showMessage('Muy alto', 'high');
    } else if (guess < secretNumber) {
      showMessage('Muy bajo', 'low'); 
    } else {                         
      showMessage(`Correcto! Era el ${secretNumber}`, 'win');
      attemptsEl.textContent = `Lo lograste en ${attempts} intento${attempts > 1 ? 's' : ''}`;
      input.disabled = true;                                                                                                                                                                  
      btnGuess.disabled = true;                                                                                                                                                               
      btnReset.classList.remove('hidden');                                                                                                                                                    
      return;                                                                                                                                                                                 
    }                                                                                                                                                                                         
                                                                                                                                                                                              
    attemptsEl.textContent = `Intentos: ${attempts}`;
    input.value = '';                                                                                                                                                                         
    input.focus();   
  }               
                                                                                                                                                                                              
  function showMessage(text, type) {
    message.textContent = text;                                                                                                                                                               
    message.className = `message ${type}`;
  }                                       
   
  function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;                                      
    input.disabled = false;                                                                                                                                                                   
    btnGuess.disabled = false;
    input.value = '';                                                                                                                                                                         
    message.textContent = '';
    message.className = 'message';
    attemptsEl.textContent = '';  
    btnReset.classList.add('hidden');                                                                                                                                                         
    input.focus();                   
  }                                                                                                                                                                                           
                  
  btnGuess.addEventListener('click', checkGuess);
  btnReset.addEventListener('click', resetGame); 

  input.addEventListener('keydown', (e) => {                                                                                                                                                  
    if (e.key === 'Enter') checkGuess();
  }); 