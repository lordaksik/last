 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name}`))
bot.help((ctx) => ctx.reply('Напиши /бот'))


bot.hears('/bot', async (ctx) => {
    async function request2(){

        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<5;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
    }
        //if((data.items.results[i].results[0].color==="grey")&& (data.items.results[i].results[0].color===data.items.results[i+1].results[0].color)) {
        //	 alert("раздача №"+i);}
        if(arr[0]==="red")
        { 
            ctx.reply('Ставим:  ⬛ Чёрный  ⬜ Серый')
        }
       
         console.log(arr);
    }
    function good(){
        ctx.reply('Бот запущен!')
       global.time= setInterval(request2,6000) 
       }



good()}
)
bot.launch()

