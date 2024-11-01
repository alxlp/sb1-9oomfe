import React from 'react';
import clsx from 'clsx';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

interface TabsListProps {
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  onChange: (value: string) => void;
}>({
  value: '',
  onChange: () => {},
});

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children }) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <div className="space-y-4">{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {children}
      </nav>
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children }) => {
  const { value: selectedValue, onChange } = React.useContext(TabsContext);
  const isSelected = value === selectedValue;

  return (
    <button
      onClick={() => onChange(value)}
      className={clsx(
        'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
        isSelected
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      )}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const { value: selectedValue } = React.useContext(TabsContext);

  if (value !== selectedValue) {
    return null;
  }

  return <div className="pt-4">{children}</div>;
};