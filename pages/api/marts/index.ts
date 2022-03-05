import dbConnect from "../../../utils/dbConnect";
import Mart from "../../../models/Mart";

dbConnect();

export default async function hanlder(req: any, res: any) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const marts = await Mart.find({});

        res.status(200).json({ success: true, data: marts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const { tanggal_beli, nama_product, harga_product, jumlah_product } =
          req.body;

        let start;
        let mart;
        let result;

        start = await Mart.findOne({ _id: tanggal_beli });

        start !== null
          ? (mart = await Mart.findOneAndUpdate(
              { _id: tanggal_beli },
              {
                $set: {
                  data: start.data
                    .map((data: any) => data)
                    .concat([
                      {
                        _id: start.data.length,
                        tanggal_beli: tanggal_beli,
                        nama_product: nama_product,
                        harga_product: harga_product,
                        jumlah_product: jumlah_product,
                        total_harga_product: Number(harga_product) * Number(jumlah_product)
                      },
                    ]),
                  total_harga:
                    start.data
                      .map((data: any) => Number(data.total_harga_product))
                      .reduce((a: any, b: any) => a + b, 0) +
                      (Number(harga_product) * Number(jumlah_product)),
                },
              }
            ))
          : (mart = await Mart.create({
              _id: tanggal_beli,
              data: {
                _id: "0",
                tanggal_beli: tanggal_beli,
                nama_product: nama_product,
                harga_product: harga_product,
                jumlah_product: jumlah_product,
                total_harga_product: Number(harga_product) * Number(jumlah_product)
              },
              total_harga: Number(harga_product) * Number(jumlah_product),
            }));
        result = await Mart.findOne({ _id: tanggal_beli });
        // const mart = await Mart.create(req.body);

        res.status(201).json({
          success: true,
          start: start,
          data: result,
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
}
