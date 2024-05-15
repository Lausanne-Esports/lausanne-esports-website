import { createTuyau } from '@tuyau/client'
import { api } from '../../.adonisjs/api'

export const tuyau = createTuyau({ baseUrl: 'http://localhost:3333', api })

tuyau.$route('admin.auth.login')
