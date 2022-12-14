import { getJwtToken } from './auth';
import { request } from '../utils/request';

export async function createPost(image, description) {
  const formData = new FormData();
  formData.append("files.image", image);
  formData.append("data", JSON.stringify({ description }));

  await fetch("/api/posts", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    }
  })
}

/**
 * @param {string} filters 过滤条件，例如自己发布的
 * @returns
 */

export async function loadPosts(filters = "") {
  const response = await request(
    "/api/posts?populate=*" + (filters && `&${filters}`)
  );
  return response.data.map((post) => ({
    id: post?.id,
    ...post?.attributes,
    image: post?.attributes?.image?.data?.[0]?.attributes?.url,
    user: {
      id: post?.attributes?.user?.data?.id,
      ...post?.attributes?.user?.data?.attributes
    }
  }))
}
