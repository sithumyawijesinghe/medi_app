
import React from 'react';
import { Card } from '@/components/ui/card';
import { Database, Server, Globe, Cpu, Cloud, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const ArchitectureMap = () => {
  return (
    <Card className="dashboard-card overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">System Architecture</h2>
        <button className="text-xs text-primary hover:text-primary/80 transition-colors">
          Expand view
        </button>
      </div>
      
      <div className="relative h-[300px] border border-border/50 rounded-md bg-secondary/30 flex items-center justify-center p-6">
        {/* This is a simplified architecture visualization */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center">
            <Globe className="h-8 w-8 text-devops-blue mb-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded">User Interface</span>
            <div className="h-6 border-l border-dashed border-border"></div>
          </div>
        </div>
        
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 text-devops-indigo mb-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded">API Gateway</span>
            <div className="h-6 border-l border-dashed border-border"></div>
          </div>
        </div>
        
        {/* Service layer */}
        <div className="flex justify-center space-x-12 items-center">
          <div className="flex flex-col items-center z-10">
            <Server className="h-8 w-8 text-devops-pink mb-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded">Auth Service</span>
            <div className="h-6 border-l border-dashed border-border mt-1"></div>
            <Database className="h-6 w-6 text-devops-purple mt-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded mt-1">Auth DB</span>
          </div>
          
          <div className="flex flex-col items-center z-10">
            <Server className="h-8 w-8 text-devops-pink mb-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded">Core API</span>
            <div className="h-6 border-l border-dashed border-border mt-1"></div>
            <Database className="h-6 w-6 text-devops-purple mt-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded mt-1">Main DB</span>
          </div>
          
          <div className="flex flex-col items-center z-10">
            <Cpu className="h-8 w-8 text-devops-blue mb-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded">Worker Nodes</span>
            <div className="h-6 border-l border-dashed border-border mt-1"></div>
            <Cloud className="h-6 w-6 text-devops-indigo mt-1" />
            <span className="text-xs font-medium bg-background/80 px-2 py-1 rounded mt-1">Storage</span>
          </div>
        </div>
        
        {/* Connection lines */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M240,160 C240,120 360,120 360,160"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="4 2"
              fill="none"
            />
            <path
              d="M240,160 C240,200 360,200 360,160"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="4 2"
              fill="none"
            />
            <path
              d="M300,100 C300,120 200,140 200,160"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="4 2"
              fill="none"
            />
            <path
              d="M300,100 C300,120 400,140 400,160"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              strokeDasharray="4 2"
              fill="none"
            />
          </svg>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="text-xs text-muted-foreground flex items-center">
          <div className="w-3 h-3 rounded-full bg-devops-success mr-2"></div>
          <span>Healthy Services (8)</span>
        </div>
        <div className="text-xs text-muted-foreground flex items-center">
          <div className="w-3 h-3 rounded-full bg-devops-warning mr-2"></div>
          <span>Warning Services (2)</span>
        </div>
        <div className="text-xs text-muted-foreground flex items-center">
          <div className="w-3 h-3 rounded-full bg-devops-error mr-2"></div>
          <span>Critical Services (0)</span>
        </div>
        <div className="text-xs text-muted-foreground flex items-center">
          <div className="w-3 h-3 rounded-full bg-devops-gray mr-2"></div>
          <span>Inactive Services (1)</span>
        </div>
      </div>
    </Card>
  );
};

export default ArchitectureMap;
