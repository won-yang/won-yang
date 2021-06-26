import * as express from 'express';
const router = express.Router();

const hello = (req: any, res: any) => {
    
    return res.json('hello wolrd');
}


router.get('/', hello);

export default router;