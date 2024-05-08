import { User } from '../../entities'
import IUserRepo, { ICreateUserRepoParams, IGetUserRepoParams } from './UserRepo.interface'

export default class UserRepo implements IUserRepo {
  private db: any // db config
  private collectionName: string = 'users'

  constructor(db: any) {
    this.db = db
  }

  getCollectionRef = () => {
    return this.db.collection(this.collectionName)
  }

  entityToStorageModel = (entity: User) => {
    return {
      id: entity.id,
      email: entity.email,
      delete: entity.deleted,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }

  entityToDeliveryModel = (entity: User) => {
    return {
      id: entity.id,
      email: entity.email,
      delete: entity.deleted,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }

  createUser = async (payload: ICreateUserRepoParams) => {
    const storageData = this.entityToStorageModel(payload.user)
    try {
      console.log('repo::createUser', { storageData })
      const docRef = await this.getCollectionRef().add(storageData)
      const doc = await docRef.get()
      const rawUserData = doc.data()
      return new User(rawUserData)
    } catch (error) {
      console.error('Error creating user:', error)
      return error
    }
  }

  getUser = async (payload: IGetUserRepoParams) => {
    try {
      const email = payload.email
      const snapshot = await this.getCollectionRef().where('email', '==', email).limit(1).get()
      if (snapshot.size) {
        const _user = snapshot.docs.map((doc: any) => doc.data())[0]
        return new User(_user)
      } else {
        return {}
      }
    } catch (error) {
      console.error('Error retrieving user:', error)
      return error
    }
  }
}
