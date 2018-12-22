import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const posts = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    authorId: "cory-house",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    authorId: "cory-house",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    authorId: "cory-house",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    authorId: "cory-house",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    authorId: "cory-house",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = post => {
  return replaceAll(post.title, " ", "-");
};

class PostApi {
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static savePost(post) {
    post = Object.assign({}, post); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPostTitleLength = 1;
        if (post.title.length < minPostTitleLength) {
          reject(`Title must be at least ${minPostTitleLength} characters.`);
        }

        if (post.id) {
          const existingPostIndex = posts.findIndex(a => a.id == post.id);
          posts.splice(existingPostIndex, 1, post);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          post.id = generateId(post);
          post.push(post);
        }

        resolve(post);
      }, delay);
    });
  }

  static deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPostToDelete = posts.findIndex(post => {
          post.id == postId;
        });
        posts.splice(indexOfPostToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PostApi;
