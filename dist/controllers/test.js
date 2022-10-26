"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("../models/test"));
exports.default = {
    /**
     * 테스트 용
     */
    test(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield test_1.default.create({ name: "gg", age: 33 });
            const result = {
                success: true,
                status: 200,
                message: "테스트 성공",
                result: {
                    a
                }
            };
            res.status(200).json(result);
        });
    },
};
