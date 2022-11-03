import { categoryService } from "../services";

export default {
  async getMainCategory(req, res, next) {
    try {
      const mainCategory = await categoryService.selectMainCategoryList();

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
};
