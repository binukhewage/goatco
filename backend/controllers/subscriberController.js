import Subscriber from '../models/subscriberModel.js';

export const subscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: 'You are already subscribed.' });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().select('email subscribedAt -_id');
    res.json(subscribers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};
