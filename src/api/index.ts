import express, {Request, Response} from 'express';

import articleRoute from './routes/articleRouter';
import authorsRoute from './routes/athorsRouter';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'media api v1',
  });
});

router.use('/articles', articleRoute);
router.use('/authors', authorsRoute);

export default router;
