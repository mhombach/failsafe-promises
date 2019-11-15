async function failSafe<T>(promiseInput: Promise<T>): Promise<IFailsavePromise<T>> {
    let safeObject: IFailsavePromise<T> = {
        internalPromise: promiseInput,
        success: false,
        error: null,
        result: null
    };
    
    try {
        safeObject.result = await safeObject.internalPromise;
        safeObject.success = true;
        
    } catch (error) {
        safeObject.success = false;
        safeObject.error = error;
    }
    return safeObject;
};

interface IFailsavePromise<T> {
    internalPromise: Promise<T>,
    success: boolean,
    error: any | null,
    result: T | null
}

export { failSafe } 