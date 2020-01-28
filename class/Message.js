const Replay = require('./functions/Replay')

class Message {

    constructor(message)
    {
        // this._setMessage(Message)
        if(message.author.bot) return
        var parts = message.content.split('')
        var letterUpercase = 0
        var current
        for (let i = 0; i < parts.length; i++) {
            current = parts[i]
            if(current == current.toUpperCase()){
                letterUpercase++
            }
        }
        if(message == message.content.toUpperCase() || letterUpercase == process.env.CHARACTERS){
            Replay(message, 'error', 'Votre message ne doit pas contenir autant de majuscule.')
            return message.delete()
        }
    }
   
    _setMessage(Message)
    {
        this.message = Message
    }
}
module.exports = Message