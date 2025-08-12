const Dashboard = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Worldwide Waste Generation by Country
        </h1>
        <iframe
          className="border"
          width="100%"
          height="500"
          src="https://lookerstudio.google.com/embed/reporting/2ccd4c21-1554-4954-82e2-4cdeacdbfdab/page/q7LUF"
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          Quantity Recycled by Country
        </h1>
        <iframe
          className="border"
          width="100%"
          height="500"
          src="https://lookerstudio.google.com/embed/reporting/e7f81549-25ba-4a6b-b098-966dcca0f7d6/page/cDMUF"
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
