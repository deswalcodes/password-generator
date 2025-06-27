document.getElementById('generate').addEventListener('click', () => {
    const length = parseInt(document.getElementById('length').value);
    const includeLetters = document.getElementById('include-letters').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
  
    let chars = "";
  
    if (includeLetters) {
      chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
      chars += "0123456789";
    }
    if (includeSymbols) {
      chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
  
    // fallback if nothing selected
    if (chars.length === 0) {
      chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
  
    document.getElementById('result').textContent = password;
  });
  
  document.getElementById('copy').addEventListener('click', () => {
    const password = document.getElementById('result').textContent;
    if (password) {
      navigator.clipboard.writeText(password)
        .then(() => alert("Password copied to clipboard!"))
        .catch((err) => alert("Could not copy password: " + err));
    }
  });
  