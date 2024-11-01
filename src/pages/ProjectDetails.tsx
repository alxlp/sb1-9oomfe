import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectStore } from '../store/projectStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { IssueList } from '../components/issues/IssueList';
import { TimeTracker } from '../components/TimeTracker';
import { ProjectSettings } from '../components/projects/ProjectSettings';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = useProjectStore((state) =>
    state.projects.find((p) => p.id === Number(id))
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {project.description}
          </p>
        </div>
      </div>

      <Tabs defaultValue="issues">
        <TabsList>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="time">Time Tracking</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="issues">
          <IssueList projectId={project.id} />
        </TabsContent>

        <TabsContent value="time">
          <TimeTracker projectId={project.id} />
        </TabsContent>

        <TabsContent value="settings">
          <ProjectSettings project={project} />
        </TabsContent>
      </Tabs>
    </div>
  );
};