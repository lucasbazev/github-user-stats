// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getUser from '../../utils/getUser';

export default async (req, res) => {
  const data = await getUser();

  res.send(data);
}
