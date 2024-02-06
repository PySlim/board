import {CardDataInterface} from "./card.data.interface";
import MainQuery from "../../../utils/database/query/main.query.class";
import {NextFunction} from "express";

class CardData implements  CardDataInterface{
    Create(data: Object, next: NextFunction): Promise<any> {
        return ;
    }

    Destroy(id: string, next: NextFunction): Promise<any> {
        return ;
    }

    Update(id: string, data: Object, next: NextFunction): Promise<any> {
        return ;
    }

    dataSet: MainQuery;

    GetCardByUserId(id: string, next: NextFunction): Promise<any> {
        return ;
    }

}

export default  new CardData()
