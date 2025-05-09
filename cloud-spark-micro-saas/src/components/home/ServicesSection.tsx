
import React from 'react';
import { Heart, Activity, Stethoscope, Baby, Pill, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AppointmentForm from '../AppointmentForm';

const services = [
  {
    title: 'Cardiology',
    description: 'Comprehensive heart care with advanced diagnostic and treatment options.',
    icon: <Heart className="h-10 w-10 text-primary" />
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response and expert medical attention.',
    icon: <Activity className="h-10 w-10 text-primary" />
  },
  {
    title: 'General Medicine',
    description: 'Primary healthcare services for patients of all ages and medical conditions.',
    icon: <Stethoscope className="h-10 w-10 text-primary" />
  },
  {
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    icon: <Baby className="h-10 w-10 text-primary" />
  },
  {
    title: 'Pharmacy',
    description: 'Full-service pharmacy with prescription medications and health products.',
    icon: <Pill className="h-10 w-10 text-primary" />
  },
  {
    title: 'Neurology',
    description: 'Diagnosis and treatment of disorders of the nervous system.',
    icon: <Brain className="h-10 w-10 text-primary" />
  }
];

const ServicesSection = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState('');

  const handleServiceClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsAppointmentOpen(true);
  };

  return (
    <section id="services-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet your healthcare needs with excellence and compassion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button 
                variant="outline" 
                className="text-primary border-primary hover:bg-primary/10"
                onClick={() => handleServiceClick(service.title)}
              >
                Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isAppointmentOpen} onOpenChange={setIsAppointmentOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {selectedService ? `Book ${selectedService} Appointment` : 'Book an Appointment'}
            </DialogTitle>
          </DialogHeader>
          <AppointmentForm onComplete={() => setIsAppointmentOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
