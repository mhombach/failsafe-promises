declare function failSafe<T>(promiseInput: Promise<T>): Promise<IFailsavePromise<T>>;
interface IFailsavePromise<T> {
    internalPromise: Promise<T>;
    success: boolean;
    error: any | null;
    result: T | null;
}
export { failSafe };
