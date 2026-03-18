export default async function handler(req, res) {
  const { messages } = req.body;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "meta-llama/llama-3-8b-instruct",
      messages,
      temperature: 0.9,
      max_tokens: 200
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
