type method = 'GET' | 'POST' | 'DELETE';
interface ApiPath {
  [path: string]: {
    url: string;
    method: method;
  };
}

export const localhost = 'https://picsum.photos';
export const PATH_URL: ApiPath = {
  LIST_PHOTO: {
    url: localhost + '/v2/list',
    method: 'GET',
  },
  PHOTO_DETAIL: {
    url: localhost + '/photos/{id}',
    method: 'GET',
  },
  UPLOAD_PHOTO: {
    url: localhost + '/photos',
    method: 'POST',
  },
  DELETE_PHOTO: {
    url: localhost + '/photos/{id}',
    method: 'DELETE',
  },
  GET_METADATA: {
    url: localhost + '/metadata/{id}',
    method: 'DELETE',
  },
};
