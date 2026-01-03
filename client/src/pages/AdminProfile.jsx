import { useState, useEffect, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const AdminProfile = () => {
  const { admin, updateAdmin } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
  });

  const [image, setImage] = useState(null);

  
  const [preview, setPreview] = useState(
    localStorage.getItem("profileImage")
      ? `http://localhost:3000/${localStorage.getItem("profileImage")}`
      : "/default-avatar.png"
  );

  useEffect(() => {
    if (admin) {
      setForm({
        name: admin.name || "",
        gender: admin.gender || "",
        dob: admin.dob ? admin.dob.split("T")[0] : "",
      });

     
      if (admin.profileImage) {
        setPreview(`http://localhost:3000/${admin.profileImage}`);
      }
    }
  }, [admin]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("name", form.name);
    data.append("gender", form.gender);
    data.append("dob", form.dob);
    if (image) data.append("profileImage", image);

    const res = await api.put("/admin/profile", data);

    if (res.data.admin.profileImage) {
      localStorage.setItem(
        "profileImage",
        res.data.admin.profileImage
      );
    }

    updateAdmin(res.data.admin);



    alert("Profile Updated");
  };

  return (
    <div className="min-h-screen bg-blue-100 text-black flex justify-center items-center">
      <div className="w-96 bg-yellow-100 p-8 rounded-xl">
        <h2 className="text-2xl mb-4 text-center">Admin Profile</h2>

        <img
          src={preview}
          className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
          alt="profile"
        />

        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            setImage(file);

      
            setPreview(URL.createObjectURL(file));
          }}
        />

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full mt-3 p-2 bg-black"
        />

        <input
          value={admin.email}
          disabled
          className="w-full mt-3 p-2 bg-black/50"
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="w-full mt-3 p-2 bg-black"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="w-full mt-3 p-2 bg-white"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-full mt-4 bg-indigo-600 py-2 rounded"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
