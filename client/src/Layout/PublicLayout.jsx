import React, { useState, useEffect } from 'react';

function PublicLayout({ children }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // Display modal after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className='relative w-full h-full pt-40 min-h-screen'>
        <div
          className='absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full'
          style={{
            backgroundImage:
              'url(' + require('./../images/register_bg_2.png') + ')',
          }}
        ></div>
        <div className='container mx-auto px-4 h-full'>
          <div className='flex content-center items-center justify-center h-full'>
            <div className='w-full lg:w-[40%] px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='fixed inset-0 bg-black opacity-50'></div>
          <div className='bg-white rounded-lg p-8 max-w-screen-2xl overflow-hidden z-50 w-5/6 h-5/6'>
            <div className='flex flex-col items-center justify-center h-full'>
              <h2 className='text-3xl font-bold mb-4'>
                Welcome to AllBlogs.in
              </h2>
              <p className='text-lg text-gray-700 mb-6 text-center'>
                Your go-to platform for the latest blogs and articles!
              </p>
              <iframe
                title='AllBlogs'
                src='https://allblogs.in'
                className='w-full h-full'
              ></iframe>
              <div className='mt-6 text-center'>
                <button
                  onClick={() => setShowModal(false)}
                  className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mr-4'
                >
                  Close
                </button>
                <a
                  href='https://allblogs.in'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  Visit AllBlogs.in
                </a>
              </div>
              <p className='text-xs mt-4 text-gray-500'>
                Newly launched website
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default PublicLayout;
