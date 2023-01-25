function objeto(){
	var alumno=new Object();
	alumno.nombre="Mario"
	alumno.apellidos="Nocea Cabrera"
	alumno.edad=19;
	document.write(alumno instanceof Object);
	document.write(typeof alumno);
	document.write(alumno.nombre);
	document.write(alumno.apellidos);
	document.write(alumno.edad);
	}