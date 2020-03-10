import data from "../data";

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify(
      data.find(d => d.id === Number(req.query.id))
    )
  );
};
