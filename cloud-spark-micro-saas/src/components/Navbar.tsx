
import React, { useState } from 'react';
import { Menu, Phone, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppointmentForm from './AppointmentForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the home page, navigate to home and then scroll
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">
            <span className="gradient-heading">MediCare</span>
          </h1>
          <nav className="hidden md:flex gap-6 ml-6">
            <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">Home</a>
            <a 
              href="#services-section" 
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              onClick={(e) => {e.preventDefault(); scrollToSection('services-section');}}
            >
              Services
            </a>
            <a 
              href="#doctors-section" 
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              onClick={(e) => {e.preventDefault(); scrollToSection('doctors-section');}}
            >
              Doctors
            </a>
            <a href="#" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">Departments</a>
            <a href="#" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">About Us</a>
            <a href="#" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">Contact</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Calendar className="h-5 w-5" />
          </Button>
          <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white">
                Make Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Book an Appointment</DialogTitle>
              </DialogHeader>
              <AppointmentForm onComplete={() => setIsAppointmentOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
