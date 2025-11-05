import { useParams } from 'react-router-dom';

const ChangelogDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen section-padding">
      <div className="container-custom max-w-4xl">
        <div className="mb-8">
          <a
            href="/changelog"
            className="text-primary hover:underline inline-flex items-center gap-2 mb-6"
          >
            ← Back to Changelog
          </a>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Version {id}
          </h1>
          <p className="text-gray-600">Released on October 31, 2025</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">What's New</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-green-600">New Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Added new automation workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Improved dashboard analytics</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-blue-600">Improvements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Enhanced performance and speed</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-orange-600">Bug Fixes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Fixed various UI issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogDetail;
