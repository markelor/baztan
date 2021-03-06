 if (Meteor.isServer) {
     Meteor.startup(function() {
             if (Chats.find().count() === 0) {
                 Messages.remove({});
                 var messages = [{
                     text: 'Caminando entre codigos',
                     timestamp: moment().subtract(1, 'hours').toDate()
                 }, {
                     text: 'Hola, soy yo',
                     timestamp: moment().subtract(2, 'hours').toDate()
                 }, {
                     text: 'Eon ai lo ta jangoek me',
                     timestamp: moment().subtract(1, 'days').toDate()

                 }, {
                     text: 'Atxur amutzakin joko haut',
                     timestamp: moment().subtract(4, 'days').toDate()
                 }, {
                     text: 'Azkar ta ondo usuak hegan',
                     timestamp: moment().subtract(2, 'weeks').toDate()
                 }];

                 messages.forEach(function(m) {
                     Messages.insert(m);
                 });

                 //messages.forEach(m => Messages.insert(m));

                 var chats = [{
                     name: 'Ben Sparrow',
                     picture: 'css/img/ben.png',
                 }, {
                     name: 'Max Lynx',
                     picture: 'css/img/max.png',
                 }, {
                     name: 'Adam Bradleyson',
                     picture: 'css/img/adam.jpg',
                 }, {
                     name: 'Perry Governor',
                     picture: 'css/img/perry.png',
                 }, {
                     name: 'Mike Harrington',
                     picture: 'css/img/mike.png',
                 }];
                 /* chats.forEach(chat=> {
                  message = Messages.findOne({
                     chatId: {
                         $exists: false
                     }
                 });
    */

                 chats.forEach(function(chat) {
                     message = Messages.findOne({
                         chatId: {
                             $exists: false
                         }
                     });
                     chat.lastMessage = message;
                     chatId = Chats.insert(chat);
                     Messages.update(message._id, {
                         $set: {
                             chatId: chatId
                         }
                     });
                 });
             }

             //////////////////////////////////////////


             if (Festak.find().count() === 0) {
                 Festak.remove({});
                 var festak = [{
                     armarria: 'css/img/armarria/deba.png',
                     data: moment().subtract(3, 'days').toDate(),
                     herria: 'Itziar',
                     jaiIzena: 'Kopraixak',
                     kartela:'css/img/kartelak/irurita.jpg'
                 }, {
                     armarria: 'css/img/armarria/irurita.jpg',
                     data: moment().subtract(2, 'weeks').toDate(),
                     herria: 'Irurita',
                     jaiIzena: 'Iruritako bestak',
                     kartela:'css/img/kartelak/irurita.jpg'
                 }];

                 festak.forEach(function(festa) {
                     Festak.insert(festa);
                 });

             }
         }

     );

 }
