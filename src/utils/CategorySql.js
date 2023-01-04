// 메인 - 서브 카테고리 데이터 Insert
// 임시 파일, 나중에 삭제할 것
import { User } from "../models";
// import { MainCategory, SubCategory } from "../models";

// export default (() => {
//   MainCategory.create({ name: "보호소둘러보기", path: "/shelter" });
//   MainCategory.create({ name: "봉사예약하기", path: "/reservation" });
//   MainCategory.create({ name: "후기게시판", path: "/review" });
//   MainCategory.create({ name: "마이페이지", path: "/mypage" });
//   MainCategory.create({ name: "로그인", path: "/login" });
//   MainCategory.create({ name: "로그아웃", path: "/logout" });
//   MainCategory.create({ name: "회원가입", path: "/join" });

//   SubCategory.create({parent_id: 1, name: "서울", path: '/seoul'});
//   SubCategory.create({parent_id: 1, name: "인천", path: '/incheon'});
//   SubCategory.create({parent_id: 1, name: "경기", path: '/gyeonggi'});
//   SubCategory.create({parent_id: 1, name: "강원", path: '/gangwon'});
//   SubCategory.create({parent_id: 1, name: "충북", path: '/chungbuk'});
//   SubCategory.create({parent_id: 1, name: "충남", path: '/chungnam'});
//   SubCategory.create({parent_id: 1, name: "대전", path: '/daejeon'});
//   SubCategory.create({parent_id: 1, name: "세종", path: '/sejong'});
//   SubCategory.create({parent_id: 1, name: "전북", path: '/jeonbuk'});
//   SubCategory.create({parent_id: 1, name: "전남", path: '/jeonnam'});
//   SubCategory.create({parent_id: 1, name: "광주", path: '/gwangju'});
//   SubCategory.create({parent_id: 1, name: "경북", path: '/gyeongbuk'});
//   SubCategory.create({parent_id: 1, name: "대구", path: '/daegu'});
//   SubCategory.create({parent_id: 1, name: "울산", path: '/ulsan'});
//   SubCategory.create({parent_id: 1, name: "경남", path: '/gyeongnam'});
//   SubCategory.create({parent_id: 1, name: "부산", path: '/busan'});
//   SubCategory.create({parent_id: 1, name: "제주", path: '/jeju'});

//   SubCategory.create({parent_id: 4, name: "봉사예약내역", path: '/reservation'});
//   SubCategory.create({parent_id: 4, name: "찜한보호소", path: '/dibs'});
//   SubCategory.create({parent_id: 4, name: "채팅내역", path: '/chatlog'});
//   SubCategory.create({parent_id: 4, name: "개인정보수정", path: '/modification'});
//   SubCategory.create({parent_id: 4, name: "회원탈퇴", path: '/drop'});

// })();

// export default (() => {
//   for (let i = 1; i <= 646; i++) {
//     User.create({
//       email: `shelter${i}@gmail.com`,
//       password: `shelter${i}a1s2d3`,
//       nickname: `shelter${i}`,
//       role: 2,
//       profileUrl: `https://img.hani.co.kr/imgdb/resize/2018/0924/00500279_20180924.JPG`,
//     });
//   }
// })();
