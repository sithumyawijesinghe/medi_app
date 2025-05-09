
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AppointmentForm from '../AppointmentForm';

const HeroSection = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
          Your Health Is Our <span className="gradient-heading">Priority</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Providing exceptional healthcare services with compassion and cutting-edge technology to ensure the well-being of our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
            <DialogTrigger asChild>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-lg">
                Book Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Book an Appointment</DialogTitle>
              </DialogHeader>
              <AppointmentForm onComplete={() => setIsAppointmentOpen(false)} />
            </DialogContent>
          </Dialog>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 text-lg"
              onClick={() => scrollToSection('services-section')}
            >
              Our Services
            </Button>
            
            <Button 
              variant="outline" 
              className="border-green-500 text-green-500 hover:bg-green-50 px-6 py-2 text-lg"
              onClick={() => scrollToSection('doctors-section')}
            >
              Our Doctors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
