// UsersPage.jsx
import {
  IconUser,
  IconKey,
  IconLogout,
  IconPlus,
} from "@tabler/icons-react";

export default function UsersPage() {
  const users = [
    {
      name: "Rahmat Saudi Al Fathir As",
      email: "rahmatsaud@universitasmulia.ac.id",
      roles: ["Admin", "Employee"],
      status: "Aktif",
    },
    {
      name: "Lintang",
      email: "lintang@universitasmulia.ac.id",
      roles: ["Employee"],
      status: "Aktif",
    },
    {
      name: "Shafira",
      email: "shafira@universitasmulia.ac.id",
      roles: ["Employee"],
      status: "Aktif",
    },
    {
      name: "Lebah Ganteng",
      email: "lebahganteng@universitasmulia.ac.id",
      roles: ["Employee"],
      status: "Suspended",
    },
  ];

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-52 border-r h-full p-4 flex flex-col">
        <h1 className="text-2xl font-bold text-center mb-10">Connect</h1>
        <button className="flex items-center gap-2 px-2 py-2 bg-black text-white rounded mb-2">
          <IconUser size={20} />
          <span>User</span>
        </button>
        <button className="flex items-center gap-2 px-2 py-2 text-left">
          <IconKey size={20} />
          <span>Hak Akses</span>
        </button>
        <button className="flex items-center gap-2 px-2 py-2 text-left">
          <IconLogout size={20} />
          <span>Logout</span>
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto relative">
        <input
          type="text"
          placeholder="Cari user"
          className="w-full p-2 border rounded mb-6"
        />
        <div className="flex flex-col gap-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="border p-4 rounded flex justify-between items-start"
            >
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-sm">{user.email}</p>
                <div className="flex gap-2 mt-2">
                  {user.roles.map((role, i) => (
                    <span
                      key={i}
                      className="bg-black text-white text-xs px-2 py-1 rounded"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="font-semibold text-sm">
                {user.status === "Aktif" ? (
                  <span className="text-black">Aktif</span>
                ) : (
                  <span className="text-gray-500">Suspended</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tombol + */}
        <button className="absolute bottom-6 right-6 bg-gray-200 hover:bg-gray-300 p-3 rounded shadow text-black">
          <IconPlus size={20} />
        </button>
      </main>
    </div>
  );
}