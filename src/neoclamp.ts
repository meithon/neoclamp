export function computeSlope(
  startPoint: number,
  startPixel: number,
  endPoint: number,
  endPixel: number
): number {
  return (endPixel - startPixel) / (endPoint - startPoint)
}

export function computeDiff(
  startPoint: number,
  startPixel: number,
  slope: number
): number {
  return startPixel - slope * startPoint
}

export function formatCssClamp(
  min: number,
  slope: number,
  diff: number,
  max: number
): string {
  let diffString = ''
  if (diff > 0) {
    diffString = ` + ${diff}px`
  } else if (diff < 0) {
    diffString = ` - ${diff * -1}px`
  }
  return `clamp(${min}px, ${slope * 100}vw${diffString}, ${max}px)`
}

export default function neoclampCss(
  startPoint: number,
  startPixel: number,
  endPoint: number,
  endPixel: number
): string {
  const slope = computeSlope(startPoint, startPixel, endPoint, endPixel)
  if (startPoint === endPoint) {
    console.error(`startPoint and endPoint must be set to different values.`)
  }

  const diff = computeDiff(startPoint, startPixel, slope)
  const min = Math.min(startPixel, endPixel)
  const max = Math.max(startPixel, endPixel)
  return formatCssClamp(min, slope, diff, max)
}
