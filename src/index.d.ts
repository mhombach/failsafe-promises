declare function failSafe<T>(promiseInput: Promise<T>): Promise<IFailsavePromise<T>>;
interface IFailsavePromise<T> {
    protectedPromise: Promise<T>;
    status: boolean;
    error: any | null;
    result: T | null;
}
export { failSafe };
