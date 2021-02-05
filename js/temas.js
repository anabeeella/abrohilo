
//Armar la grilla de autores una vez que se carga la página
window.addEventListener("DOMContentLoaded", ()=> {


//Construir el html para cada autor:
let buildNotas = document.getElementById("grid-notas");
    
    
    
    //Traer los autores del json mediante ajax
    function getNotas() {
        var url = `js/temas.json`;
        $.ajax({
          method: "GET",
          dataType: "json",
          url: url,
        })
        .done(function (notas) {
          notasTotal = notas;
          
          //Función para crear los modales:
          notasTotal.forEach(allNotas => {
            buildNotas.innerHTML += 
                `
                <div class="col-4 mb-4">
                    <div class="banner-autores d-flex justify-content-between px-3">
                        <p class="header-cat-text text-uppercase">${allNotas.tag}</p>
                        <p class="header-fecha">${allNotas.date}</p>
                    </div>
                    <a href="${allNotas.link}" class="text-decoration-none">
                    <img class="w-100" alt="" src="https://via.placeholder.com/300x150">
                    <div class=" bg-info p-4">
                        <p class="titular-news-home">${allNotas.title}</p>
                        <p class="bajada-news-home">${allNotas.description}</p>
                        <hr class="hr-news-home">
                        <p class="autor-news-home">Por ${allNotas.autor}</p>
                    </div>
                    </a>
                </div>
                `
              }
            )
        })
        .fail(function (error) {
          console.log(error);
        });
      
      }
      
      //Llamada a la función para cargar el contenido
        getNotas();
      
    });
    