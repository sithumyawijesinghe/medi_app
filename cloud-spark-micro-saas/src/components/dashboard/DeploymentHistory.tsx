
import React from 'react';
import { Card } from '@/components/ui/card';
import { Layers, Clock, Server, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample deployment data
const deployments = [
  {
    id: 1,
    environment: 'production',
    status: 'success',
    version: 'v1.2.4',
    timestamp: '2h 15m ago',
    duration: '45s',
  },
  {
    id: 2,
    environment: 'staging',
    status: 'success',
    version: 'v1.2.5-rc.1',
    timestamp: '1h 20m ago',
    duration: '40s',
  },
  {
    id: 3,
    environment: 'production',
    status: 'failed',
    version: 'v1.2.3',
    timestamp: '1d 4h ago',
    duration: '1m 12s',
  },
  {
    id: 4,
    environment: 'development',
    status: 'success',
    version: 'v1.2.5-dev',
    timestamp: '30m ago',
    duration: '38s',
  },
];

const DeploymentHistory = () => {
  return (
    <Card className="dashboard-card overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Recent Deployments</h2>
        <button className="text-xs text-primary hover:text-primary/80 transition-colors">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {deployments.map((deployment) => (
          <div key={deployment.id} className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
            <div className="flex-shrink-0">
              <div className={cn(
                "h-8 w-8 rounded-full flex items-center justify-center",
                deployment.environment === 'production' ? 'bg-devops-purple/20' : 
                deployment.environment === 'staging' ? 'bg-devops-blue/20' : 'bg-devops-indigo/20'
              )}>
                <Server className={cn(
                  "h-4 w-4",
                  deployment.environment === 'production' ? 'text-devops-purple' : 
                  deployment.environment === 'staging' ? 'text-devops-blue' : 'text-devops-indigo'
                )} />
              </div>
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <p className="text-sm font-medium truncate mr-2">
                    {deployment.environment}
                  </p>
                  <ArrowRight className="h-3 w-3 text-muted-foreground mx-1" />
                  <p className="text-sm font-medium">{deployment.version}</p>
                </div>
                <span
                  className={cn(
                    'status-badge',
                    deployment.status === 'success' && 'status-success',
                    deployment.status === 'failed' && 'status-error',
                  )}
                >
                  {deployment.status}
                </span>
              </div>
              <div className="flex mt-1 text-xs text-muted-foreground">
                <div className="flex items-center mr-3">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{deployment.timestamp}</span>
                </div>
                <div className="flex items-center">
                  <Layers className="mr-1 h-3 w-3" />
                  <span>Duration: {deployment.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DeploymentHistory;
