import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class ErrorService {
    
    private _errors:Array<String> = new Array<String>();

    public get Errors():Array<String> { return this._errors; }
        
    public LogError(e: any){
        this._errors.push(e.toString());
    }

}