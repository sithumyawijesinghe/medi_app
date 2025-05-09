
import React from 'react';
import { Card } from '@/components/ui/card';
import { GitBranch, Clock, Check, AlertCircle, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample pipeline data
const pipelines = [
  {
    id: 1,
    name: 'main',
    status: 'success',
    duration: '3m 42s',
    commit: 'feat: add user authentication',
    commitId: 'a1b2c3d',
    timestamp: '12 min ago',
  },
  {
    id: 2,
    name: 'feature/api-refactor',
    status: 'running',
    duration: '1m 15s',
    commit: 'refactor: update API response format',
    commitId: 'e4f5g6h',
    timestamp: '24 min ago',
  },
  {
    id: 3,
    name: 'fix/dashboard-loading',
    status: 'failed',
    duration: '2m 03s',
    commit: 'fix: resolve dashboard loading issue',
    commitId: 'i7j8k9l',
    timestamp: '1h 5m ago',
  },
  {
    id: 4,
    name: 'develop',
    status: 'success',
    duration: '4m 12s',
    commit: 'chore: update dependencies',
    commitId: 'm1n2o3p',
    timestamp: '2h 30m ago',
  },
];

const PipelineStatus = () => {
  return (
    <Card className="dashboard-card overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Pipeline Status</h2>
        <button className="text-xs text-primary hover:text-primary/80 transition-colors">
          View all
        </button>
      </div>
      
      <div className="space-y-4">
        {pipelines.map((pipeline) => (
          <div key={pipeline.id} className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
            <div className="flex-shrink-0">
              {pipeline.status === 'success' && (
                <div className="h-8 w-8 rounded-full bg-devops-success/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-devops-success" />
                </div>
              )}
              {pipeline.status === 'running' && (
                <div className="h-8 w-8 rounded-full bg-devops-blue/20 flex items-center justify-center">
                  <RotateCw className="h-4 w-4 text-devops-blue animate-spin" />
                </div>
              )}
              {pipeline.status === 'failed' && (
                <div className="h-8 w-8 rounded-full bg-devops-error/20 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-devops-error" />
                </div>
              )}
            </div>
            
            <div className="min-w-0 flex-1">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium truncate">
                  {pipeline.name}
                </p>
                <span
                  className={cn(
                    'status-badge',
                    pipeline.status === 'success' && 'status-success',
                    pipeline.status === 'running' && 'bg-devops-blue/20 text-devops-blue',
                    pipeline.status === 'failed' && 'status-error',
                  )}
                >
                  {pipeline.status}
                </span>
              </div>
              <div className="flex mt-1 text-xs text-muted-foreground">
                <div className="flex items-center mr-3">
                  <GitBranch className="mr-1 h-3 w-3" />
                  <span>{pipeline.commitId}</span>
                </div>
                <div className="flex items-center mr-3">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>{pipeline.duration}</span>
                </div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground truncate">{pipeline.commit}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PipelineStatus;
