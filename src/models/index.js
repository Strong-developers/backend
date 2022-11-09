import MainCategory from "./MainCategory.model";
import SubCategory from "./SubCategory.model";
import User from "./User.model";
import ReviewComment from "./ReviewComment.model";
import ReviewPost from "./ReviewPost.model";
import Shelter from "./Shelter.model";
import UserReservation from "./UserReservation.model";
import AvailableReservation from "./AvailableReservation.model";
import FeedPost from "./FeedPost.model";

/**
 * 보호소계정 모델과 피드게시물 모델은 1:N 관계
 */
Shelter.hasMany(FeedPost, { foreignKey: "shelterId", sourceKey: "id" });
FeedPost.belongsTo(Shelter, { foreignKey: "shelterKey", targetKey: "id" });

/**
 * 메인 카테고리 모델과 서브 카테고리 모델은 1:N 관계
 */
MainCategory.hasMany(SubCategory, { foreignKey: "parent_id", sourceKey: "id" });
SubCategory.belongsTo(MainCategory, {
  foreignKey: "parent_id",
  targetKey: "id",
});

/**
 * User 모델과 ReviewComment 모델은 1 : N 관계
 */
User.hasMany(ReviewComment, { foreignKey: "owner_id", sourceKey: "id" });
ReviewComment.belongsTo(User, { foreignKey: "owner_id", targetKey: "id" });

/**
 * User 모델과 ReviewPost 모델은 1 : N 관계
 */
User.hasMany(ReviewPost, { foreignKey: "owner_id", sourceKey: "id" });
ReviewPost.belongsTo(User, { foreignKey: "owner_id", targetKey: "id" });

/**
 * User 모델과 Shelter 모델은 1 : 1 관계
 */
User.hasOne(Shelter);
Shelter.belongsTo(User);

/**
 * User 모델과 UserReservation 모델은 1 : N 관계
 */
User.hasMany(UserReservation, { foreignKey: "user_id", sourceKey: "id" });
UserReservation.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });

/**
 * User 모델과 AvailableReservation 모델은 1 : N 관계
 */
User.hasMany(AvailableReservation, { foreignKey: "user_id", sourceKey: "id" });
AvailableReservation.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

/**
 * Post 모델과 ReviewComment 모델은 1 : N 관계
 */
ReviewPost.hasMany(ReviewComment, { foreignKey: "post_id", sourceKey: "id" });
ReviewComment.belongsTo(ReviewPost, { foreignKey: "post_id", targetKey: "id" });

/**
 * UserReservation 모델과 AvailableReservation 모델은 N : M 관계
 */
UserReservation.belongsToMany(AvailableReservation, {
  through: "ReservationMapping",
});
AvailableReservation.belongsToMany(UserReservation, {
  through: "ReservationMapping",
});

export {
  MainCategory,
  SubCategory,
  ReviewComment,
  ReviewPost,
  User,
  Shelter,
  UserReservation,
  AvailableReservation,
  FeedPost,
};
