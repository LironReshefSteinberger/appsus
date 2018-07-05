const HOUR = 1000*60*60

var emails = [
    {id: makeId(),
    subject: 'Meeting with the marketing team', 
    body: 'Hi Ran, wanted to let you know I set a meeting with our marketing team. please confirm.', 
    isRead: false, 
    sentAt: Date.now() - 3*HOUR
},
    {id: makeId(),
    subject: 'Tickets for the World cup finals', 
    body: 'New worldcup tickets are now available on sale. Hurry up before they are sold out', 
    isRead: false, 
    sentAt: Date.now() - 22*HOUR
},
    {id: makeId(),
    subject: 'New job offer', 
    body: 'Hi Ran, I have an interesting job offer for you - contact me at 054-6653322. John', 
    isRead: false, 
    sentAt: Date.now() - 48*HOUR
}
]

function query() {
    return Promise.resolve(emails)
}

function getEmailById(id) {
    let email= emails.find(email => email.id === id );
    // console.log('email from email service: ', email)
    return Promise.resolve(email)
}

export default {
    query,
    getEmailById
}


function makeId(length=5)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < length; i++)
    {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}