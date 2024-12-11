export default class TableModel{
    public id: number | null = null;
    public heading: string | null = null;
    public date: Date | null = null;
    public img1: string | null = null;
    public img2: string | null = null;
    public title1: string | null = null;
    public title2: string | null = null;
    public title3: string | null = null;
    public text1: string | null = null;
    public text2: string | null = null;
    public text3: string | null = null;
    
    constructor(item: any) {
        this._setId(item);
        this._setHeading(item);
        this._setDate(item);
        this._setImg1(item);
        this._setImg2(item);
        this._setTitle1(item);
        this._setTitle2(item);
        this._setTitle3(item);
        this._setText1(item);
        this._setText2(item);
        this._setText3(item);
    }
    
    private _setId({id}: any) {
        this.id = id
    }
    
    _setHeading({heading}: any) {
        this.heading = heading;
    }
    
    _setDate({date}: any) {
        this.date = date
    }
    
    _setImg1({img1}: any) {
        this.img1 = img1
    }

    _setImg2({img2}: any) {
        this.img2 = img2
    }
    
    _setTitle1({title1}: any) {
        this.title1 = title1
    }
    
    _setTitle2({title2}: any) {
        this.title2 = title2
    }

    _setTitle3({title3}: any) {
        this.title3 = title3
    }

    _setText1({text1}: any) {
        this.text1 = text1
    }

    _setText2({text2}: any) {
        this.text2 = text2
    }

    _setText3({text3}: any) {
        this.text3 = text3
    }

}