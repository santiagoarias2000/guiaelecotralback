import { SQL_DETAILS_ESPECIFICS_CAMARA } from './../../repository/camara/sql_details_especifics_camara';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionIndigenaCamara extends ListDao{
    public getMeListcircuncripcionIndigenaCamara(req:Request,res: Response):void{
        CircuncripcionIndigenaCamara.getInfo(SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO,[],res);
    }
    public getMeListCircuncripcionIndigenaCamaraDepartamento(req: Request, res: Response): void {
        const idDepartment = req.params.id_department;
        const parametro = [idDepartment];
        
        CircuncripcionIndigenaCamara.getInfo( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO, parametro, res );
      }
      public getMeListCircuncripcionIndigenaCamaraDepartamentoMunicipio(req: Request, res: Response): void {
        const idDepartment = req.params.id_department;
        const idMunicipality=req.params.id_municipality;
        const parametro = [idDepartment,idMunicipality];
        
        CircuncripcionIndigenaCamara.getInfo( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_INDIGENA_CAMARA_DEPARTAMENTO_MUNICIPIO, parametro, res );
      }
      
}
const circuncripcionIndigenaCamara = new CircuncripcionIndigenaCamara();
export default circuncripcionIndigenaCamara;