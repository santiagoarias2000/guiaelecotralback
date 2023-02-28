import { Request } from 'express';
import { Response } from 'express';
import ListDao from "../../dao/ListDao";
import { SQL_TO_LIST_SENADO } from '../../repository/senado/sql_toList_Senado';

class ListControllerSenado extends ListDao{
    public getMeListSenado(req: Request, res: Response):void{
        ListControllerSenado.getInfo(SQL_TO_LIST_SENADO.LIST_SENADO,[],res);
    }
}
const listControllerSenado = new ListControllerSenado();
export default listControllerSenado;