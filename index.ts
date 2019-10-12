async function failSafe<T>(promiseInput: Promise<T>): Promise<IFailsavePromise<T>> {
    console.log("was called...");
    let safeObject: IFailsavePromise<T> = {
        protectedPromise: promiseInput,
        status: false,
        error: null,
        result: null
    };
    
    try {
        safeObject.result = await safeObject.protectedPromise;
        safeObject.status = true;
        console.log("inside-true");
        
    } catch (error) {
        safeObject.status = false;
        safeObject.error = error;
        console.log("inside-false");
    }
    return safeObject;
};

interface IFailsavePromise<T> {
    protectedPromise: Promise<T>,
    status: boolean,
    error: any | null,
    result: T | null
}

export { failSafe } 