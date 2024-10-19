
const modelo = require('./modelo.js');
describe('El sistema', function() {
    let sistema;
  
    beforeEach(function() {
    sistema=new modelo.Sistema()
    });
    
  it('inicialmente no hay usuarios', function() {
      expect(sistema.numeroUsuarios()).toEqual(0);
  });
    
  it("comprobamos agregar usuario con nick", function(){
      expect(sistema.numeroUsuarios()).toEqual(0);
      sistema.agregarUsuario("Pepe");
      expect(sistema.numeroUsuarios()).toEqual(1);
      expect(sistema.usuarioActivo("Pepe")).toEqual(true);
    
  });
    
  it("comprobamos eliminar usuario con nick", function(){
      expect(sistema.numeroUsuarios()).toEqual(0);
      sistema.agregarUsuario("Pepe");
      expect(sistema.numeroUsuarios()).toEqual(1);
      expect(sistema.usuarioActivo("Pepe")).toEqual(true);
      sistema.eliminarUsuario("Pepe");
      expect(sistema.numeroUsuarios()).toEqual(0);

  });
    
  xit("comprobamos usuario Activo", function(){
    //expect(sistema.numeroUsuarios()).toEqual(0);
    //sistema.agregarUsuario("Pepe");
    //expect(sistema.usuarioActivo("Pepe")).toEqual(true);
    //expect(sistema.usuarioActivo("Pepe")).toEqual(false);
    
  });
    
  xit("comprobamos el metodo numero de usuarios", function(){
    //calcular las claves del array asociativo Object.keys(sistema.usuarios)
    //comprobamos que el valor por numeroUsuarios() es igual 
  });

});
  