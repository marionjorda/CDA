export const userColumns = [
    {field: "id", headerName:"ID", width: 70}, 
    {
    field: "user", headerName: "User", width: 230, renderCell: (params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell:(params)=>{
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];


export const userRows = [
    {
      id: 1,
      username: "Faure",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "active",
      email: "1faure@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Claire Deville",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "2faure@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Deville",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "3faure@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Tanguy",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "4faure@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Emma",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "5faure@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Maëlle",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "6faure@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Jorda",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "7faure@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Chloé",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "8faure@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Tika",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "faure@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Tika",
      img: "https://images.pexels.com/photos/4505269/pexels-photo-4505269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      email: "faure@gmail.com",
      status: "active",
      age: 65,
    },
  ];