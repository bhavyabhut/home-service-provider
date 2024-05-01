import React from 'react';

function PublicLayout({ children }) {
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
    </main>
  );
}

export default PublicLayout;
