import { LinePath, GraphValueObj } from './types'

function computeDifference(arr: number[]): number[] {
  const AMOUNT_DIFFERENCE_PREVIOUS = 1
  const resultArray: number[] = []

  for (let i = 0; i < arr.length - AMOUNT_DIFFERENCE_PREVIOUS; i++) {
    resultArray.push(arr[i + AMOUNT_DIFFERENCE_PREVIOUS] - arr[i])
  }

  return resultArray
}

export function ComputeLinePath(data: GraphValueObj): LinePath {
  const displacement: GraphValueObj = {
    x: computeDifference(data.x),
    y: computeDifference(data.y)
  }

  let result = ''
  displacement.x.forEach((_, i) => {
    const { x, y } = displacement
    result += `l ${x[i]} ${-1 * y[i]} `
  })
  return result
}
