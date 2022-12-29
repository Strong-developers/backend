import MainCategory from "./MainCategory.model";
import SubCategory from "./SubCategory.model";
import User from "./User.model";
import ReviewComment from "./ReviewComment.model";
import ReviewPost from "./ReviewPost.model";
import Shelter from "./Shelter.model";
import UserReservation from "./UserReservation.model";
import AvailableReservation from "./AvailableReservation.model";
import FeedPost from "./FeedPost.model";
import FeedComment from "./FeedComment.model";
import FeedPostLike from "./FeedPostLike.model";

// Shelter 모델과 FeedPost 모델은 1:N 관계
Shelter.hasMany(FeedPost, {
  foreignKey: "shelterId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
FeedPost.belongsTo(Shelter, { foreignKey: "shelterId", targetKey: "id" });

// MainCategory 모델과 서브 카테고리 모델은 1:N 관계
MainCategory.hasMany(SubCategory, {
  foreignKey: "parentId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
SubCategory.belongsTo(MainCategory, {
  foreignKey: "parent_id",
  targetKey: "id",
});

// User 모델과 ReviewComment 모델은 1 : N 관계
User.hasMany(ReviewComment, {
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
ReviewComment.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User 모델과 ReviewPost 모델은 1 : N 관계
User.hasMany(ReviewPost, {
  foreignKey: "userId",
  as: "reviewPost",
  sourceKey: "id",
  onDelete: "CASCADE",
});
ReviewPost.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
  targetKey: "id",
});

// User 모델과 Shelter 모델은 1 : 1 관계
User.hasOne(Shelter, {
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
Shelter.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User 모델과 UserReservation 모델은 1 : N 관계
User.hasMany(UserReservation, {
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
UserReservation.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User 모델과 AvailableReservation 모델은 1 : N 관계
User.hasMany(AvailableReservation, {
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
AvailableReservation.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// Post 모델과 ReviewComment 모델은 1 : N 관계
ReviewPost.hasMany(ReviewComment, {
  foreignKey: "postId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
ReviewComment.belongsTo(ReviewPost, { foreignKey: "postId", targetKey: "id" });

// UserReservation 모델과 AvailableReservation 모델은 N : M 관계
UserReservation.belongsToMany(AvailableReservation, {
  through: "reservationMapping",
});
AvailableReservation.belongsToMany(UserReservation, {
  through: "reservationMapping",
});

// FeedPost 모델과 FeedComment 모델은 1 : N
FeedPost.hasMany(FeedComment, {
  foreignKey: "feedPostId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
FeedComment.belongsTo(FeedPost, { foreignKey: "feedPostId", targetKey: "id" });

// User 모델과 FeedComment 모델은 1 : N
User.hasMany(FeedComment, {
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
FeedComment.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User 모델과 FeedPostLike 모델은 1 : N
User.hasMany(FeedPostLike, {
  foreignKey: "userId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
FeedPostLike.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// FeedPost 모델과 FeedPostLike 모델은 1: N
FeedPost.hasMany(FeedPostLike, {
  foreignKey: "feedPostId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
FeedPostLike.belongsTo(FeedPost, { foreignKey: "feedPostId", targetKey: "id" });

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
  FeedComment,
  FeedPostLike,
};
