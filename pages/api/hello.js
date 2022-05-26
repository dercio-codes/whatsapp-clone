// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(process.env.API_KEY)

  res.status(200).json({ name: 'John Doe' })
}
