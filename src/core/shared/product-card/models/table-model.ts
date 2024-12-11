export default class TableModel{
    public id: number | null = null;
    public heading: string | null = null;
    public text: string | null = null;
    public price: string | null = null;
    
    constructor(item: any) {
        this._setId(item);
        this._setHeading(item);
        this._setText(item);
        this._setPrice(item);
    }
    
    private _setId({id}: any) {
        this.id = id
    }
    
    _setHeading({heading}: any) {
        this.heading = heading;
    }

    _setText({text}: any) {
        this.text = text
    }

    _setPrice({price}: any) {
        this.price = price
    }

}