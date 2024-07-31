export type Variant =  'filld' | 'dropDown' | 'common'

export interface IMyButtonProps {
  title: string
  variant?:Variant
}