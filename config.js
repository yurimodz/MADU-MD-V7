//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : MANU-MD
//  * @author : Manul Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : Manu-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by Manul Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: manulofficial7.
//   * Credit To Manul Official
//   * © 2024 MANU-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "Put your alive messege",
MENU_IMG : process.env.MENU_IMG || "https://telegra.ph/file/ef48cc8d2d26081f7d46a.jpg",
MODE : process.env.MODE || "public",    
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
MENU: process.env.MENU || "true",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "true",
AUTO_TYPING : process.env.AUTO_TYPING || "true",
AUTO_RECORDING : process.env.AUTO_RECORDING || "true",
DELCHAT : process.env.DELCHAT || "pm",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
