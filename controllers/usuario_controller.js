import { UsuarioUseCase } from "../use_cases/usuarios.js";

export default class UsuarioController {
  constructor() {
    this.usuarioUseCase = new UsuarioUseCase();
  }

  //CONTROLLER CREAR USUARIO
  async crearController(req, res, next) {
    console.log(req.body);

    try {
      const { nombre, apellido, mail, direccion, telefono, password } =req.body;
      await this.usuarioUseCase.crear(nombre,apellido,mail,direccion,telefono,password);
    } catch (error) {
      next(error);
    }
  }

  //CONTROLLER LISTAR USUARIOS
  async listarController(req, res) {
    const respuesta = await this.usuarioUseCase.listar();
    return respuesta;
  }

  //CONTROLLER BUSCAR USUARIO POR MAIL
  async buscarController(req, res) {
    try{
      const { id } = req.params;
      const respuesta = await this.usuarioUseCase.buscar(id);
      return respuesta;
    } catch (error){
      next(error);
    }
    
  }

  //CONTROLLER PARA ELIMINAR USUARIO
  async eliminarUsuario(req, res, next) {
    const { id } = req.params;

    try {
      await this.usuarioUseCase.eliminar(id);
    } catch (error) {
      next(error);
    }
  }

  //CONTROLLER PARA MODIFICAR
  async modificarController(req, res) {
    const { id } = req.params;
    const {telefono} = req.body;
    try {
      await this.usuarioUseCase.modificar(id, telefono);
    } catch (error) {
      next(error);
    }
  }

  //CAMBIO
  async contratarServicio(req, res) {
    const { mail,id } = req.params;
    
    try {
      await this.usuarioUseCase.contratarServicio(mail, id);
    } catch (error) {
      next(error);
    }
  }

}
