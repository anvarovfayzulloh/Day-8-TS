import { useGetProfileQuery } from "../../redux/api/authApi";

const Profile = () => {
  const { data, isLoading } = useGetProfileQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="flex items-center mb-4">
        <img src={data.avatar} alt={`${data.name}'s avatar`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="text-xl">{data.name}</h3>
          <p className="text-sm text-gray-600">{data.email}</p>
          <p className="text-sm text-gray-600">Role: {data.role}</p>
        </div>
      </div>
      <div>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Created At:</strong> {new Date(data.creationAt).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(data.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Profile;
