import { Router } from 'express';

import { readFile } from '../controllers/fileReader';

const fileReaderRoutes = Router();

fileReaderRoutes.post('/', readFile);

fileReaderRoutes.get('/', readFile);

// fileReaderRoutes.patch('/:id', updateTodo);

// fileReaderRoutes.delete('/:id', deleteTodo);

export default fileReaderRoutes;