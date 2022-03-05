const Data = (props: any) => {
  console.log(props.datas);
  return (
    <>
      {props.datas.data.map((data: any) => (
        <ul key={data._id} style={{ listStyle: "none" }}>
          <li>Id : {data._id}</li>
          <li>
            {data.data.map((data: any) => (
              <ul key={data._id} style={{ listStyle: "none" }}>
                <li style={{ fontWeight: "bold" }}>
                  Tanggal : {data.tanggal_beli}
                </li>
                <li>Nama : {data.nama_product}</li>
                <li>Harga : Rp. {data.harga_product}</li>
                <li>Jumlah : {data.jumlah_product}</li>
                <li>Total Harga : Rp. {data.total_harga_product}</li>
                <p></p>
              </ul>
            ))}
          </li>
          <li>Total Harga Belanja : Rp. {data.total_harga}</li>
        </ul>
      ))}
    </>
  );
};

export default Data;
