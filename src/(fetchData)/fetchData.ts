export type DataType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function getAllPosts(): Promise<DataType[]> {
  let res = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });

  return res;
}
export function getPostById(id: string): Promise<DataType> {
  let res = fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
    (res) => res.json()
  );
  return res;
}

