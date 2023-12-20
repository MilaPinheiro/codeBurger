import { Router } from "express";
import { v4 } from 'uuid'

import User from '../app/models/User'

const routes = new Router();

routes.get('/',  async (request, response) => {
  const user =  await User.create({
    id: v4(),
    name: 'Camila Pinheiro',
    email: 'camilapinheiro.com',
    password_hash: '23abc234',
    admin: false,
  })
 
  return response.json(user);
});

export default routes;
