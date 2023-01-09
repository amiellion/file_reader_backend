import { Router } from 'express';

import { createTodo, deleteTod, getTodos, updateTodo } from '../controllers/todos'

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTod);

export default router;