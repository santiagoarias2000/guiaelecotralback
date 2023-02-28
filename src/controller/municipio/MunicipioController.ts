import { Request, Response } from "express";
import { SQL_MUNICIPIO } from "./../../repository/municipio/sql_list_municipio";
import ListDao from "../../dao/ListDao";

class MunicipioController extends ListDao {

  public getMeListMunicipio(req: Request, res: Response): void {
    const idDepartment = req.params.id_department;
    const parametro = [idDepartment];
    MunicipioController.getInfo( SQL_MUNICIPIO.LIST_MUNICIPIO, parametro, res );
  }
}
const municipioController = new MunicipioController();
export default municipioController;
