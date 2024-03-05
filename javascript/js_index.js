
$(document).ready(function() {
	
    $("#iniciar").click(function(e) {
		e.preventDefault();
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if (!username.trim() || !password.trim()) {
		alert('Por favor ingrese un nombre de usuario y contraseña.');
		return;
	}

	$.ajax({
		type: 'POST',
		url: 'php/login.php',
		datatype:"json",
		data: {username: username, password:password},
		success: function(response) {
			console.log(response); 
			if (response == 1 )
{
	Swal.fire({
		icon: 'success',
		title: 'Usuario y contraseña correctas',
		text: 'Redirigiendo',
		timer: 2000,
		showConfirmButton: false,
		timerProgressBar: true,
		onBeforeOpen: () => {
		  Swal.showLoading()
		  timerInterval = setInterval(() => {
			const content = Swal.getContent()
			if (content) {
			  const b = content.querySelector('b')
			  if (b) {
				b.textContent = Swal.getTimerLeft()
			  }
			}
		  }, 100)
		},
		onClose: () => {
		  clearInterval(timerInterval)
		}
	  }).then((result) => {
		if (
		  /* Read more about handling dismissals below */
		  result.dismiss === Swal.DismissReason.timer
		) {
			window.location.href="pages/formulario.php";
		}
	  })

}
else {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'usuario o contraseña incorrectos',
		footer: 'vuelva a intentarlo'
	  })
}			
		}
	});
	


	
      });
    
   
});
