class Person{
    constructor(name){
        this.name = name
    }

    get name(){
        return this._name
    }

    set name(newName){
        newName = newName.trim()
        if (newName === ""){
            throw "it cannot be empty"
        }

        this._name = newName
    }
}

let FirstPerson = new Person("Theo")
console.log(FirstPerson)

let meeting = {
    attendes: [],
    add(attendee){
        console.log(`${attendee} joined the meeting`)
        this.attendes.push(attendee)
        return this
    },

    get latest(){
        let count = this.attendes.length
        return count == 0 ? undefined : this.attendes[count - 1]
    }
}

meeting.add("theo").add("Chinsisi").add("Maki").add("Bernard")
console.log(`the latest attende is ${meeting.latest}`)

let friendship = {
    friendies:[],
    add(friend){
        console.log(` You are friend with ${friend}`)
        this.friendies.push(friend)
        return this
    },

    get latest(){
        let number = this.friendies.lenghth
        return number == 0 ? undefined : this.friendies[number - 1]
    }
}

friendship.add("Bernard").add("Chisomo").add("Maki").add("Benson")
console.log(`your newest friend ${friendship.latest}`)