const axios = require("axios");
const { writeFile } = require("fs/promises");
axios
  .get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
  .then((result) => {
    let stories = result.data.slice(0, 20);
    let story_arr = stories.map((story) => {
      return axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${story}.json`
      );
    });
    return Promise.all(story_arr);
  })
  .then((result) => {
    let all_story = result;

    let file_write = all_story.map((ele) => {
      return writeFile(`${ele.data.id}.json`, JSON.stringify(ele.data));
    });
    return Promise.all(file_write);
  })
  .then((res) => {
    console.log("success");
  })
  .catch((err) => {
    throw err;
  });