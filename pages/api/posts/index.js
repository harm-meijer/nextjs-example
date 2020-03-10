import data from "../data";

const pageSize = 10;
export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const page = Number(req.query.page || 1);
  res.end(
    JSON.stringify(
      data.slice((page - 1) * pageSize, page * pageSize)
    )
  );
};
