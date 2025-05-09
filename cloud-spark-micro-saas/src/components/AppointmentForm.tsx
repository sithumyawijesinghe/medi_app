import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

type AppointmentFormProps = {
  onComplete: () => void;
  preselectedDoctor?: string;
};

const AppointmentForm = ({ onComplete, preselectedDoctor }: AppointmentFormProps) => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [department, setDepartment] = useState('');
  const [doctor, setDoctor] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedDoctor) {
      setDoctor(preselectedDoctor);
      
      if (preselectedDoctor.includes('Sarah Johnson')) {
        setDepartment('cardiology');
      } else if (preselectedDoctor.includes('Michael Chen')) {
        setDepartment('neurology');
      } else if (preselectedDoctor.includes('Emily Rodriguez')) {
        setDepartment('pediatrics');
      } else if (preselectedDoctor.includes('James Wilson')) {
        setDepartment('orthopedics');
      }
    }
  }, [preselectedDoctor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Appointment Booked",
        description: `Your appointment has been scheduled for ${date} at ${time} with ${doctor || 'one of our specialists'}.`,
      });
      onComplete();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            placeholder="Enter your phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Preferred Date</Label>
          <Input 
            id="date" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time</Label>
          <Select value={time} onValueChange={setTime} required>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">9:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="15:00">3:00 PM</SelectItem>
              <SelectItem value="16:00">4:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Select value={department} onValueChange={setDepartment} required>
            <SelectTrigger>
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
              <SelectItem value="general">General Medicine</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="doctor">Select Doctor {preselectedDoctor ? '(Preselected)' : '(Optional)'}</Label>
        <Select value={doctor} onValueChange={setDoctor} disabled={!!preselectedDoctor}>
          <SelectTrigger>
            <SelectValue placeholder="Select doctor" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Dr. Sarah Johnson">Dr. Sarah Johnson</SelectItem>
            <SelectItem value="Dr. Michael Chen">Dr. Michael Chen</SelectItem>
            <SelectItem value="Dr. Emily Rodriguez">Dr. Emily Rodriguez</SelectItem>
            <SelectItem value="Dr. James Wilson">Dr. James Wilson</SelectItem>
            <SelectItem value="Dr. Smith">Dr. Smith</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <textarea 
          id="message"
          className="w-full min-h-[100px] p-3 border rounded-md"
          placeholder="Please tell us about your symptoms or any specific concerns"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="flex justify-end space-x-2 pt-2">
        <Button type="button" variant="outline" onClick={onComplete}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
        </Button>
      </div>
    </form>
  );
};

export default AppointmentForm;
