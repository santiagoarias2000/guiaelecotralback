import { Response } from 'express';
import pool from "../configuration/connection/connectionDB";

class ListDao{
    public static async getInfo(sqlConsult:string,parameter:any, res:Response):Promise<any>{
        await pool.result(sqlConsult, parameter)
        .then((result)=>{
            res.status(200).json(result.rows);
        })
        .catch((myErr)=>{
            console.log('Error en el daos: ', myErr);
            res.status(400).json({respuesta:'No esta trabajando el daos'});
        })
    }
}
export default ListDao;