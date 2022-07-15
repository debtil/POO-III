export default class Sauce{
    constructor(private _rim : number){}

    get rim(): number{
        return this._rim;
    }

    set rim(rim: number){
        this.rim = rim;
    }
}