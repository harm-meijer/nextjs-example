import data from "../data";
import { later } from "../shared";

const pageSize = 10;
export default (req, res) => {
  return later().then(() => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const page = Number(req.query.page || 1);
    res.end(
      JSON.stringify(
        data.slice((page - 1) * pageSize, page * pageSize)
      )
    );
  });
};
