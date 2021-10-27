 require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)}) 
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
    async function request2(){

        const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/7/1/")
        const data = await response.json()
       let arr=[];
        for(let i=0; i<5;i++){
     
        colors =data.items.results[i].results[0].color
       arr.push(colors);
    }

    if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="black")||
    ((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="red") ))
    { 
       ctx.reply( "Ставим:  ⬛ Чёрный  ⬜ Серый");
       console.log("Ставим:  ⬛ Чёрный  ⬜ Серый");
    }
    if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="red"  )
    ||((arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="black")))
    {
       ctx.reply( "Ставим: 🟥 Красный ⬜ Серый");
       console.log("Ставим: 🟥 Красный ⬜ Серый");
    }
if((arr[0]==="black" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="black"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="black" )||
((arr[0]==="white") && arr[1]==="black"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="black" && (arr[4]==="white" ||arr[4]==="grey")))
    {

       ctx.reply( "Ставим:  ⬛ Чёрный 🟥 Красный");
       console.log("Ставим:  ⬛ Чёрный 🟥 Красный");
    }
    
if((arr[0]==="red" && (arr[1]==="white" ||arr[1]==="grey") && arr[2]==="red"  && (arr[3]==="white" ||arr[3]==="grey")&& arr[4]==="red" )||
( (arr[0]==="white") && arr[1]==="red"  && (arr[2]==="white" ||arr[2]==="grey")&& arr[3]==="red" && (arr[4]==="white" ||arr[4]==="grey") ))
    {
       ctx.reply("Ставим: 🟥 Красный ⬛ Чёрный");
       console.log("Ставим: 🟥 Красный ⬛ Чёрный");
    }
   
    if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="black") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="black")&& arr[4]==="grey" )||
    ((arr[0]==="white") && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="black")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="black") ))
    {   
       ctx.reply("Ставим: ⬜ Серый 🟥 Красный ");
       console.log("Ставим: ⬜ Серый 🟥 Красный");
    }
        if((arr[0]==="grey" && (arr[1]==="white" ||arr[1]==="red") && arr[2]==="grey"  && (arr[3]==="white" ||arr[3]==="red")&& arr[4]==="grey" )||
        ( (arr[0]==="white" ) && arr[1]==="grey"  && (arr[2]==="white" ||arr[2]==="red")&& arr[3]==="grey" &&(arr[4]==="white" ||arr[4]==="red")))
    {    
       ctx.reply("Ставим:  ⬜Серый ⬛ Чёрный");
       console.log("Ставим:  ⬜Серый ⬛ Чёрный");
    }
      
    }
    function good(){
        ctx.reply('Бот запущен!')
       global.time= setInterval(request2,30000) 
       }



good()}
)
bot.hears('/end', async (ctx) => {
    clearInterval(time);
    ctx.reply("Пока");  
})
bot.launch()

