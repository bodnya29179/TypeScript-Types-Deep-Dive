interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
}

/*
 * TODO: Type this return statement, so it's both
 * User AND posts field
 */
const getDefaultUserAndPosts = (): unknown => {
  return {
    id: '1',
    firstName: 'Oliver',
    lastName: 'Smith',
    posts: [
      {
        id: '1',
        title: 'How I eat so much cheese',
        body: 'It\'s pretty edam difficult',
      },
    ],
  };
};


/* Test the result */
const userAndPosts = getDefaultUserAndPosts();
console.log(userAndPosts.posts[0]);
