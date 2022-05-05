import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import 'dotenv/config';

const BockWurstSchema = mongoose.Schema({
  titel: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
});

const BockWurst = mongoose.model('bockwursts', BockWurstSchema);

const { MONGODB_URL } = process.env;
mongoose.connect(MONGODB_URL).then(() => {
  console.log('connected!' + '****** ');
});

router.get('/', (req, res, next) => {
  BockWurst.find({}).then((bw) => res.status(200).json(bw));
  /*res.status(200).json([

    { id: 1, name: 'Mike' },
    { id: 2, name: 'Carol' },
  ]);*/
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
