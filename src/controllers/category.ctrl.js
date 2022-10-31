import { categoryService } from "../services";

export default {
  async getMainCategory(req, res, next) {
    try {
      const mainCategory = await categoryService.findMainCategoryList();

      res.status(200).json({
        success: true,
        status: 200,
        message: "메인 카테고리 불러오기 성공",
        result: mainCategory,
      });
    } catch (err) {
      next(err);
    }
  },

  async getSubCategory(req, res, next) {
    const mainCategoryId = req.params.id;

    try {
      const subCategory = await categoryService.findSubCategoryList(
        mainCategoryId
      );

      res.status(200).json({
        success: true,
        status: 200,
        message: "서브 카테고리 불러오기 성공",
        result: subCategory,
      });
    } catch (err) {
      next(err);
    }
  },
};
