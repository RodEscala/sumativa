
// funcion para registrar usuario
function registerUser(user){
    // Recupera la lista de usuarios almacenada en localStorage y la convierte en un array.
    // Si no hay usuarios, inicializa la variable `users` como un array vacío.
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verifica si el nombre de usuario o el correo electrónico ya están registrados.
    // Utiliza `some()` para buscar coincidencias en el array de usuarios.
    if (users.some(u => u.username === user.username || u.email === user.email)) {
        alert("El nombre de usuario o el correo ya están registrados."); // Alerta si ya existe el usuario.
        return; // Termina la función sin registrar al usuario.
    }
    
    // Si no existen conflictos, añade el nuevo usuario al array de `users`.
    users.push(user);

    // Guarda la lista actualizada de usuarios en localStorage, convirtiéndola a JSON.
    localStorage.setItem('users', JSON.stringify(users));

    // Muestra una alerta confirmando el registro exitoso.
    alert("Registro exitoso.");

}

// Funcion para Iniciar Sesion
function login(username,password){
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(u => u.username === username && u.password === password);
    
    if(user){
        sessionStorage.setItem('authenticatedUser',JSON.stringify(user));
        alert("Inicio de sesion Exitoso.");
        window.location.href = "productos.html";

    }else{
        alert("Usuario y/o contraseña incorrectas.")
    }

}

//  Cerrar sesion
function logout(){
    sessionStorage.removeItem('authenticatedUser');
    alert("Sesion cerrada.")

    window.location.href = "index.html"
}

// Verificar si hay un usuario authenticado para ingresar a la pagina
function isAuthenticated(){
    return sessionStorage.getItem("authenticatedUser") !== null;
}


function showUser(){
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const userLogged = document.getElementById('userLogged');
    
    if (user) { 
      userLogged.textContent = `Usuario: ${user.username}`;
      userLogged.style.display = 'inline'; 
    } else {
      userLogged.style.display = 'none'; 
    }
}
