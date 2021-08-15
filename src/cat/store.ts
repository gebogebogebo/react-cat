export interface RootState {
  getCatReducer: CatState
}

export interface CatState {
  status: string,
  url: string,
  lastUpdated: Number
}