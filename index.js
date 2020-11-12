const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = 'NjUyOTIyNDA1Mzc0OTE4Njg2.XevfYA.wYQm1QXm4unLL7bHo5v03BeU4uM';

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
  bot.channels.cache.get('772530698212999209').send("Namun Bot is Online");
});

bot.on("message", (msg) => {

    if(msg.content.toLowerCase().match(/slut|orospu|göt|yarak kafalı|amına koyim|amığa|sikik|göt veren|your mom gay|ur mom gay|porn|fuck|f slur|t slur|çük|taşşak|taşak|yarrak|yarak|2 girls 1 cup| 2g1c|4r5e|5h1t|5hit|a$$|a$$hole|a_s_s|a2m|a54|a55|a55hole|acrotomophilia|aeolus|ahole|alabama hot pocket|alaskan pipeline|anal|anal impaler|anal leakage|analprobe|anilingus|anus|apeshit|ar5e|areola|areole|arian|arrse|arse|arsehole|aryan|ass|ass fuck|ass fuck|ass hole|assbag|assbandit|assbang|assbanged|assbanger|assbangs|assbite|assclown|asscock|asscracker|asses|assface|assfaces|assfuck|assfucker|ass-fucker|assfukka|assgoblin|assh0le|asshat|ass-hat|asshead|assho1e|asshole|assholes|asshopper|ass-jabber|assjacker|asslick|asslicker|assmaster|assmonkey|assmucus|assmucus|assmunch|assmuncher|assnigger|asspirate|ass-pirate|assshit|assshole|asssucker|asswad|asswhole|asswipe|asswipes|auto erotic|autoerotic|axwound|azazel|azz|b!tch|b00bs|b17ch|b1tch|babeland|baby batter|baby juice|ball gag|ball gravy|ball kicking|ball licking|ball sack|ball sucking|ballbag|balls|ballsack|bampot|bang (one's) box|bangbros|bareback|barely legal|barenaked|barf|bastard|bastardo|bastards|bastinado|batty boy|bawdy|bbw|bdsm|beaner|beaners|beardedclam|beastial|beastiality|beatch|beaver|beaver cleaver|beaver lips|beef curtain|beef curtain|beef curtains|beeyotch|bellend|bender|beotch|bescumber|bestial|bestiality|bi+ch|biatch|big black|big breasts|big knockers|big tits|bigtits|bimbo|bimbos|bint|birdlock|bitch|bitch tit|bitch tit|bitchass|bitched|bitcher|bitchers|bitches|bitchin|bitching|bitchtits|bitchy|black cock|blonde action|blonde on blonde action|bloodclaat|bloody|bloody hell|blow job|blow me|blow mud|blow your load|blowjob|blowjobs|blue waffle|blue waffle|blumpkin|blumpkin|bod|bodily|boink|boiolas|bollock|bollocks|bollok|bollox|bondage|boned|boner|boners|bong|boob|boobies|boobs|booby|booger|bookie|boong|booobs|boooobs|booooobs|booooooobs|bootee|bootie|booty|booty call|booze|boozer|boozy|bosom|bosomy|breasts|Breeder|brotherfucker|brown showers|brunette action|buceta|bugger|bukkake|bull shit|bulldyke|bullet vibe|bullshit|bullshits|bullshitted|bullturds|bum|bum boy|bumblefuck|bumclat|bummer|buncombe|bung|bung hole|bunghole|bunny fucker|bust a load|bust a load|busty|butt|butt fuck|butt fuck|butt plug|buttcheeks|buttfuck|buttfucka|buttfucker|butthole|buttmuch|buttmunch|butt-pirate|buttplug|c.0.c.k|c.o.c.k.|c.u.n.t|c0ck|c-0-c-k|c0cksucker|caca|cacafuego|cahone|camel toe|cameltoe|camgirl|camslut|camwhore|carpet muncher|carpetmuncher|cawk|cervix|chesticle|chi-chi man|chick with a dick|child-fucker|chinc|chincs|chink|chinky|choad|choade|choade|choc ice|chocolate rosebuds|chode|chodes|chota bags|chota bags|cipa|circlejerk|cl1t|cleveland steamer|climax|clit|clit licker|clit licker|clitface|clitfuck|clitoris|clitorus|clits|clitty|clitty litter|clitty litter|clover clamps|clunge|clusterfuck|cnut|cocain|cocaine|coccydynia|cock|c-o-c-k|cock pocket|cock pocket|cock snot|cock snot|cock sucker|cockass|cockbite|cockblock|cockburger|cockeye|cockface|cockfucker|cockhead|cockholster|cockjockey|cockknocker|cockknoker|Cocklump|cockmaster|cockmongler|cockmongruel|cockmonkey|cockmunch|cockmuncher|cocknose|cocknugget|cocks|cockshit|cocksmith|cocksmoke|cocksmoker|cocksniffer|cocksuck|cocksuck|cocksucked|cocksucked|cocksucker|cock-sucker|cocksuckers|cocksucking|cocksucks|cocksucks|cocksuka|cocksukka|cockwaffle|coffin dodger|coital|cok|cokmuncher|coksucka|commie|condom|coochie|coochy|coon|coonnass|coons|cooter|cop some wood|cop some wood|coprolagnia|coprophilia|corksucker|cornhole|cornhole|corp whore|corp whore|corpulent|cox|crabs|crack|cracker|crackwhore|crap|crappy|creampie|cretin|crikey|cripple|crotte|cum|cum chugger|cum chugger|cum dumpster|cum dumpster|cum freak|cum freak|cum guzzler|cum guzzler|cumbubble|cumdump|cumdump|cumdumpster|cumguzzler|cumjockey|cummer|cummin|cumming|cums|cumshot|cumshots|cumslut|cumstain|cumtart|cunilingus|cunillingus|cunnie|cunnilingus|cunny|cunt|c-u-n-t|cunt hair|cunt hair|cuntass|cuntbag|cuntbag|cuntface|cunthole|cunthunter|cuntlick|cuntlick|cuntlicker|cuntlicker|cuntlicking|cuntlicking|cuntrag|cunts|cuntsicle|cuntsicle|cuntslut|cunt-struck|cunt-struck|cus|cut rope|cut rope|cyalis|cyberfuc|cyberfuck|cyberfuck|cyberfucked|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|cyberfucking|d0ng|d0uch3|d0uche|d1ck|d1ld0|d1ldo|dago|dagos|dammit|damn|damned|damnit|darkie|darn|date rape|daterape|dawgie-style|deep throat|deepthroat|deggo|dendrophilia|dick|dick head|dick hole|dick hole|dick shy|dick shy|dickbag|dickbeaters|dickdipper|dickface|dickflipper|dickfuck|dickfucker|dickhead|dickheads|dickhole|dickish|dick-ish|dickjuice|dickmilk|dickmonger|dickripper|dicks|dicksipper|mother fucker|fucker/)){
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
        msg.member.roles.add("775456334950563870");
      }    
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
            let roles = ["IOC","UNEP","UNICEF","NATO","RUSREV","UNCSTD"]
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