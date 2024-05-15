/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const LoginController = () => import('../src/admin/auth/controllers/login_controller.js')

router.get('login', [LoginController, 'render'])
