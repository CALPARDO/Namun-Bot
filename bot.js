const Discord = require("discord.js");

const bot = new Discord.Client();

const TOKEN = 'Nzg2OTEyMTg4NzUzMjQ4MzE3.X9NTFQ.QQay0lrThZcv726yBE1my_nOZzg';

const dict = {
  "c o o l": ["🆒"],
  "f r e e": ["🆓"],
  "s o o n": ["🔜"],
  "s o s": ["🆘"],
  "a t m": ["🏧"],
  "n e w": ["🆕"],
  "a b c": ["🔤"],
  "t o p": ["🔝"],
  "o n": ["🔛"],
  "i d": ["🆔"],
  "v s": ["🆚"],
  "a b": ["🆎"],
  "c l": ["🆑"],
  "w c": ["🚾"],
  "n g": ["🆖"],
  "o k": ["🆗"],
  "u p": ["🆙"],
  "t m": ["™️"],
  0: ["0⃣"],
  1: ["1⃣"],
  2: ["2⃣"],
  3: ["3⃣"],
  4: ["4⃣"],
  5: ["5⃣"],
  6: ["6⃣"],
  7: ["7⃣"],
  8: ["8⃣"],
  9: ["9⃣"],
  "1 0": ["🔟"],
  "*": ["*⃣"],
  "+": ["➕"],
  "-": ["➖"],
  "#": ["#️⃣"],
  "! !": ["‼️"],
  "! ?": ["⁉️"],
  "!": ["❗", "❕"],
  "?": ["❓", "❔"],
  a: ["🇦", "🅰️","🔼"],
  b: ["🇧", "🅱️"],
  c: ["🇨", "©️"],
  d: ["🇩"],
  e: ["🇪", "📧"],
  f: ["🇫"],
  g: ["🇬"],
  h: ["🇭"],
  i: ["🇮", "ℹ️", "🕧", "🕕"],
  j: ["🇯"],
  k: ["🇰"],
  l: ["🇱","🕒"],
  m: ["🇲", "〽️", "Ⓜ️"],
  n: ["🇳"],
  o: ["🇴", "🅾️", "⭕"],
  p: ["🇵", "🅿️"],
  q: ["🇶"],
  r: ["🇷", "®️"],
  s: ["🇸"],
  t: ["🇹","✝️"],
  u: ["🇺"],
  v: ["🇻"],
  w: ["🇼", "〰️"],
  x: ["🇽", "❌", "❎", "✖️"],
  y: ["🇾"],
  z: ["🇿", "💤"],
};
const jp = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/

const gossipsuccess = {

    

  "title": "Gossip Box",

  "color": 2263842,

  "fields": [

    {

      "name": "**Success** ✅",

      "value": "Your gossip has submitted successfully and anonymously"

    },

  ],

  timestamp: new Date(),



}



const help = {

  "title": "Commands",

  "description": "Use these commands to use Namun Bot:",

  "color": 4099005,

  "fields": [

    {

      "name": "`!help`",

      "value": "to get commands"

    },

    {

      "name": "`!contact`",

      "value": "to get short contact infos"

    },

    {

      "name": "`!contactmore`",

      "value": "to get whole contact infos of heads"

    },

    {

      "name": "`!join`",

      "value": "to define your committee to access your committee's content\n *Usage:* `!join`+`committee name`\n *Example:* `!join rusrev`"

    },

    {

      "name": "`!gossip`",

      "value": "to submit a text to gossip box\n *Usage:* `!gossip`+`text`\n *Example:* `!gossip IOC committee is boring`\n *Note:* Ensure that <@652922405374918686> is online and the gossip messages are deleted instantly from the public chat."

    },
	  
     {

      "name": "`!react`",

      "value": "to send something made out of reactions. Just try ok? :D\n *Usage:* `!react`+`text`\n *Example:* `!react bruh`\n *This Feature is by <@473180728310366218>*"

    },
    {

      "name": "`!vote`",

      "value": "to start voting"

    },

    {

      "name": "`!ping`",

      "value": "Check if the Namun Bot is online"

    },

  ],

  timestamp: new Date(),



}

const contact = {

    

  "title": "Contact Info",

  "description": "WhatsApp Live Help:",

  "color": 4099005,

  "fields": [

    {

      "name": "**WhatsApp Live**",

      "value": "0(530) 830 13 64\n"

    },

    {

      "name": "**For more contact info use:**",

      "value": "`!contactmore`"

    }

  ],

  timestamp: new Date(),



}



