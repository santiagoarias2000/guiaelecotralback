import { Request, Response} from 'express';
import ListDao from "../../dao/ListDao";
import { SQL_COUNTS_QUERIES } from '../../repository/countsGlobals/sql_counts_queries';

class TotalVotos extends ListDao{
    public getMeListTotalVotos(req:Request,res: Response):void{
        TotalVotos.getInfo(SQL_COUNTS_QUERIES.TOTAL_VOTOS,[],res);
    }
}
const totalVotos = new TotalVotos();
export default totalVotos;