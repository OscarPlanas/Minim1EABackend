import examController from '../controller/examController';
import { Router } from 'express';

const router = Router();

router.post('/', examController.createConfig);

router.get('/profileconfig/:id', examController.profileConfig);

router.get('/', examController.getall);
router.get('/:id', examController.getone);
router.put('/', examController.update);
router.delete('/:id', examController.deleteConfig);


/*router.get('/', eventController.getall);
router.get('/:id_event', eventController.getone);
router.post('/', examController.createConfig);
router.put('/:id_event', eventController.update);
router.delete('/:id_event', eventController.deleteEvent);

router.get('/:id_event/comments', eventController.getComments);
router.get('/:id_event/comments/:id_comment', eventController.getComment);
router.post('/:id_event/comments', eventController.addComment);
router.put('/:id_event/comments/:id_comment', eventController.updateComment);
router.delete('/:id_event/comments/:id_comment', eventController.deleteComment);
router.post('/', eventController.addEvent);*/

export default router;