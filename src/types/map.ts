// 地理信息
export interface Feature {
  type: string
  properties: {
    name: string
    loginid: string
    center: number[]
  }
  geometry: {
    type: string
    coordinates: number[][][] | number[][][][]
  }
}
