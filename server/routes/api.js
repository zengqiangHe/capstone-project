import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
import 'dotenv/config';

const BockWurstSchema = mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  votes: {
    type: [
      {
        id: { type: String, required: true },
        confirm: { type: Boolean, required: true },
      },
    ],
  },
});

const BockWurst = mongoose.model('bockwursts', BockWurstSchema);

const { MONGODB_URL } = process.env;
mongoose.connect(MONGODB_URL).then(() => {});

router.get('/', (req, res, next) => {
  BockWurst.find({}).then((bw) => res.status(200).json(bw));
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

router.post('/', (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  const time = req.body.time;
  const date = req.body.date;
  const location = req.body.location;

  const newEvent = BockWurst({ title, text, time, date, location, votes: [] });
  newEvent
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
});

router.patch('/vote/:id', (req, res, next) => {
  const id = req.params.id;
  const isConfirmed = req.body.isConfirmed;
  const userName = req.body.userName;

  BockWurst.findById(id)
    .then((data) => {
      const votingEntry = data.votes.find((entry) => userName === entry.id);
      if (!votingEntry) {
        data.votes.push({ id: userName, confirm: isConfirmed });
      } else {
        votingEntry.confirm = isConfirmed;
      }
      data
        .save()
        .then((data) => {
          res.status(201).send(data);
        })
        .catch((error) => {
          res.status(400).json({ error: error.message });
        });
    })

    .catch(() => {
      next();
    });
});

export default router;
