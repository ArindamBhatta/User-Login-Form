import { Alert } from '../../entities'
import IAlertRepo, { IGetAlertsByUserIdRepoParams } from './AlertRepo.interface'

export default class AlertRepo implements IAlertRepo {
  private db: any // db config
  private collectionName: string = 'alerts'

  constructor(db: any) {
    this.db = db
  }

  getCollectionRef = () => {
    return this.db.collection(this.collectionName)
  }

  entityToStorageModel = (entity: Alert) => {
    return {
      title: entity.title,
      status: entity.status,
      isActive: entity.isActive,
      isDeleted: entity.isDeleted,
      userId: entity.userId,
      careerSiteUrl: entity.careerSiteUrl,
      filter: entity.filter,
      createdTime: entity.createdAt
    }
  }

  async createAlert(payload: Alert) {
    const alert = new Alert(payload)
    console.log(payload)
    const StorageData = this.entityToStorageModel(alert)
    console.log(StorageData)
    try {
      const docRef = await this.getCollectionRef().add(StorageData)
      return docRef
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async updateAlert(payload: Alert, id: string) {
    const StorageData = this.entityToStorageModel(payload)
    try {
      const alertRef = this.getCollectionRef().doc(id);
      await alertRef.update(StorageData)
      return alertRef;
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async getAlertsByUserId(payload: IGetAlertsByUserIdRepoParams) {
    try {
      const userId = payload
      console.log({ userId })
      const snapshot = await this.getCollectionRef().where('userId', '==', userId).get();
      const alertData = snapshot.docs.map((doc: any) => doc.data());
      return alertData
    } catch (error) {
      console.error('Error retrieving alerts:', error)
      return error
    }
  }
}
