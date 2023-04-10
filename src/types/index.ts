// 通用请求体
export interface CommonReq {
  pageIndex: number
  pageSize: number
  where?: object
}

// 通用响应体
export interface CommonRes<T> {
  total: number
  list: T[]
}
