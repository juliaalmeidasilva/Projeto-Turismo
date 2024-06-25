function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;


    // Validar se os campos estão preenchidos
    if (name.trim() == '' || email.trim() == '' || comment.trim() == '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }


    // Validar o formato do email usando uma expressão regular simples
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false;
    }


    // Se passou na validação, exibir mensagem de sucesso e limpar o formulário
    showSuccessMessage();
    clearForm();


    // Impedir o envio real do formulário
    return false;
}


function showSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
}


function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('comment').value = '';
}

var motivos = [
    
  ];
 
  var images = [
    "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2014/12/23/taj-mahal-shutterstock.jpg",
    "https://www.temporadalivre.com/uploads/editor/pictures/226dd6274351/content_petra-4982346_960_720.jpg",
    "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/09/sete-maravilhas-do-mundo-grande-muralha.jpeg",
    "https://services.meteored.com/img/article/7-nuevas-maravillas-del-mundo-moderno-1698232887646_512.jpeg",
    "https://static.todamateria.com.br/upload/56/7d/567df75a2ca8e-as-sete-maravilhas-do-mundo-moderno.jpg?auto_optimize=low",
    "https://i0.wp.com/dolcemorumbi.com/wp-content/uploads/2022/01/7-maravilhas-mundo-moderno-1-pyramid-5744558_1920.jpg?fit=1920%2C1260&ssl=1",
    ""
  ];
 
  var i = 0;
  function proximoslide() {  
      document.getElementById("textomotivos").innerHTML = motivos[i];
      document.getElementById("album").src = images[i];
      i++;
 
  }

  
    
