import dbConnect from '../../utils/dbConnect';

dbConnect();

export default async function handler(req: any, res: any) {
    res.json({ test: 'test'})
}