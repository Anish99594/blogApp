import nc from 'next-connect';
import { DBConnect } from '../../../../../dbconnect/dbconnect';
import Posts from '@/models/Posts';

const handler = nc().get(async (req, res) => {
    await DBConnect();
    const posts = await Posts.find({})
    res.json(posts);

})
.posts(async (req, res) => {
    await DBConnect();
    const Post = new Posts(req.body);
    res.json(Post);
})
export default handler;
