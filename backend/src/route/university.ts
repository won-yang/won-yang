import express from 'express';
import * as university_logic from '../logic/university';
const router = express.Router();

router.get('/', async (req: any, res) => {
  const { name } = req.query;

  console.log('----------school---------');

  if (!name) {
    res.status(400).send('');
    return;
  }

  const universityList = await university_logic.getUniversityList(name);

  res.status(200).json({ list: universityList });
});

export default router;
