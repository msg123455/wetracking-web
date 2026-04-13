import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AcademySetup from '@/components/academy/AcademySetup.jsx';
import AcademyLogin from '@/components/academy/AcademyLogin.jsx';
import AcademyStudent from '@/components/academy/AcademyStudent.jsx';
import AcademyAdmin from '@/components/academy/AcademyAdmin.jsx';
import AcademyChatbot from '@/components/academy/AcademyChatbot';

export default function Academia() {
  const [profile, setProfile] = useState(null);
  const [mode, setMode] = useState('loading'); // loading | login | setup | student | admin
  const [isAdmin, setIsAdmin] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    // Check if admin is logged in via Base44
    const authOk = await base44.auth.isAuthenticated();
    if (authOk) {
      const me = await base44.auth.me();
      if (me.role === 'admin') {
        const profiles = await base44.entities.AcademyProfile.filter({ user_email: me.email });
        const adminProfile = profiles.length > 0 ? profiles[0] : { full_name: me.full_name || 'Admin', cedula: '', company: 'WeTracking' };
        setProfile(adminProfile);
        setIsAdmin(true);
        setMode('admin');
        return;
      }
    }

    // Check session in localStorage
    const savedCedula = localStorage.getItem('academy_cedula');
    if (savedCedula) {
      const profiles = await base44.entities.AcademyProfile.filter({ cedula: savedCedula });
      if (profiles.length > 0) {
        setProfile(profiles[0]);
        setMode('student');
        return;
      }
    }
    setMode('login');
  };

  const handleLogin = (profile) => {
    localStorage.setItem('academy_cedula', profile.cedula);
    setProfile(profile);
    setMode('student');
  };

  const handleProfileCreated = (profile) => {
    localStorage.setItem('academy_cedula', profile.cedula);
    setProfile(profile);
    setMode('student');
  };

  const handleLogout = () => {
    localStorage.removeItem('academy_cedula');
    setProfile(null);
    setMode('login');
  };

  if (mode === 'loading') return (
    <div className="min-h-screen bg-[#0b194f] flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#00ffd7] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (mode === 'login') return <AcademyLogin onLogin={handleLogin} onRegister={() => setMode('setup')} />;
  if (mode === 'setup') return <AcademySetup onProfileCreated={handleProfileCreated} />;
  if (mode === 'admin') return <AcademyAdmin profile={profile} />;

  return (
    <>
      <AcademyStudent profile={profile} onLogout={handleLogout} onOpenChat={() => setChatOpen(true)} />
      <AcademyChatbot externalOpen={chatOpen} onExternalOpenChange={setChatOpen} profile={profile} />
    </>
  );
}