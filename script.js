function handleSubmit(e){
  e.preventDefault();
  const result = document.getElementById('form-result');
  const name = document.getElementById('name').value || 'Friend';
  result.textContent = `Thanks ${name}! Your message was received (demo).`; 
  // In a real site you'd POST to a server here.
  e.target.reset();
}

// Small accessibility helper: focus first input when hash=contact
if(location.hash === '#contact'){setTimeout(()=>{const el=document.getElementById('name');if(el)el.focus();},200)}
