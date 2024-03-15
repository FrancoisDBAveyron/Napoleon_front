import type {EntityInterface} from '~/types/entity'

export interface BatailleInterface extends EntityInterface {
  nom: string
  annee: number
  lieu: string
  force: string 
  pertes: string
  situation: string
  image?: Array<string>
}
