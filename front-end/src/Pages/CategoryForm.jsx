import { TextInput, Label, Card, Button } from "flowbite-react";
import { useState } from "react";
import { API_URL } from "../constants/api";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const CategoryForm = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ category_name: "" });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const addCategory = (e) => {
    e.preventDefault();
    Axios.post(
      `${API_URL}/category/add-category`,
      {
        category_name: input.category_name,
      },
      { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
    )
      .then((res) => {
        const { message } = res.data;
        swal({
          icon: "success",
          title: `${message}`,
        });
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          swal({
            title: `${err.response.data.message}`,
            icon: "warning",
          });
        } else {
          swal({
            title: `${err.message}`,
            icon: "warning",
          });
        }
      });
  };
  return (
    <>
      <div className='flex flex-row justify-center my-20'>
        <Card onSubmit={addCategory} className='w-5/12 bg-sky-400'>
          <div>
            <form className='flex flex-col gap-4'>
              <div>
                <div className='mb-2 block'>
                  <Label htmlFor='category_name' value='Category Name' />
                </div>
                <TextInput
                  className='w-9/12'
                  id='category_name'
                  name='category_name'
                  type='text'
                  value={input.category_name}
                  required={true}
                  onChange={inputHandler}
                />
              </div>
              <div className='flex flex-row justify-between'>
                <div>
                  <Button className='w-24' type='submit'>
                    Add
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};
export default CategoryForm;
