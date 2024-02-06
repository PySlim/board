import {UserDataInterface} from "./user.data.interface";
import {undefined} from "zod";
import MainQuery from "../../../utils/database/query/main.query.class";
import {NextFunction} from "express";

class UserData implements  UserDataInterface{
    Create(data: Object, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(id: string, next: NextFunction): Promise<any> {
        return ;
    }

    Retrieve(id: string, next: NextFunction): Promise<any> {
        return ;
    }

    Update(id: string, data: Object, next: NextFunction): Promise<any> {
        return ;
    }

    dataSet: MainQuery;

}


export default  new UserData()
