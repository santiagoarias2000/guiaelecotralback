import { SQL_DETAILS_ESPECIFICS_CAMARA } from '../../repository/camara/sql_details_especifics_camara';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionTerritorialCamara extends ListDao{
    public getMeListCircuncripcionTerritorialCamara(req:Request,res: Response):void{
        CircuncripcionTerritorialCamara.getInfo(SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO,[],res);
    }
    public getMeListCircuncripcionTerritorialCamaraDepartamento(req: Request, res: Response): void {
        const idDepartment = req.params.id_department;
        const parametro = [idDepartment];
        
        CircuncripcionTerritorialCamara.getInfo( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_TERRITORIAL_CAMARA_DEPARTAMENTO, parametro, res );
      }

}
const circuncripcionTerritorialCamara = new CircuncripcionTerritorialCamara();
export default circuncripcionTerritorialCamara;