const contacts = {

    

      "title": "Contact Info",

      "description": "Phone numbers and e-mail's of the team:",

      "color": 4099005,

      "fields": [

        {

          "name": "**WhatsApp Live**",

          "value": "0(530) 830 13 64\n"

        },

        {

          "name": "**IT**",

          "value": "Derin Durak:\n  *0(532) 505 91 65*\n  *durakderin@gmail.com*\n"

        },

        {

          "name": "**Academic Assistants**",

          "value": "Arda Gürcan:\n  *0(539) 409 09 39*\n  *ardagurcan2004@gmail.com*\n"

        },

        {

          "name": "**Business**",

          "value": "Ekin Yücel:\n  *0(532) 456 98 58*\n  *ekinycl0@gmail.com*\n"

        },

        {

          "name": "**Crisis**",

          "value": "Ilayda Altay:\n  *0(546) 955 27 12*\n  *ilaydaaltay04@gmail.com*\n"

        },

        {

          "name": "**PR**",

          "value": "Sıla Göçer:\n  *0(538) 823 05 64*\n  *silagocer.8@gmail.com*\n"

        },

        {

          "name": "**Press**",

          "value": "Defne Nalbantoğlu:\n  *0(532) 730 74 84*\n  *nalbantoglu.defne@gmail.com*\n Irmak Beşer:\n  *0(542) 655 80 15*\n  *irmakbeser@gmail.com*\n"

        },

        {

          "name": "**Director General**",

          "value": "Beril Kılıç:\n  *0(530) 478 50 40*\n  *brlklc04@gmail.com*\n"

        },

        {

          "name": "**Secretary General**",

          "value": "Nil Hamavioğlu:\n  *0(535) 418 62 51*\n  *nhamavioglu@gmail.com*\n"

        },

        {

          "name": "**Deputy Secretary General**",

          "value": "Işıl Aslan:\n  *0(538) 316 45 52*\n  *aslanisilnehir@gmail.com*\n"

        },

        {

          "name": "**Deputy Director General**",

          "value": "Işıl Aslan:\n  *0(546) 258 59 63*\n  *emirormanoglu@gmail.com*"

        },

        

      ],

      timestamp: new Date(),

    

  }



bot.login(TOKEN);



bot.once("ready", () => {

  console.log('Namun is online!');

  bot.user.setActivity('Gossips', { type: 'LISTENING' });

  //bot.channels.cache.get('772530698212999209').send("Namun Bot is Online");

});



