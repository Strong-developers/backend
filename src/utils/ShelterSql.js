// Shelter 임시 데이터 생성하는 모듈입니다~

// import xlsx from "xlsx";
// import { Shelter } from "../models";

// function setXlsx() {
//   console.log('C:\\Users\\HyunSeong\\Desktop\\개발\\존강개 프로젝트\\유기견\\backend\\data\\ShelterData.xlsx');
//   const file = xlsx.readFile('C:\\Users\\HyunSeong\\Desktop\\개발\\존강개 프로젝트\\유기견\\backend\\data\\ShelterData.xlsx');
//   const sheetName = file.SheetNames[16];
//   const sheet = file.Sheets[sheetName];

//   const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });
  
//   createShelterData(jsonData);
// }

// async function createShelterData(data) {
//   for (let i = 0; i < data.length; i++) {
//     await Shelter.create({
//       name: data[i].name,
//       region: data[i].region,
//       phoneNumber: data[i].phoneNumber,
//       description: data[i].description,
//       caution: data[i].caution,
//       userId: data[i].userId,
//     });
//   }
// }

// export default setXlsx();
