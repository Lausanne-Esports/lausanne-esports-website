import { defineConfig } from '@tuyau/core'

const tuyauConfig = defineConfig({
  codegen: {
    /**
     * List of routes to ignore during code generation
     */
    ignoreRoutes: []
  }
})

export default tuyauConfig