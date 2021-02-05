
//Armar la grilla de autores una vez que se carga la página
window.addEventListener("DOMContentLoaded", ()=> {


//Construir el html para cada autor:
let buildContent = document.getElementById("grid-autores");



//Traer los autores del json mediante ajax
function getAutores() {
    var url = `js/autores.json`;
    $.ajax({
      method: "GET",
      dataType: "json",
      url: url,
    })
    .done(function (autores) {
      autoresTotal = autores;
      
      //Función para crear los modales:
      autoresTotal.forEach(allAutores => {
        buildContent.innerHTML += 
            `
            <div class="autores-card">
                <a href="" data-toggle="modal" data-target="#id${allAutores.id}">
                    <img src="${allAutores.img}" alt="" class="w-100 p-3">
                </a>
                <p class="text-center h3-articulos text-capitalize">${allAutores.name}</p>
            </div>
            
            <!--CONTENIDO DEL MODAL-->

            <div class="modal fade" id="id${allAutores.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
               <div class="modal-content modal-autores">
               <button type="button" class="btn-close align-self-end m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                 <div class="row m-4">
                    <img class="col-4" src="${allAutores.img}">
                    <div class="col align-self-center">
                      <h5 class="header-cat-text">${allAutores.name}</h5>
                      <span class="d-inline autor-career">${allAutores.career}</span>
                    </div>
                 </div>
                 <div class="row m-4">
                    <p class="copete">${allAutores.description}</p>
                    <div class="navbar-nav social-media d-flex justify-content-end mx-2">
                      <a class="nav-link p-1" href="${allAutores.twitter}"><img src="img/home/icono_tw.png"></a>
                      <a class="nav-link p-1" href="${allAutores.instagram}"><img src="img/home/icono_ig.png"></a>
                      <a class="nav-link p-1" href="${allAutores.linkedin}"><img src="img/home/icono_in.png"></a>
                      <a class="nav-link p-1" href="${allAutores.facebook}"><img src="img/home/icono_fb.png"></a>
                    </div>
                </div>

                <hr>

                <div class="row m-4">
                    <p class="h3-articulos text-capitalize">Por ${allAutores.name}:</p>
                </div>

                <div class="row mx-4 my-4">
                  <img class="col-6 p-0" src="https://via.placeholder.com/200x100" alt="">
                  <div class="col-6 bg-info  p-3">
                    <div class="d-flex">
                      <p class="bajada-news-home text-uppercase">Sociedad</p><p class="ms-auto date-last-article">Oct. 5</p>
                    </div>
                    <div class="my-4">
                      <span class="align-self-center h3-articulos text-capitalize">¿Cuántos estudiantes dejarían la escuela en Argentina a causa del COVID-19?</span>
                    </div>
                    <span class="d-flex flex-row-reverse">icon</span>
                  </div>
                </div>

                <div class="row mx-4 mb-5">
                <img class="col-6 p-0" src="https://via.placeholder.com/200x100" alt=""></img>
                <div class="col-6 bg-info  p-3">
                  <div class="d-flex">
                  <p class="bajada-news-home text-uppercase">Sociedad</p><p class="ms-auto date-last-article">Oct. 5</p>
                  </div>
                  <div class="my-4">
                    <span class="align-self-center h3-articulos text-capitalize">¿Cuántos estudiantes dejarían la escuela en Argentina a causa del COVID-19?</span>
                  </div>
                  <span class="d-flex flex-row-reverse">icon</span>
                </div>
              </div>
					</div>
				</div>
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
    getAutores();
  
});

  