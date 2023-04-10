export interface DataVConfig<T> {
  header: string[],
  data: T[],
  rowNum: number,
  headerBGC: string,
  oddRowBGC: string,
  evenRowBGC: string,
  headerHeight: number,
  columnWidth: number[],
  align: string[],
  index: boolean
}

export interface DataVBoard {
  row: string[]
  ceil: string
  rowIndex: number
  columnIndex: number
}