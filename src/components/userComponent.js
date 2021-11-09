import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yuklendi")

let logger1 = new MongoLogger
let userService = new UserService(logger1)

let user1 = new User(1,"Mithat","Kara","Izmir");
let user2 = new User(2,"Ecem","Mete","Izmir");
userService.add(user1)
userService.add(user2)


console.log(userService.list())
console.log(userService.getById(2))

userService.getById(1)
userService.list()


let customer = {id:1, firstName:"Mithat"}
// prototyping
customer.lastName = "Kara"
console.log(customer.lastName)