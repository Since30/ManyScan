import React from 'react';
import Head from 'next/head';

export default function Dashboard()  {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            {/* Sidebar content */}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Header */}
          <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              {/* Header content */}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 mx-4">
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              {/* Stat cards */}
            </div>
          </div>

          {/* Charts & Lists */}
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <section className="md:flex-1">
              {/* Chart */}
            </section>
            <section className="md:flex-1">
              {/* New Members List */}
            </section>
            <section className="md:flex-1">
              {/* New Books List */}
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-600">
        Tous droits réservés
      </footer>
    </>
  );
};


