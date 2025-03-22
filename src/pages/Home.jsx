import React, { useEffect, useState } from "react";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    datepicker: "",
    gender: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date, datestr) => {
    //console.log(date, datestr);
    setFormData((prevData) => ({
      ...prevData,
      datepicker: date,
      dob: datestr,
    }));
  };

  const handleDropdownChange = (loc) => {
    //console.log(loc);
    setFormData((prevData) => ({ ...prevData, location: loc }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.gender == "") {
      toast.error("Please select the Gender");
      return;
    }
    if (formData.location == ""){
      toast.error("Please select the Natonality");
      return;
    }

    formData.id = crypto.randomUUID();
    let list = JSON.parse(localStorage.getItem("formdata") || "[]");
    //console.log("after retriving the list from localstorage", list);
    list.push(formData);
    //console.log("after pushing form data to list of objects", list);
    localStorage.setItem("formdata", JSON.stringify(list));

    setFormData({
      name: "",
      dob: "",
      datepicker: "",
      gender: "",
      email: "",
      location: "",
    });
    toast.success("Data Submitted Sucessfully!!!");
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <DatePicker
          value={formData.datepicker}
          name="dob"
          placeholder="Date Of Birth"
          onChange={handleDateChange}
          required
        />

        <p>Choose Gender</p>
        <Radio.Group
          value={formData.gender}
          onChange={handleChange}
          name="gender"
        >
          <Radio value={"male"}>Male</Radio>
          <Radio value={"female"}>Female</Radio>
          <Radio value={"others"}>others</Radio>
        </Radio.Group>

        <Input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          required
        />

        <Select
          name="location"
          value={formData.location || undefined}
          onChange={handleDropdownChange}
          placeholder="Nationality"
        >
          <Select.Option value={"India"}>India</Select.Option>
          <Select.Option value={"England"}>England</Select.Option>
          <Select.Option value={"USA"}>USA</Select.Option>
          <Select.Option value={"Australia"}>Australia</Select.Option>
        </Select>

        <Button htmlType="submit">Submit</Button>
      </form>
      <ToastContainer position="bottom-right" theme="light" closeOnClick draggable/>
    </div>
  );
};

export default Home;
