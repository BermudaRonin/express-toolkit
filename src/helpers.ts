import * as Types from './types'

export const endpointToRoute = (ep : Types.EpConstructor, r: Types.Router) => {
    switch (ep.method) {
        case 'GET': return r.get(ep.endpoint, ep.middlewares, ep.handler)
        case 'POST': return r.post(ep.endpoint, ep.middlewares, ep.handler)
        case 'DELETE': return r.delete(ep.endpoint, ep.middlewares, ep.handler)
        case 'PUT': return r.put(ep.endpoint, ep.middlewares, ep.handler)
        default: throw new Error("Incorrect method") // TODO    
    }
}