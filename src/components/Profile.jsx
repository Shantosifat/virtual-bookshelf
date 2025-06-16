import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f"];

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [categorySummary, setCategorySummary] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/books?email=${user.email}`)
      .then((res) => {
        setBooks(res.data || []);

        // Group books by category
        const summary = {};
        res.data.forEach((book) => {
          summary[book.category] = (summary[book.category] || 0) + 1;
        });

        const chartData = Object.entries(summary).map(([category, count]) => ({
          name: category,
          value: count,
        }));

        setCategorySummary(chartData);
      });
  }, [user.email]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* User Info */}
        <div className="flex items-center gap-6 mb-8">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-indigo-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>

        {/* Bookshelf Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Summary Cards */}
          <div className="space-y-4">
            <div className="bg-indigo-100 text-indigo-800 p-4 rounded-lg shadow">
              <p className="text-lg font-semibold">Total Books</p>
              <h3 className="text-2xl font-bold">{books.length}</h3>
            </div>
            {categorySummary.map((item, index) => (
              <div key={index} className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow">
                <p className="text-lg font-semibold">{item.name}</p>
                <h3 className="text-xl font-bold">{item.value} book(s)</h3>
              </div>
            ))}
          </div>

          {/* Pie Chart */}
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categorySummary}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categorySummary.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
