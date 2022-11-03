import { MainCategory, SubCategory } from "../models";
import ApiError from "../utils/ApiError";

export default {
  /**
   * 메인 카테고리 불러오기
   * 
   * @returns 
   */
  async selectMainCategoryList() {
    const mainCategory = await MainCategory.findAll({
      attributes: ["id", "name", "path"],
      raw: true,
    });

    await Promise.all(
      mainCategory.map(async (el) => {
        const subCategory = await SubCategory.findAll({
          attributes: ["id", "parent_id", "name", "path"],
          where: {
            parent_id: el.id,
          },
        });
        el.children = subCategory;
        return el;
      })
    );

    return mainCategory;
  },
};
