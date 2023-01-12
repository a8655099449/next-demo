export const getPlayList = async () => {
  const res = await fetch(`http://47.107.81.99:3000/top/playlist`);
  return res.json();
};

export const getPlayListDetail = async (id: string) => {
  const res = await fetch(`http://47.107.81.99:3000/playlist/detail?id=${id}`);
  return res.json();
};
