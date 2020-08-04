class Deferred<T> {
    private resolveFunc?: (data: T) => void;
    private rejectFunc?: (error:any)=>void;
    private _promise:Promise<T>;
    constructor() {
        this._promise=new Promise((resolve, reject) => {
            this.resolveFunc = resolve;
            this.rejectFunc = reject;
        });
    }

    public resolve(data: T) {
        if (this.resolveFunc) {
            this.resolveFunc(data);
        }
    }

    public reject(error: any) {
        if (this.rejectFunc) {
            this.rejectFunc(error);
        }
    }

    public get promise(): Promise<T> {
        return this._promise;
    }
}


const def = new Deferred<string>();
console.log(new Date());
setTimeout(() => def.resolve('sth'), 1000);

def.promise.then(function (data) {
    console.log(new Date());
    console.log(data);
});


