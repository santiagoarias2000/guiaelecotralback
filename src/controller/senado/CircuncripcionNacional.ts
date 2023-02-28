import { SQL_DETAILS_ESPECIFICS_SENADO } from './../../repository/senado/sql_details_especifics_senado';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionNacionalSenado extends ListDao{
    public getMeListCircuncripcionNacionalSenado(req:Request,res: Response):void{
        CircuncripcionNacionalSenado.getInfo(SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_NACIONAL_SENADO,[],res);
    }
}
const circuncripcionNacionalSenado = new CircuncripcionNacionalSenado();
export default circuncripcionNacionalSenado;