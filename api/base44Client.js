const entityStub = {
  filter: async () => [],
  get: async () => null,
  create: async () => null,
  update: async () => null,
  delete: async () => null,
}

const entitiesProxy = new Proxy({}, {
  get: () => entityStub,
})

export const base44 = {
  auth: {
    me: async () => null,
    isAuthenticated: async () => false,
    login: async () => null,
    logout: async () => null,
  },
  entities: entitiesProxy,
  agents: {
    createConversation: async () => ({ id: null }),
    subscribeToConversation: () => {},
    addMessage: async () => {},
  },
  integrations: { Core: { UploadFile: async () => ({ file_url: null }) } },
  functions: { invoke: async () => null },
}
