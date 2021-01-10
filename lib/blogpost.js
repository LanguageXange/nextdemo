import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");
// think of this as a helper function
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// below function for dynamic route
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
        // because we name the file as [id].js that's why we need to say id here
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const filesContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(filesContents);

  // we want to convert md file into HTML string
  const processContent = await remark().use(html).process(matterResult.content);
  const htmlContent = processContent.toString();

  return {
    id,
    htmlContent,
    ...matterResult.data,
  };
}
