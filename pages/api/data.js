export default [...new Array(200)].map((_, i) => ({
  id: i + 1,
  name: `name of post ${i + 1}`
}));
