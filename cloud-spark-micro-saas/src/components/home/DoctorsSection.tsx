
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AppointmentForm from '../AppointmentForm';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&h=300&auto=format&fit=crop',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=300&h=300&auto=format&fit=crop',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=300&h=300&auto=format&fit=crop',
  }
];

const DoctorsSection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleBookAppointment = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    setIsAppointmentOpen(true);
  };

  return (
    <section className="py-16" id="doctors-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Expert Doctors</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of experienced and dedicated medical professionals committed to providing the highest quality care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 rounded-full overflow-hidden w-32 h-32">
                <img 
                  src={doctor.imageUrl} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
              <p className="text-primary font-medium mb-4">{doctor.specialty}</p>
              
              <Button 
                className="mt-auto bg-primary/10 hover:bg-primary/20 text-primary flex items-center gap-2"
                onClick={() => handleBookAppointment(doctor.name)}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book an Appointment with {selectedDoctor}</DialogTitle>
          </DialogHeader>
          <AppointmentForm 
            onComplete={() => setIsAppointmentOpen(false)} 
            preselectedDoctor={selectedDoctor} 
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DoctorsSection;
