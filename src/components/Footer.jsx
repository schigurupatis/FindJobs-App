import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-mist-50 border-bs border-mist-200 pbs-16 pbe-8">
            <div className="max-inline-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-inline-12 gap-block-12">
                {/* Brand & Link Columns */}
                {/* Newsletter/CTA using v4.2 Mauve */}
                <div className="bg-white p-6 rounded-2xl border border-mist-200 shadow-sm">
                    <h3 className="text-sm font-bold text-mist-900 mbe-2">Stay Updated</h3>
                    <p className="text-xs text-mist-500 mbe-4">Get the latest job openings.</p>
                    <div className="flex gap-inline-2">
                    {/* <input type="email" placeholder="Email" className="min-inline-0 flex-1 bg-mist-50 border border-mist-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mauve-500/20" /> */}
                    {/* <button className="bg-mauve-600 text-white p-2 rounded-lg hover:bg-mauve-700 transition-colors">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button> */}
                    </div>
                </div>
                </div>
                {/* Bottom Bar */}
            </div>
        </footer>
    </>
  )
}

export default Footer