const Employee = require('./employee')

class Intern extends Employee{
    constructor(name,id,email){
        super(name,id,email)
    }

    getMember(){
        return Intern
    }
}

module.exports = Intern