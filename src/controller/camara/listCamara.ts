import { Request, Response} from 'express';
import { SQL_TO_LIST_CAMARA } from '../../repository/camara/sql_toList_Camara';
import ListDao from "../../dao/ListDao"

class ListControllerCamara extends ListDao{
    public getMeListCamaraTerritorial(req:Request,res:Response):void{
        ListControllerCamara.getInfo(SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_TERRITORIAL,[],res);
    }
    
    public getMeListCamaraIndigena(req:Request,res:Response):void{
        ListControllerCamara.getInfo(SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_INDIGENA,[],res);
    }
    
    public getMeListCamaraAfroDescendiente(req:Request,res:Response):void{
        ListControllerCamara.getInfo(SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_AFRO_DESCENDIENTE,[],res);
    }
}
const listControllerCamara = new ListControllerCamara();
export default listControllerCamara;