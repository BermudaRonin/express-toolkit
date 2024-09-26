import { ExpressNext, ExpressRequest, ExpressResponse, ExpressRouter } from "./legacy"

export type ID = string
export type Label = string
export type Description = string
export type Message = string;

export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT'
export type Endpoint = string

export type SearchParams = Record<string, string>
export type Params = Record<string, string>
export type Body = Record<string, string>
export type Headers = Record<string, string>
export type Query = Record<string, string>

export type SyncHandler = (req: ExpressRequest, res: ExpressResponse) => any
export type AsyncHandler = (req: ExpressRequest, res: ExpressResponse) => Promise<any>
export type SyncMiddleware = (req: ExpressRequest, res: ExpressResponse, next: ExpressNext) => any
export type AsyncMiddleware = (req: ExpressRequest, res: ExpressResponse, next: ExpressNext) => Promise<any>

export type Handler = SyncHandler | AsyncHandler
export type Middlware = SyncMiddleware | AsyncMiddleware
export type Middlewares = Middlware[]
export type HandlerOrMiddleware = Handler | Middlware

export type Router = ExpressRouter

export interface EpConstructor {
    id: ID
    label: Label
    description: Description
    method: Method
    endpoint: Endpoint
    searchParams?: SearchParams
    params?: Params
    body?: Body
    headers?: Headers
    middlewares: Middlewares
    handler: HandlerOrMiddleware
}

export type IsSuccess = boolean;
export type Data = object;
export type Error = object;
export type Meta = any; // TODO

export interface ResponseBody {
    success: IsSuccess,
    message: Message,
    data?: Data,
    error?: Error,
    meta?: Meta,
}