const Changelog = () => {
  const updates = [
    {
      version: '2.0.0',
      date: 'October 31, 2025',
      title: 'Major Release',
      changes: ['New features', 'Performance improvements', 'Bug fixes'],
    },
    {
      version: '1.5.0',
      date: 'September 15, 2025',
      title: 'Feature Update',
      changes: ['Added new integrations', 'UI enhancements'],
    },
    {
      version: '1.0.0',
      date: 'August 1, 2025',
      title: 'Initial Release',
      changes: ['First stable release'],
    },
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Changelog</h1>
          <p className="text-xl text-gray-600">
            Track our latest updates and improvements
          </p>
        </div>

        <div className="space-y-8">
          {updates.map((update) => (
            <div
              key={update.version}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Version {update.version}
                  </h2>
                  <p className="text-gray-600">{update.title}</p>
                </div>
                <span className="text-sm text-gray-500">{update.date}</span>
              </div>
              <ul className="space-y-2">
                {update.changes.map((change, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-700">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Changelog;
