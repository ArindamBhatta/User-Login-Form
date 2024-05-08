import { db } from '../../db/connection'
import AlertRepo from './AlertRepo/AlertRepo'
import UserRepo from './UserRepo/UserRepo'

const alertRepo = new AlertRepo(db)
const userRepo = new UserRepo(db)

export { alertRepo, userRepo }
