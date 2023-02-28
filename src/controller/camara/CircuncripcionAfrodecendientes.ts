import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";
import { SQL_DETAILS_ESPECIFICS_CAMARA } from '../../repository/camara/sql_details_especifics_camara';

class CircuncripcionAfrodecendientesCamara extends ListDao{
    public getMeListCircuncripcionAfrodecendientesCamara(req:Request,res: Response):void{
        CircuncripcionAfrodecendientesCamara.getInfo(SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO,[],res);
    }
    public getMeListCircuncripcionAfroDescendienteCamaraDepartamento(req: Request, res: Response): void {
        const idDepartment = req.params.id_department;
        const parametro = [idDepartment];
        
        CircuncripcionAfrodecendientesCamara.getInfo( SQL_DETAILS_ESPECIFICS_CAMARA.CIRCUNCRIPCION_AFRODESCENDIENTE_CAMARA_DEPARTAMENTO, parametro, res );
      }
}
const circuncripcionAfrodecendientesCamara = new CircuncripcionAfrodecendientesCamara();
export default circuncripcionAfrodecendientesCamara;