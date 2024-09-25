import { Request, Response, NextFunction, Router } from "express"

// Classes
export const JavaScriptError = Error

// Interfaces
export interface ExpressRequest extends Request { }
export interface ExpressResponse extends Response { }
export interface ExpressNext extends NextFunction { }
export interface ExpressRouter extends Router { }
