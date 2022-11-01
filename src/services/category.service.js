import { MainCategory, SubCategory } from "../models";
import ApiError from "../utils/ApiError";

export default {
  async findMainCategoryList() {
    const mainCategory = await MainCategory.findAll({
      attributes: ["id", "name", "path"],
    });

    return mainCategory;
  },

  async findSubCategoryList(id) {
    const subCategory = await SubCategory.findAll({
      attributes: ["id", "parent_id", "name", "path"],
      where: {
        parent_id: id,
      },
    });

    if (!subCategory.length) {
      throw ApiError.setBadRequest(
        "ID에 해당하는 서브 카테고리가 존재하지 않습니다."
      );
    }

    return subCategory;
  },
};