bot.on("message", async (msg) => {



    if(msg.content.toLowerCase().match(/ensest|amua gorum|yarrak|yarak|slut|orospu|göt|yarak kafalı|amına koyim|amığa|sikik|göt veren|your mom gay|ur mom gay|porn|fuck|bitch|cunt|d1ck|pussy|asshole|b1tch|b!tch|blowjob|cock|c0ck/)){

      msg.delete()

      if(msg.member.roles.cache.has("775456334950563870")){

        msg.reply("You got your second warning because of your message's content. After 2 warnings you'll be banned from the server")

        msg.member.roles.remove("775456334950563870");

        msg.member.roles.add("776176016477126677");

      }



      else if(msg.member.roles.cache.has("776176016477126677")){

        msg.reply("You got your third warning because of your message's content. After 1 warning you'll be banned from the server")

        msg.member.roles.remove("776176016477126677");

        msg.member.roles.add("776176188561293325");

      }



      else if(msg.member.roles.cache.has("776176188561293325")){

        msg.member.ban().catch(console.error)

      }  



      else{

        msg.reply("You got your first warning because of your message's content. After 3 warning you'll be banned from the server")

        msg.member.roles.add("775456334950563870")

      }    

    }
	
    else if(msg.channel.id == "787373019538260009"){
	    msg.react('787372644847714305')
	    msg.react('787372671548915722')
	  }


    else if(msg.content.startsWith("!")){

	

        content = msg.content.toLowerCase().split(" ")

        command = content[0].slice(1)

        if(command == "help")

        {

            msg.channel.send({embed: help})

        }

        else if(command == "q"){

          msg.delete()

          msg.channel.send("How can I help you?")

        }

        else if(command == "committees")

        {

            msg.channel.send("Committees:\nUnited Nations Environment Program\nInternational Olympic Committee\nRussian Revolution\nUnited Nations Commission on Science and Technology for Development\nUnited Nations Children's Fund\nNorth Atlantic Treaty Organization")

        }



        else if(command == "join")

        {

            msg.react('👌');

            let roles = ["IOC","UNEP","UNICEF","NATO","RUSREV","UNCSTD","ADMIN","DJ"]

            let r = content[1].toUpperCase()

            let commonRole = null;



            for (let i = 0; i < roles.length; i++) {

                if(msg.member.roles.cache.find(r => r.name === roles[i]))

                {

                    commonRole = roles[i];

                    break

                }

            }



            if(roles.indexOf(r) > -1)

            {

                if(commonRole != null)

                {

                    msg.reply("you are already in " + commonRole + ". If you joined the wrong committe please contact IT.")

                }

                else

                {

                    var role = msg.guild.roles.cache.find(role => role.name === r);

                    msg.member.roles.add(role);

                    msg.reply("you joined "+ r + ".")

                }

                

            }

            else

            {

                msg.reply("A committee role with the name " + r + " doesn't exist.")

            }

        }

        else if(command == "contactmore")

        {

            msg.react('👌');

            msg.channel.send({embed: contacts})

        }

        

        else if(command == "contact")

        {

            msg.react('👌');

            msg.channel.send({embed: contact})

        }


        else if(command == "help")

        {

            msg.react('👌');

            msg.channel.send({embed: help})

        }



        //Gossip Boxes

        else if(command == "gossip")

        {   //IOC

            let gossip = msg.content.slice(7);

            var gossipper = msg.author.username;

            if (msg.channel == '753904871744339979'){

              msg.delete();

              bot.channels.cache.get("755379800499027989").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from IOC:" + gossip);

            }

            //NATO

            else if (msg.channel == '753904938408738836'){

              msg.delete();

              bot.channels.cache.get("755379858997248012").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from NATO:" + gossip);

            }

            

            //RUSREV

            else if (msg.channel == '753905260292210742'){

              msg.delete();

              bot.channels.cache.get("755379900256616570").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from RUSREV:" + gossip);

            }



            //UNEP

            else if (msg.channel == '753904250420985896'){

              msg.delete();

              bot.channels.cache.get("755380099150512178").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from UNEP:" + gossip);

            }

            

            //UNCSTD

            else if (msg.channel == '753904604642672660'){

              msg.delete();

              bot.channels.cache.get("755380155383283782").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from UNCSTD:" + gossip);

            }

            

            //UNICEF

            else if (msg.channel == '753904378376749126'){

              msg.delete();

              bot.channels.cache.get("755380188149448794").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from UNICEF:" + gossip);

            } 

            

            else {

              msg.delete();

              bot.channels.cache.get("772442829586169886").send(gossip);

              msg.author.send({ embed:gossipsuccess });

              console.log(gossipper + " gossiped from ELSEWHERE:" + gossip);

            }



        }

        

        else if(command == "say")

        {

          if(msg.member.roles.cache.has('753883202946596895'))

          {

            saycontent = msg.content.slice(4)

            msg.delete();

            msg.channel.send(saycontent);

          }



          else

          { 

            msg.delete()

            msg.reply('You must have "Moderator" role to use `!say` command')

            .then(msg => {

              msg.delete({ timeout: 5000 })

            })

          }

        }

        

        else if(command == "offline")

        {

          if(msg.member.roles.cache.has('753883202946596895'))

          {

            msg.delete();

            bot.channels.cache.get('772530698212999209').send("Namun Bot is Offline");

          }



          else

          { 

            msg.delete()

            msg.reply('You must have "Moderator" role to use `!offline` command')

            .then(msg => {

              msg.delete({ timeout: 5000 })

            })

          }

        } 
	    
	else if(command == "vote"){
	    msg.delete()
	    msg.react('787372644847714305')
	    msg.react('787372671548915722')
	  }

	else if (command == "react") {

            let lm;
            await msg.channel.messages.fetch({ limit: 2 }).then((res) => {
                lm = res.array()[1];
            });
            let reaction = msg.content
                .slice(7)
                .replace(" ", "")
                .toLowerCase()
                .split("")
                .join(" ");
            msg.delete();
            
            for (const [key, value] of Object.entries(dict)) {
                if (reaction.indexOf(key) > -1) {
                    for (let i = 0; i < value.length; i++) {
                        if (reaction.indexOf(value[i]) < 0) {
                            reaction = reaction.replace(key, value[i]);
                        } else if (i == value.length - 1) {
                            reaction = reaction.replace(key, "");
                        }
                    }
                }
            }
            reaction = reaction.split(" ");
    
            for (let i = 0; i < reaction.length; i++) {
                if (reaction[i] != "") {
                    try {
                        await lm.react(reaction[i]);
                    } catch (err) {}
                }
            }
      }

        else if(command == "online")

        {

          if(msg.member.roles.cache.has('753883202946596895'))

          {

            msg.delete();

            bot.channels.cache.get('772530698212999209').send("Namun Bot is Online");

          }



          else

          { 

            msg.delete()

            msg.reply('You must have "Moderator" role to use `!online` command')

            .then(msg => {

              msg.delete({ timeout: 5000 })

            })

          }

        } 

        

        else if(command == "ping"){

          msg.delete()

          msg.reply("I'm online bro")

          .then(msg => {

            msg.delete({ timeout: 5000 })

          })          

        }


        /*else if(command == "typo"){
          msg.delete()
          let typomsg = msg.content.slice(5);
          bot.channels.cache.get("777650174159487026").send("!namunbot " + msg.author.username + typomsg);
        }

        else if(command == "namunbot"){
          msg.react('👍').then(() => msg.react('👎'));
          setTimeout(function(){
            const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
          };
          
          msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
              const reaction = collected.first();
          
              if (reaction.emoji.name === '👍') {
                msg.reply('you reacted with a thumbs up.');
              } else {
                msg.reply('you reacted with a thumbs down.');
              }
            })
            .catch(collected => {
              msg.reply('you reacted with neither a thumbs up, nor a thumbs down.');
            });
        }, 2000);
          
          
        }*/

        else

        {

          msg.delete()

          msg.reply('Invalid command')

          .then(msg => {

            msg.delete({ timeout: 5000 })

          })

        }

      

      }

        

});
