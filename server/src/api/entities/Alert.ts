import { v4 as uuidv4 } from 'uuid'

export default class Alert {
  private _id: string
  private _title: string
  private _userId: string
  private _isActive: boolean
  private _status: boolean
  private _careerSiteUrl: string
  private _filter: { key: string; value: string }[]
  private _isDeleted: boolean
  private _createdAt: number
  private _updatedAt: number

  constructor(data) {
    this._id = data.id
    this._title = data.title
    this._userId = data.userId
    this._isActive = data.isActive || true
    this._status = data.status || true
    this._careerSiteUrl = data.careerSiteUrl
    this._filter = data.filter
    this._isDeleted = data.isDeleted || false
    this._createdAt = data.createdAt || Date.now()
    this._updatedAt = data.updatedAt || Date.now()
  }

  get id() {
    return this._id
  }

  get title() {
    return this._title
  }
  get userId() {
    return this._userId
  }

  get isActive() {
    return this._isActive
  }

  get filter() {
    return this._filter
  }

  get careerSiteUrl() {
    return this._careerSiteUrl
  }

  get status() {
    return this._status
  }

  get isDeleted() {
    return this._isDeleted
  }

  get createdAt() {
    return this._createdAt
  }

  get updatedAt() {
    return this._updatedAt
  }

  set id(id: string) {
    this._id = id
  }

  set title(title: string) {
    this._title = title
  }

  set userId(userId: string) {
    this._userId = userId
  }

  set filter(filter: { key: string; value: string }[]) {
    this._filter = filter
  }

  set careerSiteUrl(careerSiteUrl: string) {
    this._careerSiteUrl = careerSiteUrl
  }

  set status(status: boolean) {
    this._status = status
  }
  set isActive(isActive: boolean) {
    this._isActive = isActive
  }

  set isDeleted(isDeleted: boolean) {
    this._isDeleted = isDeleted
  }

  set createdAt(createdAt: number) {
    this._createdAt = createdAt
  }

  set updatedAt(updatedAt: number) {
    this._updatedAt = updatedAt
  }
}
