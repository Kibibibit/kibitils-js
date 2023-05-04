import { identity, ifElse, toString } from "ramda";
import { isString } from "./type-checking";

const stringify: (...args:any) => string = ifElse<any, string, string>(
    isString,
    identity,
    toString
)

export default stringify