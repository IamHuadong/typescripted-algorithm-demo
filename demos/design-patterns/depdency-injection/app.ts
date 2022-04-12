import http, { RequestListener } from 'http'
import { UserModule } from './user.module'
import { UserController } from './user.controller'
import { generateRoutes } from './helpers/generateRoutes'
import { UserService } from './user.service'

const routes = generateRoutes(new UserController(new UserService()))
console.log('routes:', routes)
const handleHttpListen: RequestListener = (request, response) => {
  request.method
	response.end('ok')
}
http.createServer(handleHttpListen).listen(4000)
console.log('server is running on 4000')
