import request from '../utils/request';

export async function homeBanner(num = 1) {
  const bingImageHost = 'http://s.cn.bing.net';
  const {images} = await request(`bingApi/HPImageArchive.aspx?format=js&idx=0&n=${num}`);
  return images.map(d => `${bingImageHost + d.url}`);
}