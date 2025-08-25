export const saveBookmark = (article) => {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(article);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

export const getBookmarks = () => {
  return JSON.parse(localStorage.getItem("bookmarks")) || [];
};
