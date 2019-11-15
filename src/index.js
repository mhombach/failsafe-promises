"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function failSafe(promiseInput) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("was called...");
        let safeObject = {
            protectedPromise: promiseInput,
            status: false,
            error: null,
            result: null
        };
        try {
            safeObject.result = yield safeObject.protectedPromise;
            safeObject.status = true;
            console.log("inside-true");
        }
        catch (error) {
            safeObject.status = false;
            safeObject.error = error;
            console.log("inside-false");
        }
        return safeObject;
    });
}
exports.failSafe = failSafe;
;
