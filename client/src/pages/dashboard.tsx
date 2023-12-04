import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { RxAvatar } from "react-icons/rx";
import { FaBookOpen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import InfoCard from '../cards/InfoCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardProps {
  loggedInUserCount: number;
}

interface MangaStat {
  mangaName: string;
  commentCount: number;
}

const MangaStatsGraph = ({ data }: { data: MangaStat[] }) => {
  const chartData = {
    labels: data.map((item) => item.mangaName),
    datasets: [
      {
        label: 'Nombre de commentaires',
        data: data.map((item) => item.commentCount),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} />;
};
const fakeUsers = [
  { id: 1, name: "Alex Martin", joinedDate: "2023-03-01" },
  { id: 2, name: "Sara Linton", joinedDate: "2023-03-05" },
  { id: 3, name: "John Doe", joinedDate: "2023-03-10" },
  { id: 4, name: "Jane Smith", joinedDate: "2023-03-15" },
  { id: 5, name: "Kevin Brown", joinedDate: "2023-03-20" }
];
export default function Dashboard() {
  const [mangaStats, setMangaStats] = useState<MangaStat[]>([]);
  const [loggedInUserCount, setLoggedInUserCount] = useState<number>(0);
  const [BookCount, setBookCount] = useState<number>(840);
  const [membersCount, setMembersCount] = useState<number>(6);
  const [issueCount, setIssueCount] = useState<number>(0);

  useEffect(() => {
    const fetchMangaStats = async () => {
      const response = await fetch('https://api.mangadex.org/statistics/manga/.');
      const data = await response.json();
      
      setMangaStats(data.statistics.map((stat: any) => ({
        mangaName: stat.mangaName, 
        commentCount: stat.commentCount 
      })));
    };

    fetchMangaStats();
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-gray-800 text-white" aria-label="Sidebar">
          <div className="py-4 px-3">
            <h2 className="text-lg font-semibold text-gray-300 mb-4">Menu</h2>
            <ul className="space-y-2">
              <li className="hover:bg-gray-700 p-2 rounded">Accueil</li>
              <li className="hover:bg-gray-700 p-2 rounded">Profil</li>
              <li className="hover:bg-gray-700 p-2 rounded">Paramètres</li>
            </ul>
          </div>
        </aside>
        <main className="flex-1">
          <div className="bg-blue-500 text-white p-4 shadow-md">
            <h1 className="text-xl font-semibold">Tableau de Bord</h1>
          </div>
          <InfoCard 
  icon={< RxAvatar />}
  title="Logged In User"
  value={loggedInUserCount} 
  className="bg-red-500"
/>
<InfoCard 
  icon={< FaBookOpen />}
  title="Number of Books"
  value={BookCount} 
  className="bg-red-500"
/>
<InfoCard
  icon={< FaUsers />}
  title="Number of Users"
  value={membersCount}
  className="bg-red-500"
/>
<InfoCard
  icon={< BiError />}
  title="Issues reported"
  value={issueCount}
  className="bg-red-500"
/>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Autres cartes de statistiques */}
            </div>
            <div className="flex flex-col md:flex-row gap-4 p-4">
              <section className="bg-white p-4 rounded-lg shadow flex-1">
                <h2 className="font-semibold text-xl mb-3">Statistiques Manga</h2>
                <MangaStatsGraph data={mangaStats} />
              </section>
              {/* Autres sections, comme la liste des nouveaux membres */}
              <section className="bg-white p-4 rounded-lg shadow flex-1">
          <h2 className="font-semibold text-xl mb-3">Nouveaux Membres</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date d'inscription</th>
                </tr>
              </thead>
              <tbody>
                {fakeUsers.map((user, index) => (
                  <tr key={user.id} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.joinedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
            </div>
          </div>
        </main>
        
      </div>
    </>
  );
}
