import express from 'express';
const router = express.Router();
import * as school_logic from '../logic/school';

router.get('/', async (req: any, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).send('');
    return;
  }

  const schoolList = await school_logic.getSchoolList(name);

  res.status(200).json({ list: schoolList });
});

export default router;
