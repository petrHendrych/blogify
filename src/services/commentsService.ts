export const commentsService = {
  fetchPostComments: async (postId: string) => {
    const params = new URLSearchParams();
    params.set("postId", postId);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?${params.toString()}`,
    );
    return await response.json();
  },
};
