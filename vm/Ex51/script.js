function animation(elem) {  
	let sp = {
		radius  :     250, 
		speed   :     20  
	},
	f = 0,
	s = 2 * Math.PI / 180; 
	setInterval(function() {  
		f += s; 
		  elem.style.left =  235 + sp.radius * Math.sin(f)  + 'px'; 
		  elem.style.top =   235 + sp.radius * Math.cos(f) + 'px';
	}, sp.speed)
}

