import MainCategory from "./MainCategory.model";
import SubCategory from "./SubCategory.model";
import Comment from "./Comment.model";
import Review from './Review';

/**
 * 메인 카테고리 모델과 서브 카테고리 모델은 1:N 관계
 */
MainCategory.hasMany(SubCategory, { foreignKey: "parent_id", sourceKey: "id" });
SubCategory.belongsTo(MainCategory, {
  foreignKey: "parent_id",
  targetKey: "id",
});

/**
 * User 모델과 Comment 모델은 1 : N 관계
 */
//User.hasMany(Comment, { foreignKey: "owner_id", sourceKey: "id" });
//Comment.belongsTo(User, { foreignKey: "owner_id", targetKey: "id" });

/**
 * Post 모델과 Comment 모델은 1 : N 관계
 */
//Post.hasMany(Comment, { foreignKey: "post_id", sourceKey: "id" });
//Comment.belongsTo(Post, { foreignKey: "post_id", targetKey: "id" });

/**
 * User 모델과 Review 모델은 1 : N 관계
 * 
 * User.hasMany(Review, { foreignKey: "owner_id", sourceKey: "id"});
 * Review.belongsTo(User, { foreignKey: "owner_id", targetKey: "id"});
 */

export { MainCategory, SubCategory, Comment, Review };
