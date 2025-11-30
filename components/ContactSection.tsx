import React from 'react';
import { CONTACT_INFO } from '../constants';
import { IconMail, IconPhone, IconLinkedIn } from './Icons';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-surface py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Something Amazing.</h2>
            <p className="text-gray-400 text-lg mb-8">
              I'm currently available for freelance work and full-time opportunities in Concept Art and 3D Modeling.
            </p>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="w-full md:w-auto bg-black/20 p-8 rounded-2xl border border-white/5">
            <h3 className="text-white font-bold text-xl mb-6">Contact Details</h3>
            
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  <IconPhone className="w-5 h-5" />
                </div>
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  <IconMail className="w-5 h-5" />
                </div>
                <span>{CONTACT_INFO.email}</span>
              </a>

              <a href={`mailto:${CONTACT_INFO.altEmail}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  <IconMail className="w-5 h-5" />
                </div>
                <span>{CONTACT_INFO.altEmail}</span>
              </a>

              <a href={CONTACT_INFO.linkedIn} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                  <IconLinkedIn className="w-5 h-5" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Kyron Evangelista. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;