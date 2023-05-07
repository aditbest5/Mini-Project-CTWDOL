import jwt_decode from "jwt-decode";
import { GlobalContext } from "../Context/GlobalContext";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Table, Button, TextInput } from "flowbite-react";
import Axios from "axios";
import { API_URL } from "../constants/api";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { state } = useContext(GlobalContext);
  const { user, setUser } = state;
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const [category, setCategory] = useState([]);
  const [input, setInput] = useState({
    category_name: "",
  });
  console.log(input);
  const getToken = () => {
    const { id, email, username } = decoded;
    setUser({ id, email, username });
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const fetchCategory = async () => {
    await Axios.get(`${API_URL}/category/get-category`)
      .then(async (res) => {
        let { result } = res.data;
        setCategory([...result]);
      })
      .catch((err) => alert(err.message));
  };
  useEffect(() => {
    fetchCategory();
    getToken();
  }, []);
  const cancelEdit = () => {
    setEdit(0);
  };
  const [editId, setEdit] = useState(0);
  const editHandler = (editId) => {
    Axios.patch(
      `${API_URL}/category/edit-category/${editId}`,
      {
        category_name: input.category_name,
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }
    )
      .then((res) => {
        let { message } = res.data;
        swal({
          icon: "success",
          title: `${message}`,
        });
        setEdit(0);
        fetchCategory();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const renderTable = () => {
    return category.map((val, index) => {
      if (val.id === editId) {
        return (
          <>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {index + 1}
              </Table.Cell>
              <Table.Cell>
                <TextInput
                  defaultValue={input.category_name}
                  name='category_name'
                  required={true}
                  onChange={inputHandler}
                />
              </Table.Cell>
              <Table.Cell className='flex flex-row justify-end'>
                <Button onClick={() => editHandler(val.id)}>Save</Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={cancelEdit}>Cancel</Button>
              </Table.Cell>
            </Table.Row>
          </>
        );
      } else {
        return (
          <>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {index + 1}
              </Table.Cell>
              <Table.Cell>{val.category_name}</Table.Cell>
              <Table.Cell className='flex flex-row justify-end'>
                <Button
                  onClick={() => {
                    setEdit(val.id);
                    setInput({ category_name: val.category_name });
                  }}>
                  Edit
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button>Delete</Button>
              </Table.Cell>
            </Table.Row>
          </>
        );
      }
    });
  };
  return (
    <>
      <div className='mb-10'>
        <h1>Hello {user.username}!</h1>
      </div>
      <Table hoverable={true} striped={true}>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Product Category</Table.HeadCell>
          <Table.HeadCell colSpan={2} className='text-center'>
            Edit
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>{renderTable()}</Table.Body>
      </Table>
      <Button onClick={() => navigate("/add-category")}>Add Data</Button>
    </>
  );
};
export default Home;
