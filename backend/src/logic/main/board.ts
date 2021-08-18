import { IPostBoardList } from './../../interface';
import { TPOST_STATUS } from './../../types';
import * as post_db from '../../db/post';

export const getPostList = async (type: TPOST_STATUS | null, page: number): Promise<{ total_post: number; post: IPostBoardList[] }> => {
  const postList = await post_db.getPost(type, page);

  const postListForClient: IPostBoardList[] = postList.map((post) => {
    return {
      id: post.id,
      image_url: 'asdasd',
      title: post.title,
      deposit: post.deposit,
      monthly_rent: post.monthly_rent,
      address: post.address,
      created_at: 'creates_at',
      status: post.status,
    };
  });

  return {
    total_post: postList.length,
    post: postListForClient,
  };
};
