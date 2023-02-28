import { Router } from "express";
import listControllerSenado from "../controller/senado/ListSenado";
import circuncripcionIndigenaSenado from "../controller/senado/CircuncripcionIndigena";
import circuncripcionNacionalSenado from "../controller/senado/CircuncripcionNacional";
import totalVotos from "../controller/senado/TotalVotos";

class SenadoRoutes {
    public routesApiSenado: Router;
    constructor() {
        this.routesApiSenado = Router();
        this.setting();
    }
    public setting() {
        this.routesApiSenado.get("/list",listControllerSenado.getMeListSenado);
        this.routesApiSenado.get("/totalVotos",totalVotos.getMeListTotalVotos);
        this.routesApiSenado.get("/circuncripcionNacionalSenado",circuncripcionNacionalSenado.getMeListCircuncripcionNacionalSenado);
        this.routesApiSenado.get("/circuncripcionIndigenaSenado",circuncripcionIndigenaSenado.getMeListCircuncripcionIndigenaSenado);
    }
}
const senadoRoutes = new SenadoRoutes();
export default senadoRoutes.routesApiSenado;