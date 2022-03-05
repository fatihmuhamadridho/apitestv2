import { config } from "./config";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [dataInput, setDataInput] = useState({
    tanggal_beli: "",
    nama_product: "",
    harga_product: "",
    jumlah_product: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDataInput((prevState: any) => ({
      ...prevState,
      [name] : value
    }))
  }

  const SubmitHandler = async (e: any) => {
    e.preventDefault();
    const res = await axios.post('/api/marts', dataInput);
    console.log(res.data)
  };

  return (
    <>
      <form action="" className="home--form" onSubmit={SubmitHandler}>
        {config.map((config: any, index: any) => (
          <div key={index} className="home--form-container">
            <label htmlFor="">{config.title}</label>
            <input
              type={"input"}
              className="home--form-container-input"
              name={config.name}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" className="home--form-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
