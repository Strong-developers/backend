import { MainCategory, SubCategory } from "../models";
import { Op, where } from "sequelize";

export default {
  async findMainCategoryList() {
    const mainCategory = await MainCategory.findAll();

    return mainCategory;
  },

  async findSubCategoryList(id) {
    const subCategory = await SubCategory.findAll({
      where: {
        parent_id: id,
      },
    });

    return subCategory;
  },
};
