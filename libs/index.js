var rightKey, leftKey, topKey, bottomKey;

$(document).ready(function () {

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($("#features"))
			.add($("#index"))
			.add($("#servicio"))
			.add($("#sandbox"))
			.add($("#me"))
			.add($("#servicio1"))
			.add($("#servicio2"))
			.add($("#servicio3"));

	parallax.background = $("body");

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};


	//Setting up page navigation
	parallax.index.onload=function(){
		setRight("me", "Visión");
		//setTop("sandbox", "SandBox");
		setLeft("features","Contacto");
	};

	parallax.sandbox.onload=function(){
		//setBottom("index","Inicio");
		setLeft("me","Visión");
		setRight("servicio","Servicios");
	};

	parallax.features.onload=function(){
		setLeft("servicio", "Servicios");
		setRight("index", "Inicio");
	};

	parallax.me.onload=function(){
		setLeft("index", "Inicio");
		setRight("sandbox","Misión");
	};
	
	parallax.servicio.onload=function(){
		setLeft("sandbox","Misión");
		setRight("features","Contacto");
		setTop("servicio3","Servicio 3");
		setBottom("servicio1","Servicio 1");
	};
	
	parallax.servicio1.onload=function(){
		setTop("servicio","Servicios");
		setBottom("servicio2","Servicio 2");
	};
	
	parallax.servicio2.onload=function(){
		setTop("servicio1","Servicio 1");
		setBottom("servicio3","Servicio 3");
	};
	
	parallax.servicio3.onload=function(){
		setTop("servicio2","Servicio 2");
		setBottom("servicio","Servicios");
	};


	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.index.show();

});
