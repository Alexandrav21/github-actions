// __mocks__/@actions/github.ts
export const context = {
  payload: {
    pull_request: {
      title: 'Mock PR Title',
      body: 'Mock PR Description',
    },
  },
};
