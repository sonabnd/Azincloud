export default class TableModel{
    public id: number | null = null;
    public img: string | null = null;
    public title: string | null = null;
    public text: Date | null = null;

    
    constructor(item: any) {
        this._setId(item);
        this._setImg(item);
        this._setTitle(item);
        this._setText(item);
    }
    
    private _setId({id}: any) {
        this.id = id
    }
    
    _setImg({img}: any) {
        this.img = img
    }

    _setTitle({title}: any) {
        this.title = title
    }

    _setText({text}: any) {
        this.text = text
    }

}