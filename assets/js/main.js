function initMap(){/* initMap inicializa el mapa */
	var map = new google.maps.Map(document.getElementById("map"),{/* NOTA: van comas */
		zoom:5,// nivel de profundidad de nuestro mapa. + zoom localizado se ve 
		center: {lat: -9.1191427, lng: -77.0349046},//longitud y latitud en que queremos que se muestre nuestro mapa
		mapTypeControl: false,
		zoomControl:false,
		streetViewControl:false
	});

	function buscar(){/* va dentro de initMap() */
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito,funcionError);
		}
	}
	/*	getCurrentPosition permite saber ubicacion actual del user 
		funcionExito se ejecuta solo cuando el user comparte su ubicacion
		funcionError se ejecuta cuando se produce un error en la geolocalizacion
	*/


	document.getElementById("encuentrame").addEventListener("click",buscar); //"encuentrame" es el boton en HTML

	var latitud,longitud;

	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}


	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}

}

