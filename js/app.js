
//Cuando el documento del dom carga se pueden ejecutar funciones
//esto hace que los elementos del dom esten disponibles
//para su manipulacion
document.addEventListener("DOMContentLoaded"),function(){

    const marketLink = document.querySelector("a[href = 'productos.html']")
    const profileLink = document.querySelector("a[href = 'perfil.html']")
    const logoutLink = document.querySelector("a[onClick = 'logout()']")

    // Usuario esta autenticado

    if(isAuthenticated()){
       
        marketLink.style.display = "block";
        profileLink.style.display = "block";
        logoutLink.style.display = "block"; 
    
    }else{
       
        marketLink.style.display = "none";
        profileLink.style.display = "none";
        logoutLink.style.display = "none"; 
    
    }

}