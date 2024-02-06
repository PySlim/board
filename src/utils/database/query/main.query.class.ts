import InsertQuery from "./insert.query.class";
import SelectWhQuery from "./select.where.query.class";
import SelectQuery from "./select.query.class";
import UpdateQuery from "./update.query.class";
import PaginationQuery from "./pagination.query.class";

class MainQuery{

    public insert: InsertQuery;
    public update: UpdateQuery;
    public select: SelectQuery;
    public selectWh: SelectWhQuery;
    public table : string;
    public pagination : PaginationQuery

    constructor(table: string){
        this.table=table;
        this.insert = new InsertQuery(this.table);
        this.update = new UpdateQuery(this.table);
        this.select = new SelectQuery(this.table);
        this.selectWh = new SelectWhQuery(this.table);
        this.pagination = new PaginationQuery(this.table);
    }
};

export default MainQuery;
