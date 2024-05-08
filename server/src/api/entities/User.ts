import { v4 as uuidv4 } from 'uuid'

export default class User {
  private _id: string
  private _email: string
  private _deleted: boolean
  private _createdAt: number
  private _updatedAt: number

  constructor({
    id,
    email,
    deleted,
    createdAt,
    updatedAt
  }: {
    id?: string
    email: string
    deleted?: boolean
    createdAt?: number
    updatedAt?: number
  }) {
    this._id = id || uuidv4()
    this._email = email
    this._deleted = deleted || false
    this._createdAt = createdAt || Date.now()
    this._updatedAt = updatedAt || Date.now()
  }

  get id() {
    return this._id
  }

  set id(id: string) {
    this._id = id
  }

  get email() {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  get deleted() {
    return this._deleted
  }

  set deleted(value: boolean) {
    this._deleted = value
  }

  get createdAt() {
    return this._createdAt
  }

  set createdAt(createdAt: number) {
    this._createdAt = createdAt
  }

  get updatedAt() {
    return this._updatedAt
  }

  set updatedAt(updatedAt: number) {
    this._updatedAt = updatedAt
  }
}
