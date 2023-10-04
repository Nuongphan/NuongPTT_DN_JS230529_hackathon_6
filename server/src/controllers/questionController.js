const connection = require("../config/dbConfig");
const AppError = require("../middlewares/appError");
let questions = [];
function getAllData() {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM question", function (err, data, fields) {
      if (err) {
        reject(err);
      } else {
        questions = data;
        resolve();
      }
    });
  });
}
// lấy về 1 question
exports.getQuestion = async (req, res, next) => {
  await getAllData();
  const ids = questions.map((item) => item.id);
  const idInput = ids.find((id) => id == req.params.id);
  if (!req.params.id) {
    return next(new AppError("No question id found", 404));
  }
  if (idInput) {
    connection.query(
      "SELECT * FROM question WHERE id=?",
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
// lấy về toàn bộ question 
exports.getAllQuestion = (req, res, next) => {
  connection.query("SELECT * FROM question ", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};
// lấy về một question với toàn bộ answers của question đó 
exports.getQuestionWithAnswers = async (req, res, next) => {
  await getAllData();
  const ids = questions.map((item) => item.id);
  const idInput = ids.find((id) => id == req.params.id);
  if (!req.params.id) {
    return next(new AppError("No question id found", 404));
  }
  if (idInput) {
    const question = `select* from question join answer on question.id=answer.questionId WHERE question.id=?`
    connection.query(
      question,
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
// lấy về 1 question với tiêu chí category, level, limit 
exports.getQuestionWithParams = async (req, res, next) => {
  const { categoryId, level, limit } = req.query;
  let query = `SELECT * FROM question WHERE 1`;
  const params = [];
  if (categoryId) {
    query += ` AND categoryid = ? `;
    params.push(categoryId);
  }
  if (level) {
    query += ` AND level = ? `;
    params.push(level);
  }
  if (limit) {
    query += ` LIMIT ? `;
    params.push(parseInt(limit));
  }
  connection.query(query, params, (err, result) => {
    console.log(res);
    return res.json(result)
  })
};
// thêm 1 question mới 
exports.addQuestion = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [req.body.categoryid,
  req.body.create_at,
  req.body.content,
  req.body.level];
  connection.query(
    `INSERT INTO question (categoryid,create_at,content,level ) VALUES(?,?,?,?)`,
    values,
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "question created!",
      });
    }
  );
};