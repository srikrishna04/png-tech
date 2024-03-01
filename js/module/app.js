import { firstName, lastname } from "./utils/firstname";
import {age} from "./utils/age"
import some,{ Person } from "./utils/person";
console.log(firstName,lastname,age)
const y = Person('sri','krishna',20)
y.info()
console.log(y)
console.log(some)