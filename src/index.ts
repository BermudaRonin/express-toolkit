import * as Types from './types';
import * as Helpers from './helpers';

export class Ep {
    public id: Types.ID
    public label: Types.Label
    public description: Types.Description
    public method: Types.Method
    public endpoint: Types.Endpoint
    public searchParams: Types.SearchParams | undefined
    public params: Types.Params | undefined
    public body: Types.Body | undefined
    public headers: Types.Headers | undefined
    public middlewares: Types.Middlewares
    public handler: Types.HandlerOrMiddleware

    constructor(props: Types.EpConstructor) {
        this.id = props.id
        this.label = props.label
        this.description = props.description
        this.method = props.method
        this.endpoint = props.endpoint
        this.searchParams = props.searchParams
        this.params = props.params
        this.body = props.body
        this.headers = props.headers
        this.middlewares = props.middlewares || []
        this.handler = props.handler
    }

    toRoute(r: Types.Router) {
        Helpers.endpointToRoute(this, r)
    }
}


// export default class Rs {
//     public success: Types.ResponseSuccess
//     public message: Types.ResponseMessage
//     public data: Types.ResponseData | undefined
//     public error: Types.ResponseError | undefined
//     public meta: Types.ResponseMeta | undefined

//     constructor(props: Types.ResponseConstructor) {
//         this.success = props.success
//         this.message = props.message
//         this.data = props.data
//         this.error = props.error
//         this.meta = props.meta
//     }
// }
