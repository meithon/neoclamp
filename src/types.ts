export type GraphValue = number

export type GraphValueList = GraphValue[]

export interface GraphValueObj {
  x: GraphValueList
  y: GraphValueList
}

export type LinePath = string

export interface ComputedPathObj {
  from: LinePath
  to: LinePath
}
