
import React from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample system health data
const systemData = [
  { name: 'API', cpu: 32, memory: 45, latency: 120 },
  { name: 'Auth', cpu: 24, memory: 38, latency: 90 },
  { name: 'DB', cpu: 67, memory: 72, latency: 150 },
  { name: 'Cache', cpu: 18, memory: 41, latency: 60 },
  { name: 'Worker', cpu: 42, memory: 56, latency: 110 },
  { name: 'Storage', cpu: 28, memory: 64, latency: 75 },
];

const SystemHealth = () => {
  return (
    <Card className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-devops-blue mr-2" />
          <h2 className="text-lg font-medium">System Health</h2>
        </div>
        <div className="flex space-x-2">
          <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">Last 24 hours</span>
        </div>
      </div>
      
      <div className="h-[280px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={systemData}
            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickLine={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                color: 'hsl(var(--card-foreground))'
              }}
            />
            <Bar dataKey="cpu" name="CPU %" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="memory" name="Memory %" fill="#4f46e5" radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-4">
        {systemData.map((service) => (
          <div key={service.name} className="bg-secondary/50 p-2 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium">{service.name}</span>
              <span className={cn(
                "text-xs px-1.5 py-0.5 rounded",
                service.cpu > 60 || service.memory > 70 ? "bg-devops-warning/20 text-devops-warning" : "bg-devops-success/20 text-devops-success"
              )}>
                {service.cpu > 60 || service.memory > 70 ? "Warning" : "Healthy"}
              </span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              <span className="inline-block w-16">CPU: {service.cpu}%</span>
              <span>Mem: {service.memory}%</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SystemHealth;
