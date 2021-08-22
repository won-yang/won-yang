import { IPostBoardList } from '../../interface/interface';
import { TPOST_STATUS } from '../../interface/types';
import * as post_db from '../../db/post';

const converStatusName = (type: 'in_progress'): TPOST_STATUS | null => {
  switch (type) {
    case 'in_progress':
      return 'IN_PROGRESS';
    default:
      return null;
  }
};

export const getPostList = async (type: 'in_progress' | null, page: number): Promise<{ total_post: number; post: IPostBoardList[] }> => {
  const convertedType = converStatusName(type);
  const postList = await post_db.getPost(convertedType, page);

  const postListForClient: IPostBoardList[] = postList.map((post) => {
    return {
      id: post.id,
      image_url: 'asdasd',
      title: post.title,
      deposit: post.deposit,
      monthly_rent: post.monthly_rent,
      address: post.address,
      created_at: 'creates_at',
      status: post.post_status,
    };
  });

  return {
    total_post: postList.length,
    post: postListForClient,
  };
};
