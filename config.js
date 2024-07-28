const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94717775628" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94717775628";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_08_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICA2LFxuICAgICAgICAxMyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyZER2clNuZWxRY0l1cWNEcU9semg5QWhWUzY0Y2lvbzc3UEJyQkNJczBRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg5Nzg4NTA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQjg3RTIzNzFGNDE0NTAwMEQ2QTNDRDAyRUY3Q0VEQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIxNTc2ODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4OTc4ODUwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkQwNDREOTZCREFBMzkwQkVBNTMyMUEzMkNCNzA4ODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTU3Njg1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm1VMmJ3cDZIU1p1Z1RCM0N0X0liQ1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjgyOGU4MDEtMjE1Ni00MjhlLThjNWMtNzFiYjlmZTQ0MGNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDIxNyxcbiAgICAgIDE4MixcbiAgICAgIDI3LFxuICAgICAgMTMzLFxuICAgICAgMTk4LFxuICAgICAgMTUsXG4gICAgICA3NixcbiAgICAgIDIzNyxcbiAgICAgIDE0OCxcbiAgICAgIDE1MSxcbiAgICAgIDU2LFxuICAgICAgMTI2LFxuICAgICAgMTI0LFxuICAgICAgNzksXG4gICAgICAxMDUsXG4gICAgICAzNCxcbiAgICAgIDYsXG4gICAgICAxODksXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMjAsXG4gICAgICAyNDYsXG4gICAgICAxMCxcbiAgICAgIDIzNCxcbiAgICAgIDc3LFxuICAgICAgMTc2LFxuICAgICAgMjEyLFxuICAgICAgNDgsXG4gICAgICAyNDksXG4gICAgICA0MSxcbiAgICAgIDYwLFxuICAgICAgMTA1LFxuICAgICAgMjAsXG4gICAgICAxMzgsXG4gICAgICAxMTMsXG4gICAgICAxMTIsXG4gICAgICAxMTksXG4gICAgICAyNSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNWExEREwzSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3ODk3ODg1MDc6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNzAxODE2OTkzODAwNToxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJRdWVlbiBFbGlzYVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x6L3ZjTUVFTytVbUxVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidUtXSXJNTHdHZG42VlNDWVlPRk0wOVE3WHlVYk5FUlRMdjNyRk5SQXN4TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuLzVCY2hSeDV6YVNXc1FESmJ2TFhscW1oUzRzb1hCR2ovY1A4YjlWbGVJUWR0cVk1QXJnOW5HUksza2daOU1NSUpITnZPNmtCYWNlc0NnbWc0WkdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoK0gvMlhWL2piS3krOFM3akZiMmhCZ09RUHFBaGRiU2U3ZFJKTVF3SVlUYjVzMFFrd0lNYUdjZkRza20vODB6a3I4c3UvZ01GOEViT1ROUXVZZFhCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTc4ODUwNzoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTU3NjgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjJNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKMk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpVklBMmYwcCtSZWJSaVptWDFvaS8vYlp6QXRabTNaUmprVkp1N0ZvbGtFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMTUyNjY3NDgsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsNV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTU3Njg5NTY4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "RASHMIKA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
