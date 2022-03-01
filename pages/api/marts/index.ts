import dbConnect from "../../../utils/dbConnect";
import Mart from '../../../models/Mart';

dbConnect();

export default async function hanlder(req: any, res: any) {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const marts = await Mart.find({});

                res.status(200).json({ success: true, data: marts });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "POST":
            try {
                const mart = await Mart.create(req.body);

                res.status(201).json({ success: true, data: mart });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
}