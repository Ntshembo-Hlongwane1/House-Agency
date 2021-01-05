import { Router } from 'express';
import { HouseListingController } from '../../Controller/HouseListing/HouseListing';

const router = Router();
const Controller = new HouseListingController();

router.post('/api/list-house', (request, response) => {
  Controller.ListHouse(request, response);
});

router.get('/', (request, response) => {
  response.send('Server Up And Running');
});

export default router;
