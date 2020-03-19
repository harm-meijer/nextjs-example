import data from "../data";
import { later } from "../shared";

export default (req, res) => {
  later().then(() => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify(
        data.find(d => d.id === Number(req.query.id))
      )
    );
  });
};
