
import { allPass, compose, is, not } from 'ramda'

export const isBoolean = is(Boolean)
export const isNotBoolean = compose(not, isBoolean)

export const isNumber = is(Number)
export const isNotNumber = compose(not, isNumber)

export const isString = is(String)
export const isNotString = compose(not, isString)

export const isArray = is(Array)
export const isNotArray = compose(not, isArray)

export const isFunction = is(Function)
export const isNotFunction = compose(not, isFunction)

export const isDate = is(Date)
export const isNotDate = compose(not, isDate)

export const isRegExp = is(RegExp)
export const isNotRegExp = compose(not, isRegExp)

export const isObject = allPass([is(Object),isNotDate,isNotRegExp,isNotFunction,isNotArray])
export const isNotObject = compose(not, isObject)





