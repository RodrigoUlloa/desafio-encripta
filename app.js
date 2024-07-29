function encrypt(text){
  const replacements = { a: "ai", e:"enter", i: "imes", o: "ober", u: "ufat" };
  return text.split('').map(char => replacements[char] || char).join('');
}

function decrypt(text){
  const replacements = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u"};
  const regex = new RegExp(Object.keys(replacements).join('|'), 'g');
  return text.replace(regex, match => replacements[match]); 
}

function isValidText(text){
  const regex = /^[a-zñ\s]+$/;
  return regex.test(text)
}

function handleEncrypt() {
  const inputText = document.getElementById('inputText').value;
  if (!isValidText(inputText)){
    alert("El texto debe contener solo letras minúsculas y sin caracteres especiales");
    return;
  }
  const result = encrypt(inputText);
  document.getElementById('result').innerText = result;
  document.getElementById('msg').classList.add('hide');
  document.getElementById('img').classList.add('hide');
  document.getElementById('copyBtn').classList.remove('hide');
}

function handleDecrypt() {
  const inputText = document.getElementById('inputText').value;
  if (!isValidText(inputText)){
    alert("El texto debe contener solo letras minúsculas y sin caracteres especiales");
    return;
  }
  const result = decrypt(inputText);
  document.getElementById('result').innerText = result;
  document.getElementById('msg').classList.add('hide');
  document.getElementById('img').classList.add('hide');
  document.getElementById('copyBtn').classList.remove('hide');
}

function copyToClipboard(){
  const text = document.getElementById('result').innerHTML;
  navigator.clipboard.writeText(text).then(function(){
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}