import express from "express";

const app = express();

app.use(express.json());

app.post("/api/intel", async (req, res) => {
  // const title = req.body.title;
  // const description = req.body.description;

  try {
    // destructuring the request body to get title and description
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    console.log(title, description);

    res.status(201).json({
      message: "Intel created successfully",
      intel: {
        title,
        description,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating intel",
    });
  }
});

// app is listening on port 3000 and logs a message to the console
app.listen(3000, () => {
  console.log("Server running");
});
