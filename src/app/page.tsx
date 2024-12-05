import Sidebar from "./Component/Sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen flex">
        <Sidebar />
        <main className="flex-1 p-8 space-y-8">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center space-y-6 min-h-[220px] border-t-4 border-[#071952] transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-xl font-semibold text-gray-700">
                CO2 Level
              </div>
              <div className="text-6xl font-extrabold text-[#071952]">
                400
                <span className="block text-xl font-normal text-gray-500 text-center">
                  ppm
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center space-y-6 min-h-[220px] border-t-4 border-[#071952] transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-xl font-semibold text-gray-700">
                Alcohol Level
              </div>
              <div className="text-6xl font-extrabold text-[#071952]">
                0.08
                <span className="block text-xl font-normal text-gray-500 text-center">
                  %
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center space-y-6 min-h-[220px] border-t-4 border-[#071952] transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-xl font-semibold text-gray-700">
                Sleepiness Stats
              </div>
              <div className="text-6xl font-extrabold text-[#071952]">
                30
                <span className="block text-xl font-normal text-gray-500 text-center">
                  %
                </span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center justify-center space-y-6 min-h-[220px] border-t-4 border-[#071952] transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="text-xl font-semibold text-gray-700">
                Heart Rate
              </div>
              <div className="text-6xl font-extrabold text-[#071952]">
                72
                <span className="block text-xl font-normal text-gray-500 text-center">
                  bpm
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
