// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	cargarnombrejugador();
	function cargarnombrejugador()
	{
		basedatos.transaction (function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario";
			ejecutar.executeSql(sql, undefined,function(ejecutar,resultado){
				var datosJugador=resultado.rows.item(0);
				$('#jugador').text(datosJugador.NombreUsuario);
	$('#btnjugar').on('tap',function(){
		var pantalla=$.mobile.gatScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla-encabezado-pie)/2;
		
		$('.cuadro').height(alto);
		
		//alert('Pantalla ' + pantalla);
		//alert('Encabezado ' + encabezado);
	});//btnjugar-click
	
	$('.cuadro').on('vmousedown',function(){
		$('#pantalla').append(quien ($ (this).attr ('id')));
		$(this).addClass('pulsado');
	});
	
	$('.cuadro').on('vmouseup',function(){
		$(this).removeClass('pulsado');
	});
	
	function quien (q)
	{
		return q.substring (1);
	}
	
		});
	});
	}
	
}); 
});

