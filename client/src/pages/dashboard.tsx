import React from 'react';
import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
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

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 shadow-md">
            <h1 className="text-xl font-semibold">Tableau de Bord</h1>
          </div>

          {/* Stats */}
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Stat cards */}
              <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-lg">Statistique 1</h2>
                  <p className="text-gray-600">40%</p>
                </div>
                <div className="text-blue-500 text-2xl">📈</div>
              </div>
              {/* Repeat for other stat cards */}
            </div>
          </div>

          {/* Charts & Lists */}
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <section className="bg-white p-4 rounded-lg shadow flex-1">
              <h2 className="font-semibold text-xl mb-3">Graphique</h2>
              <div className="h-40 bg-gray-200 rounded flex items-center justify-center">
                <span>Graphique ici</span>
              </div>
            </section>
            <section className="bg-white p-4 rounded-lg shadow flex-1">
              <h2 className="font-semibold text-xl mb-3">Nouveaux Membres</h2>
              <ul className="list-disc pl-5">
                <li>Membre 1</li>
                <li>Membre 2</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 bg-gray-200 text-gray-600">
        Tous droits réservés
      </footer>
    </>
  );
};
