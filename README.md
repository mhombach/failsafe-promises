
# failsafe-promises

This small package is meant to be a shorter syntax for handling rejected promises (or promises that could reject). By using this package you can still check for the result/success of a promise, but there is no need for try-catching it anymore.

## __How to use:__

### Importing
I personally suggest to import with the `as` syntax, so you can keep the naming short.

##### Example:
```js
import { failSafe as fsp } from 'failsafe-promises';
```
or
```js
import { failSafe as __ } from 'failsafe-promises';
```

### Usage
The imported (async) function is a wrapper for a normal promise. So, just pass your promise into it:

##### Example:
```js
// Wrapping a Database-promise, which now can never again kill your runtime-app by rejecting
const result = await fsp(DB.someQuery());
```

### Result
What you are getting back from wrapping the promise is an object that has the following structure:

```
internalPromise: Promise<type of input-promise>
success: boolean
error: null or rejection-error of input-promise
result:  null or type of input-promise
```

So what you can do as an example is:

```js
import { failSafe as fsp } from 'failsafe-promises';

const query = await fsp(DB.someQuery());
if (query.success) {
    console.log('result=', query.result)
} else {
    console.log('result=', query.error)
}
```

If you are not interested in the case of an error and are only interested in if the promise has a not-null value or is null/error, you could use the ES6 destructuring syntax:

```js
import { failSafe as fsp } from 'failsafe-promises';

const { result } = await fsp(DB.someQuery());
console.log('result=', result)
```

## Plans for the future

I'm not sure if the idea of this package sounds interesting for others, but i could implement some global settings for this package, like logging errors (bool-flag for example) or passing a custom error-handler.

If you have any idea, what could be added/changed, just create an issue on github :)