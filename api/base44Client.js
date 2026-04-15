export const base44 = {
  auth: { me: async () => null },
  entities: {},
  agents: {
    createConversation: async () => ({ id: null }),
    subscribeToConversation: () => {},
    addMessage: async () => {},
  },
  integrations: { Core: { UploadFile: async () => ({ file_url: null }) } },
  functions: { invoke: async () => null },
}