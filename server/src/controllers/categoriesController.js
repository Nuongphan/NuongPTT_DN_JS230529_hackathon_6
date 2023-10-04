const connection = require("../config/dbConfig");
const AppError = require("../middlewares/appError");
let categories = [];
function getAllData() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM categories", function (err, data, fields) {
      if (err) {
        reject(err);
      } else {
        categories = data;
        resolve();
      }
    });
  });
}
// lấy về 1 catagory
exports.getCategory = async (req, res, next) => {
    await getAllData();
    const ids = categories.map((item) => item.id);
    const idInput = ids.find((id) => id == req.params.id);
    if (!req.params.id) {
      return next(new AppError("No category id found", 404));
    }
    if (idInput) {
      connection.query(
        "SELECT * FROM categories WHERE id=?",
        [req.params.id],
        function (err, data, fields) {
          if (err) return next(new AppError(err, 500));
          res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
          });
        }
      );
    } else {
      res.status(404).send("id not found");
    }
};
// lấy về toàn bộ dữ liệu của categories
exports.getAllCategories = (req, res, next) => {
    connection.query("select*from categories", (err, data) => {
      if (err) return next(new AppError(err));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
};
// thêm 1 category mới 
exports.addCategory = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [req.body.name];
    connection.query(
      `INSERT INTO categories (name) VALUES(?)`,
      values,
      function (err, data, fields) {
        if (err) return next(new AppError(err, 500));
        res.status(201).json({
          status: "success",
          message: "category created!",
        });
      }
    );
  };