import { SQL_DETAILS_ESPECIFICS_SENADO } from '../../repository/senado/sql_details_especifics_senado';
import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";

class CircuncripcionIndigenaSenado extends ListDao{
    public getMeListCircuncripcionIndigenaSenado(req:Request,res: Response):void{
        CircuncripcionIndigenaSenado.getInfo(SQL_DETAILS_ESPECIFICS_SENADO.CIRCUNCRIPCION_INDIGENA_SENADO,[],res);
    }
}
const circuncripcionIndigenaSenado = new CircuncripcionIndigenaSenado();
export default circuncripcionIndigenaSenado;