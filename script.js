function signIn() {
  
    window.location.href = 'bank.html';
    return false;
  }
  
  
  


function toggleTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
  }
  
  document.querySelector('.tabs button').click(); 
  