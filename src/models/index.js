import MainCategory from "./MainCategory.model";
import SubCategory from "./SubCategory.model";

/**
 * 메인 카테고리 모델과 서브 카테고리 모델은 1:N 관계
 */
MainCategory.hasMany(SubCategory, { foreignKey: "parent_id", sourceKey: "id" });
SubCategory.belongsTo(MainCategory, {
  foreignKey: "parent_id",
  targetKey: "id",
});



export { MainCategory, SubCategory };
