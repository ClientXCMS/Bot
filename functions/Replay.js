/**
 * 
 * @param {Message} message 
 * @param {String} type (warning, error, success) 
 * @param {String} content 
 */
function Replay (message,type, content){
    var icon = "❌";
    var prefix = "Érreur";
    type.toLowerCase()
    if(type == 'warning'){
        icon = "⚠️"
        prefix = "Attention"
    }else if(type == 'success'){
        icon = "✅"
        prefix = "Succès"
    }
    icon = icon + " ";
    prefix = "**" + prefix + "** : ";
    message.channel.send(icon + prefix + content)
}
module.exports = Replay