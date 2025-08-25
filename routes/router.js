import express from 'express';
const router = express.Router();

import {saveNewEntry} from '../controllers/saveNewEntry.js';
import {getEntries} from '../controllers/getEntries.js';
import { deleteEntry } from '../controllers/deleteEntry.js';
import { editEntry } from '../controllers/editEntry.js';

router.post('/saveNewEntry', saveNewEntry);
router.get('/getEntries', getEntries);
router.delete('/deleteEntry/:id', deleteEntry)
router.put('/editEntry',editEntry)
// router.use('/api')

export default router;
