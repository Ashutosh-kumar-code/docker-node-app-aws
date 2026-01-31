import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Docker + AWS working Ashutosh Billionare !!🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀"
  });
});

app.post("/test", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "name and email required"
    });
  }

  res.json({
    success: true,
    data: { name, email }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
