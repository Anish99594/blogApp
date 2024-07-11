import { posts } from "@/app/data/posts";
import nc from next-connect;
import { DBConnect } from "../../../../../dbconnect/dbconnect";
import Posts from "@/models/Posts";
import handler from ".";

const handle = nc()
    .put(async (req, res) => {
        await DBConnect();
        const { id } = req.query;
        const post = await Posts.findByIdAndUpdate(id, req.body, {new: true});
        res.json({post});
    })

    .delete(async (req, res) => {
        await DBConnect();
        const {id} = req.query;
        await Posts.findByIdAndDelete(id);
        res.status(204).end();
    })
export default handler;